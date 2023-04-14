const mongoose = require("mongoose");
let customerSchema = new mongoose.Schema({
  customer_name: String,
  customer_email: String,
  customer_password: String,
  customer_phone_number: Number,
  customer_description: String,
  customer_joined_date: String,
  filepath: String,
});
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
