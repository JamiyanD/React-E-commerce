const express = require("express");
const Category = require("../models/product-category");
const categories_router = express.Router();
const multer = require("multer");
const upload = require("../config/config");
const mongoose = require("mongoose");
const cloudinary = require("../config/cloudinary");


categories_router.get("/category", async (req, res) => {
  const result = await Category.find({});
  res.json(result);
});

categories_router.get("/category/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const category = await Category.findOne({ slug });
    // console.log('CCCCCCC', slug, category)
    if (!category) return res.status(404).json({
      message: "Category Not Found"
    });

    return res.json(category);
  } catch (err) {
    console.log('err', err)
    res.status(500).json({ error: err.message });
  }
});

categories_router.post("/category", async (req, res) => {
  const { category_name, isEdit, _id } = req.body;

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

categories_router.delete("/category", async (req, res) => {
  const body = req.body;
  const deleteCategory = await Category.findOneAndDelete({ _id: body.userId });
  const result = await Category.find({});
  // console.log(deleteCategory);
  res.json({ data: result });
});

categories_router.put("/category", async (req, res) => {
  const body = req.body;
  const findCategory = await Category.findOne({ _id: body.userId });
  res.json({ data: findCategory });
});

module.exports = categories_router;
