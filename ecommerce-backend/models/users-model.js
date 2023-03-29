const mongoose = require("mongoose");
let usersSchema = new mongoose.Schema({
  full_name: String,
  email: { type: String, unique: true },
  role: String,
  phone_number: Number,
  joined_data: String,
  password: Number,
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
