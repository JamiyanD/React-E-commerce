const express = require("express");
const Users = require("../models/user-model");
const Roles = require("../models/user-roles-model");
const bcrypt = require("bcrypt");
const users_router = express.Router();
const multer = require("multer");
const upload = require("../config/config");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./user-upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
const cloudinary = require("../config/cloudinary");

users_router.get("/users", async (req, res) => {
  const result = await Users.find({});
  res.json(result);
});

const SALT_ROUNDS = 10;
users_router.post("/users", upload.single("image"), async (req, res) => {
  const {
    isEdit,
    full_name,
    userId,
    phone_number,
    email,
    password,
    role,
    filepath,
    joined_date,
  } = req.body;
  const body = req.body;
  console.log("file", req.file);
  console.log("body", req.body);
  if (isEdit) {
    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path);
      const updateUser = await Users.updateOne(
        { _id: userId },
        {
          $set: {
            full_name: full_name,
            phone_number: phone_number,
            email: email,
            password: password,
            role: role,

            joined_date: joined_date,
            filepath: upload.secure_url,
          },
        }
      );
    } else {
      const updateUser = await Users.updateOne(
        { _id: userId },
        {
          $set: {
            full_name: full_name,
            phone_number: phone_number,
            email: email,
            password: password,
            role: role,

            joined_date: joined_date,
            filepath: filepath,
          },
        }
      );
    }

    res.json({ data: [] });
  } else {
    const upload = await cloudinary.uploader.upload(req.file.path);

    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      if (err) {
        response.json({
          status: "generating salt error",
        });
      }
      bcrypt.hash(password, salt, async (hashError, hashData) => {
        if (hashError) {
          response.json({
            status: "hashing has error",
            data: [],
          });
        }
        console.log("hashed Data :", hashData);
        const newUsers = {
          ...body,
          password: hashData,
          filepath: upload.secure_url,
        };

        console.log("data", newUsers);
        const modelUsers = new Users(newUsers);
        const result = await modelUsers.save();
        res.json({ status: "success", data: result });
      });
    });
  }
});

users_router.delete("/users", async (req, res) => {
  const { userId } = req.body;
  console.log(userId);

  const deleteUser = await Users.findOneAndDelete({ _id: userId });
  const result = await Users.find({});
  res.json({ data: result });
});

users_router.put("/users", async (req, res) => {
  const body = req.body;
  console.log(body);
  const findUser = await Users.findOne({ _id: body.userId });
  console.log(findUser);
  res.json({ data: findUser });
});

users_router.post("/roles", async (req, res) => {
  const { isEdit, roles_name, _id } = req.body;
  console.log(req.body);
  if (isEdit) {
    const editRoles = await Roles.updateOne(
      { _id: _id },
      { $set: { roles_name: roles_name } }
    );
    console.log(editRoles);
    const result = await Roles.find({});
    res.json({ data: result });
  } else {
    const addRoles = new Roles({ roles_name: roles_name });
    const a = await addRoles.save();
    const result = await Roles.find({});
    res.json({ data: result });
  }
});

users_router.get("/roles", async (req, res) => {
  const result = await Roles.find({});
  res.json({ status: "success", data: result });
});

users_router.put("/roles", async (req, res) => {
  const body = req.body;
  const findRoles = await Roles.findOne({ _id: body.userId });
  res.json({ data: findRoles });
});

users_router.delete("/roles", async (req, res) => {
  const body = req.body;
  console.log(body);
  const deleteRoles = await Roles.findOneAndDelete({ _id: body.userId });

  const result = await Roles.find({});
  res.json({ data: result });
});

users_router.get("/search", async (req, res) => {
  console.log(req.query);
  const savedUsers = await Users.find({
    full_name: { $regex: req.query.value, $options: "i" },
  });
  console.log(savedUsers);

  res.json(savedUsers);
});

users_router.post("/login", async (request, response) => {
  const body = request.body;

  const foundUsers = await Users.findOne({ email: body.email });
  console.log(foundUsers);
  if (foundUsers == null) {
    response.json({
      status: "User Not Found",
      data: [],
    });
  } else {
    console.log(foundUsers);
    const plainPassword = body.password;
    const savedPassword = foundUsers.password;
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

module.exports = users_router;
