console.log("it is my app.js");
import express from "express";
import cors from "cors";
import fs from "fs";
import bcrypt from "bcrypt";
import productCategories_router from "./routes/productCategories.js";
import userRoles_router from "./routes/userRoles.js";
import users_router from "./routes/users.js";
import products_router from "./routes/products.js";
const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());
app.use("/users", userRoles_router);
app.use("/products", productCategories_router);
app.use("/users", users_router);
app.use("/products", products_router);

// app.post("/user", (request, response) => {
//   const body = request.body;
//   const isEdit = body.isEdit;
//   console.log(body);
//   const savedUsers = fs.readFileSync("./data/users.json", {
//     encoding: "utf-8",
//     flag: "r",
//   });

//   const dataObject = JSON.parse(savedUsers);

//   const savedUserRoles = fs.readFileSync("./data/userRoles.json", {
//     encoding: "utf-8",
//     flag: "r",
//   });
//   const roleData = JSON.parse(savedUserRoles);
//   const roleName = roleData.filter((role) => role.id == body.role)[0];
//   console.log(roleName);

//   if (isEdit) {
//     dataObject.map((d) => {
//       if (d.id === body.id) {
//         (d.firstname = body.firstname),
//           (d.lastname = body.lastname),
//           (d.phoneNumber = body.phoneNumber),
//           (d.email = body.email),
//           (d.password = body.password),
//           (d.checkbox = body.checkbox),
//           (d.role.name = roleName.name),
//           (d.imgURL = body.imgURL);
//       }
//       return d;
//     });
//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(dataObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "success",
//             data: "file write error",
//           });
//         }

//         response.json({
//           status: "success",
//           data: dataObject,
//         });
//       }
//     );
//   } else {
//     const userPassword = body.password;
//     bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
//       if (err) {
//         response.json({
//           status: "generating salt error",
//         });
//       }
//       bcrypt.hash(userPassword, salt, (hashError, hashData) => {
//         if (hashError) {
//           response.json({
//             status: "hashing has error",
//             data: [],
//           });
//         }
//         console.log("hashed Data :", hashData);
//         const newUser = {
//           id: Date.now(),
//           firstname: body.firstname,
//           lastname: body.lastname,
//           phoneNumber: body.phoneNumber,
//           email: body.email,
//           password: hashData,
//           checkbox: body.checkbox,
//           role: roleName,
//           imgURL: body.imgURL,
//         };
//         console.log("data", dataObject);
//         dataObject.push(newUser);
//         fs.writeFile(
//           "./data/users.json",
//           JSON.stringify(dataObject),
//           (writeError) => {
//             if (writeError) {
//               response.json({
//                 status: "success",
//                 data: "file write error",
//               });
//             }

//             response.json({
//               status: "success",
//               data: dataObject,
//             });
//           }
//         );
//       });
//     });
//   }
// });

// app.get("/user", (request, response) => {
//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     // utf-8 n ymr formataar avhig zana
//     if (readError) {
//       response.json({
//         status: "file does not exist",
//         data: [],
//       });
//     }
//     const objectData = JSON.parse(readData);
//     response.json({
//       status: "success",
//       data: objectData,
//     });
//   });
// });

// app.delete("/user", (request, response) => {
//   const body = request.body;
//   console.log(body);
//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }

//     const readObject = JSON.parse(readData);
//     const filteredObject = readObject.filter((o) => o.id !== body.userId);
//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(filteredObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "write file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: filteredObject,
//         });
//       }
//     );
//   });
// });

// app.put("/user", (request, response) => {
//   const savedUsers = fs.readFileSync("./data/users.json", {
//     encoding: "utf-8",
//     flag: "r",
//   });
//   const savedUsersObj = JSON.parse(savedUsers);
//   const foundUser = savedUsersObj.filter((d) => d.id == request.body.userId)[0];
//   response.json({
//     status: "success",
//     data: foundUser,
//   });
// });

// // app.get("/user/roles", (request, response) => {
// //   fs.readFile("./data/userRoles.json", "utf-8", (readError, readData) => {
// //     if (readError) {
// //       response.json({
// //         status: "file does not exist",
// //       });
// //     }
// //     response.json({
// //       status: "success",
// //       data: JSON.parse(readData),
// //     });
// //   });
// // });

// app.get("/user/roles", (request, response) => {
//   fs.readFile(
//     "./data/productCategories.json",
//     "utf-8",
//     (readError, readData) => {
//       if (readError) {
//         response.json({
//           status: "file does not exist",
//         });
//       }
//       response.json({
//         status: "success",
//         data: JSON.parse(readData),
//       });
//     }
//   );
// });

