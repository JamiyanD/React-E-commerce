const express = require("express");
const Users = require("../models/users-model");
const users_router = express.Router();

users_router.get("/users", async (req, res) => {
  const result = await Users.find({});
  res.json({ data: result });
});

users_router.post("/users", async (req, res) => {
  const { isEdit, full_name, userId } = req.body;
  const body = req.body;
  console.log(body);
  console.log(full_name, userId);
  if (isEdit) {
    const updateUser = await Users.updateOne(
      { _id: userId },
      { $set: { full_name: full_name } }
    );
    console.log(updateUser);
    res.json({ data: [] });
  } else {
    const newUser = new Users(body);
    const result = await newUser.save();
    res.json({ data: result });
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

module.exports = users_router;
