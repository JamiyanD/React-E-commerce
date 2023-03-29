import express from "express";
import { getProductCategories } from "../services/productCategoriesServices.js";
const productCategories_router = express.Router();

productCategories_router.get(
  "/product-categories",
  async (request, response) => {
    const body = request.body;
    const result = await getProductCategories();
    response.status(200).send(result);
  }
);

// emp_router.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   response.status(200).send({});
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   console.log(result);
// });

// emp_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await fireEmployee(body.empNo);
//   response.status(200).send({});
// });

// emp_router.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(result);
//   response.status(200).send({});
// });
export default productCategories_router;
