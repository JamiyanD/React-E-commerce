const express = require("express");
const OrderStatus = require("../models/order-status");
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
  const findCategory = await OrderStatus.findOne({ _id: body.orderId });
  res.json(findCategory);
});

order_router.get("/order/status", async (req, res) => {
  const result = await OrderStatus.find({});
  res.json({ status: "success", data: result });
});

order_router.post("/order/status", async (req, res) => {
  const { order_status_name, isEdit, _id } = req.body;

  if (isEdit) {
    const editStatus = await OrderStatus.updateOne(
      { _id: _id },
      { $set: { order_status_name: order_status_name } }
    );
    console.log(editStatus);
    const result = await OrderStatus.find({});
    res.json({ data: result });
  } else {
    const addStatus = new OrderStatus({ order_status_name: order_status_name });
    const a = await addStatus.save();
    const result = await OrderStatus.find({});
    res.json(result);
  }
});

order_router.delete("/order/status", async (req, res) => {
  const body = req.body;
  const deleteStatus = await OrderStatus.findOneAndDelete({ _id: body.userId });
  const result = await OrderStatus.find({});
  console.log(deleteStatus);
  res.json({ data: result });
});

order_router.put("/order/status", async (req, res) => {
  const body = req.body;
  const findStatus = await OrderStatus.findOne({ _id: body.userId });
  res.json({ data: findStatus });
});

module.exports = order_router;
