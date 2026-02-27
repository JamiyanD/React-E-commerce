const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    nameMn: String,
    nameKo: String,
    nameEn: String,
  },
  { _id: false }
);

const categorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  nameMn: String,
  nameKo: String,
  nameEn: String,
  subcategories: [subcategorySchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Category", categorySchema);