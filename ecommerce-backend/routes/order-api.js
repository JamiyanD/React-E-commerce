const express = require("express");
const Category = require("../models/product-category");
const Order = require("../models/order-model");
const order_router = express.Router();

order_router.get("/order", async (req, res) => {
  const result = await Order.find({});
  res.json(result);
});

order_router.post("/order", async (req, res) => {
  const { name, isEdit, _id, order_quantity, price } = req.body;
  const body = req.body;
  console.log(body);
  if (isEdit) {
    const editOrder = await Order.updateOne(
      { _id: _id },
      { $set: { name: name, order_quantity: order_quantity, price: price } }
    );
    console.log(editOrder);
    const result = await Order.find({});
    res.json(result);
  } else {
    body.map(async (order) => {
      let addOrder = new Order(order);
      const a = await addOrder.save();
    });

    res.json({ data: [] });
  }
});

order_router.delete("/order", async (req, res) => {
  const body = req.body;
  const deleteOrder = await Order.findOneAndDelete({ _id: body.orderId });
  const result = await Order.find({});
  console.log(deleteOrder);
  res.json(result);
});

order_router.put("/order", async (req, res) => {
  const body = req.body;
  const findCategory = await Order.findOne({ _id: body.orderId });
  res.json(findCategory);
});

module.exports = order_router;
