const mongoose = require("mongoose");
let customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  // customer_description: String,
  // customer_joined_date: String,
  // filepath: String,
  createdAt: {
    type: Date,
    default: Date.now
  },

});
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
