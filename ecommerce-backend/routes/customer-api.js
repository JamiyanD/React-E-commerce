const express = require("express");
const Customer = require("../models/customer-model");
const bcrypt = require("bcrypt");
const customer_router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./user-upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
customer_router.get("/customer", async (req, res) => {
  const result = await Customer.find({});
  res.json(result);
});

const SALT_ROUNDS = 10;
customer_router.post("/customer", upload.single("image"), async (req, res) => {
  const {
    customerId,
    customer_name,
    customer_email,
    customer_password,
    customer_phone_number,
    customer_description,
    customer_joined_date,
    filename,
    isEdit,
  } = req.body;
  const body = req.body;
  console.log("file", req.file);
  console.log("body", req.body);
  if (isEdit) {
    const updateCustomer = await Customer.updateOne(
      { _id: customerId },
      {
        $set: {
          customer_name: customer_name,
          customer_email: customer_email,
          customer_password: customer_password,
          customer_phone_number: customer_phone_number,
          customer_description: customer_description,
          customer_joined_date: customer_joined_date,
          filename: filename,
        },
      }
    );
    console.log(updateCustomer);
    res.json([]);
  } else {
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      if (err) {
        response.json({
          status: "generating salt error",
        });
      }
      bcrypt.hash(customer_password, salt, async (hashError, hashData) => {
        if (hashError) {
          response.json({
            status: "hashing has error",
            data: [],
          });
        }
        console.log("hashed Data :", hashData);
        const newCustomer = {
          customer_name: customer_name,
          customer_email: customer_email,
          customer_password: hashData,
          customer_phone_number: customer_phone_number,
          customer_description: customer_description,
          customer_joined_date: customer_joined_date,
          filename: filename,
        };
        console.log("data", newCustomer);
        const modelCustomer = new Customer(newCustomer);
        const result = await modelCustomer.save();
        res.json({ status: "success", data: result });
      });
    });
  }
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

customer_router.post("/customer/login", async (request, response) => {
  const body = request.body;

  const foundUsers = await Customer.findOne({
    customer_email: body.customer_email,
  });
  console.log(foundUsers);
  if (foundUsers == null) {
    response.json({
      status: "User Not Found",
      data: [],
    });
  } else {
    console.log(foundUsers);
    const plainPassword = body.customer_password;
    const savedPassword = foundUsers.customer_password;
    bcrypt.compare(
      plainPassword,
      savedPassword,
      (compareError, compareResult) => {
        if (compareError) {
          response.json({
            status: "User name or password do not match",
            data: [],
          });
        }

        if (compareResult) {
          response.json({ status: "success", data: foundUsers });
        } else {
          response.json({
            status: "Username or Password do not match!!",
            data: [],
          });
        }
      }
    );
  }
});

module.exports = customer_router;
