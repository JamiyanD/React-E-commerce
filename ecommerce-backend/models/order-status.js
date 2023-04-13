const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  order_status_name: { type: String, required: true },
});

const OrderStatus = mongoose.model("status", statusSchema);
module.exports = OrderStatus;
