const mongoose = require("mongoose");
let productsSchema = new mongoose.Schema({
  name: String,
  price: String,
  quantity: String,
  category: String,
  code: String,
  rating: String,
  filename: String,
});

const Products = mongoose.model("products", productsSchema);
module.exports = Products;
