import { pool } from "../config/mysql-config.js";

export async function getProducts() {
  const [rows] = await pool.query(`select * from product `);
  return rows;
}

export async function addProduct(name, code, quantity, price, category) {
  const query = `INSERT INTO product (name, code, quantity, price, category_id ) VALUES(?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    name,
    code,
    quantity,
    price,
    category,
  ]);
  return rows;
}

export async function updateGetProduct(productId) {
  const query = `SELECT * FROM product WHERE id=${productId}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteProduct(id) {
  // productsArray.map(async (id) => {
  console.log(id);
  const query = `DELETE FROM product WHERE id = ${id}`;
  const [rows] = await pool.query(query);
  const [row] = await pool.query(`select * from product `);
  // });
  return row;
}

export async function updateProduct(
  name,
  code,
  quantity,
  price,
  category_id,
  productId
) {
  const query = `UPDATE product SET name='${name}',code='${code}',quantity='${quantity}',price='${price}',category_id='${category_id}' WHERE id = ${productId}`;
  const [row] = await pool.query(query);

  return row;
}
