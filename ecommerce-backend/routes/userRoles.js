import express from "express";
import { getUserRoles } from "../services/userRolesServices.js";
const userRoles_router = express.Router();

userRoles_router.get("/userRoles", async (request, response) => {
  const body = request.body;
  const result = await getUserRoles();
  response.status(200).send(result);
});

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
export default userRoles_router;
