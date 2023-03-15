import express from "express";
import { getUsers } from "../services/usersServices.js";
import { addUser } from "../services/usersServices.js";
import { deleteUser } from "../services/usersServices.js";
import { updateGetUser } from "../services/usersServices.js";
import { updateUser } from "../services/usersServices.js";
const users_router = express.Router();

users_router.get("/users", async (request, response) => {
  const body = request.body;
  const result = await getUsers();
  response.status(200).send(result);
});

users_router.post("/users", async (request, response) => {
  const {
    full_name,
    email,
    role,
    phone_number,
    joined_date,
    password,
    isEdit,
    userId,
  } = request.body;
  console.log(isEdit);
  if (isEdit) {
    console.log("dsaddsdA", isEdit);
    const result = await updateUser(
      full_name,
      email,
      role,
      phone_number,
      joined_date,
      password,
      userId
    );
    response.status(200).send(result);
  } else {
    const result = await addUser(
      full_name,
      email,
      role,
      phone_number,
      joined_date,
      password
    );
    response.status(200).send(result);
  }
});

users_router.put("/users", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await updateGetUser(body.userId);
  response.status(200).send(result);
  console.log(result);
});

users_router.delete("/users", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await deleteUser(body.userId);
  response.status(200).send(result);
});

users_router.get("/search", async (request, response) => {
  console.log("user", request.query.value);
  const result = await getUsers();
  const foundCategory = result.filter((user) =>
    user.full_name.toLowerCase().includes(request.query.value.toLowerCase())
  );
  response.status(200).send(foundCategory);
});

export default users_router;
