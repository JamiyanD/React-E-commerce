const mongoose = require("mongoose");
let usersSchema = new mongoose.Schema({
  full_name: String,
  email: { type: String, unique: true },
  role: String,
  phone_number: String,
  joined_date: String,
  password: String,
  filepath: String,
});
const User = mongoose.model("users", usersSchema);
module.exports = User;
