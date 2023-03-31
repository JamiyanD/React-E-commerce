const mongoose = require("mongoose");
let productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
  code: Number,
  rating: Number,
});

const Products = mongoose.model("products", productsSchema);
module.exports = Products;
