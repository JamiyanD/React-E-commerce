const express = require("express");
const Customer = require("../models/customer-model");
const bcrypt = require("bcrypt");
const customer_router = express.Router();
const multer = require("multer");
const upload = require("../config/config");

const cloudinary = require("../config/cloudinary");

customer_router.get("/customer", async (req, res) => {
  const result = await Customer.find({});
  res.json(result);
});

const SALT_ROUNDS = 10;
customer_router.post("/customer", upload.single("image"), async (req, res) => {
  const {
    name,
    phone,
    email,
    password
  } = req.body;
  const body = req.body;
  console.log("file", req.file);
  console.log("customer body", req.body);

  const findCustomer = await Customer.findOne({
    phone: phone,
  });

  if (findCustomer) {
    return res.status(200).json({
      status: "Ali hediin burtgegdsen bna",

    });
  }
  // if (isEdit) {
  //   if (req.file) {
  //     const upload = await cloudinary.uploader.upload(req.file.path);
  //     const updateCustomer = await Customer.updateOne(
  //       { _id: customerId },
  //       {
  //         $set: {
  //           customer_name: customer_name,
  //           customer_email: customer_email,
  //           password: password,
  //           customer_phone_number: customer_phone_number,
  //           customer_description: customer_description,
  //           customer_joined_date: customer_joined_date,
  //           filepath: upload.secure_url,
  //         },
  //       }
  //     );
  //   } else {
  //     const updateCustomer = await Customer.updateOne(
  //       { _id: customerId },
  //       {
  //         $set: {
  //           customer_name: customer_name,
  //           customer_email: customer_email,
  //           password: password,
  //           customer_phone_number: customer_phone_number,
  //           customer_description: customer_description,
  //           customer_joined_date: customer_joined_date,
  //           filepath: filepath,
  //         },
  //       }
  //     );
  //   }

  //   res.json([]);
  // } else {
  // const upload = await cloudinary.uploader.upload(req.file.path);
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    console.log("salt", salt);

    const hashData = await bcrypt.hash(String(password), salt);
    console.log("hashed Data :", hashData);

    const newCustomer = {
      ...body,
      password: hashData,
      // filepath: upload.secure_url,
    };

    console.log("new customer data", newCustomer);

    const modelCustomer = new Customer(newCustomer);
    const result = await modelCustomer.save();

    return res.status(200).json({
      status: "success",
      data: result,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return res.status(500).json({
      status: "Burtgel uusgehed aldaa garlaa",
      error: error.message,
    });
  }
  // }
});

customer_router.delete("/customer", async (req, res) => {
  const { customerId } = req.body;
  console.log(customerId);

  const deleteCustomer = await Customer.findOneAndDelete({ _id: customerId });
  const result = await Customer.find({});
  res.json(result);
});

customer_router.put("/customer", async (req, res) => {
  const body = req.body;
  console.log(body);
  const findUser = await Customer.findOne({ _id: body.customerId });
  console.log(findUser);
  res.json({ data: findUser });
});

customer_router.get("/search", async (req, res) => {
  console.log(req.query);
  const savedUsers = await Users.find({
    full_name: { $regex: req.query.value, $options: "i" },
  });
  console.log(savedUsers);

  res.json(savedUsers);
});

customer_router.post("/customer/login", async (req, res) => {
  const { phone, password } = req.body;

  const findCustomer = await Customer.findOne({
    phone: phone,
  });
  console.log("findCustomer", findCustomer);
  if (!findCustomer) {
    return res.status(404).json({
      message: "User Not Found",
    });
  } else {
    console.log(findCustomer);
    const plainPassword = password;
    const savedPassword = findCustomer.password;
    bcrypt.compare(
      plainPassword,
      savedPassword,
      (compareError, compareResult) => {
        if (compareError) {
          res.json({
            status: "User name or password do not match",
            data: [],
          });
        }

        if (compareResult) {
          res.json({ status: "success", data: findCustomer });
        } else {
          res.json({
            status: "Username or Password do not match!!",
            data: [],
          });
        }
      }
    );
  }
});

customer_router.post("/customer/findByPhone", async (req, res) => {
  const { phone } = req.body;

  const findCustomer = await Customer.findOne({
    phone: phone,
  });
  console.log("findCustomer", findCustomer);
  if (!findCustomer) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  res.json({ status: "success", data: findCustomer });

});

customer_router.get("/customer/search", async (req, res) => {
  console.log(req.query);
  const savedUsers = await Customer.find({
    customer_name: { $regex: req.query.value, $options: "i" },
  });
  console.log(savedUsers);

  res.json(savedUsers);
});

module.exports = customer_router;
