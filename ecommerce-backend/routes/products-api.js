const express = require("express");
const Category = require("../models/product-category");

const products_router = express.Router();

products_router.get("/category", async (req, res) => {
  const result = await Category.find({});
  res.json({ data: result });
});

products_router.post("/category", async (req, res) => {
  const { category_name, isEdit, _id } = req.body;
  console.log(req.body);
  if (isEdit) {
    const editCategory = await Category.updateOne(
      { _id: _id },
      { $set: { category_name: category_name } }
    );
    console.log(editCategory);
    const result = await Category.find({});
    res.json({ data: result });
  } else {
    const addCategory = new Category({ category_name: category_name });
    const a = await addCategory.save();
    const result = await Category.find({});
    res.json({ data: result });
  }
});

products_router.delete("/category", async (req, res) => {
  const body = req.body;
  const deleteCategory = await Category.findOneAndDelete({ _id: body.userId });
  const result = await Category.find({});
  console.log(deleteCategory);
  res.json({ data: result });
});

products_router.put("/category", async (req, res) => {
  const body = req.body;
  const findCategory = await Category.findOne({ _id: body.userId });
  res.json({ data: findCategory });
});

module.exports = products_router;
