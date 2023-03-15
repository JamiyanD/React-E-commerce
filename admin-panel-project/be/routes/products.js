import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
  updateGetProduct,
  updateProduct,
} from "../services/productsServices.js";

const products_router = express.Router();

products_router.get("/products", async (request, response) => {
  const body = request.body;
  const result = await getProducts();
  response.status(200).send(result);
});

products_router.post("/products", async (request, response) => {
  const { name, code, quantity, price, category_id, isEdit, productId } =
    request.body;

  if (isEdit) {
    const result = await updateProduct(
      name,
      code,
      quantity,
      price,
      category_id,
      productId
    );
    response.status(200).send(result);
  } else {
    const result = await addProduct(name, code, quantity, price, category_id);
    response.status(200).send(result);
  }
});

products_router.put("/products", async (request, response) => {
  const body = request.body;
  const result = await updateGetProduct(body.productId);
  response.status(200).send(result);
});

products_router.delete("/products", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await deleteProduct(body.userId);
  response.status(200).send(result);
});

products_router.get("/search", async (request, response) => {
  const result = await getProducts();
  const foundCategory = result.filter((product) =>
    product.name.toLowerCase().includes(request.query.value.toLowerCase())
  );
  response.status(200).send(foundCategory);
});

export default products_router;
