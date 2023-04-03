const mongoose = require("mongoose");
let usersSchema = new mongoose.Schema({
  full_name: String,
  email: { type: String, unique: true },
  role: String,
  phone_number: Number,
  joined_date: String,
  password: Number,
  filename: String,
});
const User = mongoose.model("users", usersSchema);
module.exports = User;
