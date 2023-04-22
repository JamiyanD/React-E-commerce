const express = require("express");
const Category = require("../models/product-category");
const Products = require("../models/products-model");
const products_router = express.Router();
const multer = require("multer");
const upload = require("../config/config");

const cloudinary = require("../config/cloudinary");

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
    filepath,
    gender,
    color,
    height,
    size,
    brand,
    description,
  } = req.body;
  console.log("file", req.file);
  console.log("body", req.body);

  if (isEdit) {
    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path);
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
            filepath: upload.secure_url,
            gender: gender,
            color: color,
            height: height,
            size: size,
            brand: brand,
            description: description,
          },
        }
      );
    } else {
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
            filepath: filepath,
            gender: gender,
            color: color,
            height: height,
            size: size,
            brand: brand,
            description: description,
          },
        }
      );
    }

    const result = await Products.find({});
    res.json({ data: result });
  } else {
    const upload = await cloudinary.uploader.upload(req.file.path);
    const withCloudinary = { ...body, filepath: upload.secure_url };
    console.log(withCloudinary);
    const addProducts = new Products(withCloudinary);
    const result = await addProducts.save();
    res.json(result);
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
  console.log(body);
  const findProducts = await Products.findOne({ _id: body.productsId });
  res.json(findProducts);
});

products_router.get("/search", async (req, res) => {
  console.log(req.query);
  try {
    const savedProducts = await Products.find({
      name: { $regex: req.query.value, $options: "i" },
    });
    console.log(savedProducts);

    res.json(savedProducts);
  } catch (error) {
    res.json([]);
  }
});

// products_router.get("/list", async (req, res) => {
//   console.log(req.query);
//   const page = req.query.page;
//   console.log(page);
//   const productsPerPage = req.query.productsPerPage;
//   try {
//     const savedProducts = await Products.find()
//       .limit(productsPerPage)
//       .skip(productsPerPage * page);

//     res.json(savedProducts);
//   } catch (error) {
//     res.json([]);
//   }
// });

products_router.post("/list", async (req, res) => {
  console.log(req.query);
  console.log(req.body);
  const page = req.query.page;
  console.log(page);
  const productsPerPage = req.query.productsPerPage;
  try {
    const savedProducts = await Products.find()
      .limit(productsPerPage)
      .skip(productsPerPage * page);
    if (req.body.select == "asc") {
      const savedProducts = await Products.find()
        .sort({ price: 1 })
        .limit(productsPerPage)
        .skip(productsPerPage * page);

      res.json(savedProducts);
    } else if (req.body.select == "desc") {
      const savedProducts = await Products.find()
        .sort({ price: -1 })
        .limit(productsPerPage)
        .skip(productsPerPage * page);
      res.json(savedProducts);
    } else {
      res.json(savedProducts);
    }
  } catch (error) {
    res.json([]);
  }
});

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
