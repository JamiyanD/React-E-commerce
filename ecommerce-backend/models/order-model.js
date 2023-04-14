const mongoose = require("mongoose");
let orderSchema = new mongoose.Schema({
  name: String,
  price: Number,
  order_quantity: Number,
  order_date: String,
  order_status_name: { type: String, default: "New Order" },
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
