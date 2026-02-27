const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    values: [
      {
        type: String,
      },
    ],
  },
);

let productsSchema = new mongoose.Schema({
  // name: String,
  // price: Number,
  // quantity: Number,
  // category: String,
  // code: Number,
  // rating: Number,
  // gender: String,
  // height: String,
  // size: Number,
  // color: String,
  // brand: String,
  // description: String,
  // filepath: String,
  id: String,
  categorySlug: String,
  subcategorySlug: String,
  name: String,
  price: Number,
  stockQty: Number,
  images: [String],
  options: [optionSchema],
  description: String,
  recommendedIds: [String],
});

const Products = mongoose.model("products", productsSchema);
module.exports = Products;
