const mongoose = require("mongoose");
let productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
  code: Number,
  rating: Number,
  gender: String,
  height: String,
  size: Number,
  color: String,
  brand: String,
  description: String,
  filepath: String,
});

const Products = mongoose.model("products", productsSchema);
module.exports = Products;