// app.post("/product", (request, response) => {
//   const isEdit = request.body.isEdit;
//   const body = request.body;
//   const savedProducts = fs.readFileSync("./data/products.json", {
//     encoding: "utf-8",
//     flag: "r",
//   });
//   const dataObject = JSON.parse(savedProducts);

//   const savedProductCategories = fs.readFileSync(
//     "./data/productCategories.json",
//     {
//       encoding: "utf-8",
//       flag: "r",
//     }
//   );
//   const categoriesData = JSON.parse(savedProductCategories);
//   const categoryName = categoriesData.filter(
//     (category) => category.id == body.category
//   )[0];
//   console.log(categoryName);

//   const newProduct = {
//     id: Date.now(),
//     imgURL: body.imgURL,
//     title: body.title,
//     subtitle: body.subtitle,
//     price: body.price,
//     discount: body.discount,
//     description1: body.description1,
//     category: categoryName,
//     code: body.code,
//     hashtag: body.hashtag,
//     technology: body.technology,
//     rating: body.rating,
//   };
//   if (isEdit) {
//     dataObject.map((d) => {
//       if (d.id === body.id) {
//         (d.imgURL = body.imgURL),
//           (d.title = body.title),
//           (d.subtitle = body.subtitle),
//           (d.price = body.price),
//           (d.discount = body.discount),
//           (d.description1 = body.description1),
//           (d.description2 = body.description2),
//           (d.code = body.code);
//         d.hashtag = body.hashtag;
//         d.technology = body.technology;
//         d.rating = body.rating;
//       }
//       return d;
//     });
//   } else {
//     dataObject.push(newProduct);
//     console.log(newProduct);
//   }

//   fs.writeFile(
//     "./data/products.json",
//     JSON.stringify(dataObject),
//     (writeError) => {
//       if (writeError) {
//         response.json({
//           status: `Error during file write`,
//           data: [],
//         });
//       }
//       response.json({
//         status: "success",
//         data: dataObject,
//       });
//     }
//   );
// });

// app.get("/product", (request, response) => {
//   fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
//     // utf-8 n ymr formataar avhig zana
//     if (readError) {
//       response.json({
//         status: "file does not exist",
//         data: [],
//       });
//     }
//     const objectData = JSON.parse(readData);

//     response.json({
//       status: "success",
//       data: objectData,
//     });
//   });
// });

// app.delete("/product", (request, response) => {
//   const body = request.body;
//   console.log(body);
//   fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }

//     const readObject = JSON.parse(readData);
//     const filteredObject = readObject.filter((o) => o.id !== body.userId);
//     fs.writeFile(
//       "./data/products.json",
//       JSON.stringify(filteredObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "write file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: filteredObject,
//         });
//       }
//     );
//   });
// });

// app.put("/product", (request, response) => {
//   const savedProducts = fs.readFileSync("./data/products.json", {
//     encoding: "utf-8",
//     flag: "r",
//   });
//   const savedProductsObjectArray = JSON.parse(savedProducts);
//   const foundProduct = savedProductsObjectArray.filter(
//     (product) => product.id == request.body.productId
//   )[0];
//   response.json({
//     status: "success",
//     data: foundProduct,
//   });
// });

// // app.get("/search", (request, response) => {
// //   console.log(request.query);
// //   const savedCategories = fs.readFileSync("./data/products.json", {
// //     encoding: "utf-8",
// //     flag: "r",
// //   });
// //   const savedCategoriesArrayObject = JSON.parse(savedCategories);
// //   const foundCategory = savedCategoriesArrayObject.filter((product) =>
// //     product.title.includes(request.query.value)
// //   );
// //   response.json({
// //     status: "success",
// //     data: foundCategory,
// //   });
// // });

// app.post("/login", (request, response) => {
//   const body = request.body;
//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }
//     const usersArrayObject = JSON.parse(readData);
//     const foundUser = usersArrayObject.filter(
//       (user) => body.email === user.email
//     );
//     if (foundUser.length === 0) {
//       response.json({
//         status: "User Not Found",
//         data: [],
//       });
//     } else {
//       console.log(foundUser);
//       const foundUserObj = foundUser[0];
//       const plainPassword = body.password;
//       console.log(plainPassword);
//       const savedPassword = foundUserObj.password;
//       console.log(savedPassword);
//       bcrypt.compare(
//         plainPassword,
//         savedPassword,
//         (compareError, compareResult) => {
//           if (compareError) {
//             response.json({
//               status: "User name or password do not match",
//               data: [],
//             });
//           }

//           if (compareResult) {
//             response.json({
//               status: "success",
//               data: {
//                 email: foundUserObj.email,
//                 firstName: foundUserObj.firstname,
//                 lastName: foundUserObj.lastname,
//               },
//             });
//           } else {
//             response.json({
//               status: "Username or Password do not match!!",
//               data: [],
//             });
//           }
//         }
//       );
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
