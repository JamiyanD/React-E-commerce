const express = require("express");
const Category = require("../models/product-category");
const Products = require("../models/products-model");
const products_router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

products_router.get("/category", async (req, res) => {
  const result = await Category.find({});
  res.json({ status: "success", data: result });
});

products_router.post("/category", async (req, res) => {
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

products_router.post("/products", upload.single("image"), async (req, res) => {
  const body = req.body;
  const {
    isEdit,
    name,
    productsId,
    price,
    quantity,
    category,
    code,
    rating,
    filename,
  } = req.body;
  console.log("file", req.file);
  console.log("body", req.body);
  if (isEdit) {
    const updateProduts = await Products.updateOne(
      { _id: productsId },
      {
        $set: {
          name: name,
          price: price,
          quantity: quantity,
          category: category,
          code: code,
          rating: rating,
          filename: filename,
        },
      }
    );
    console.log(updateProduts);
    const result = await Products.find({});
    res.json({ data: result });
  } else {
    const addProducts = new Products(body);
    const result = await addProducts.save();
    res.json({ data: result });
  }
});

products_router.get("/products", async (req, res) => {
  const result = await Products.find({});
  res.json(result);
});
module.exports = products_router;

products_router.delete("/products", async (req, res) => {
  const body = req.body;
  const deleteProducts = await Products.findOneAndDelete({
    _id: body.productsId,
  });
  const result = await Products.find({});
  res.json({ data: result });
});

products_router.put("/products", async (req, res) => {
  const body = req.body;
  const findProducts = await Products.findOne({ _id: body.productsId });
  res.json({ data: findProducts });
});

products_router.get("/search", async (req, res) => {
  console.log(req.query);
  const savedProducts = await Products.find({
    name: { $regex: req.query.value, $options: "i" },
  });
  console.log(savedProducts);

  res.json(savedProducts);
});
