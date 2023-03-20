import { pool } from "../config/mysql-config.js";

export async function getUsers() {
  const [rows] = await pool.query(`select * from user `);
  return rows;
}

export async function addUser(
  full_name,
  email,
  role,
  phone_number,
  joined_date,
  password
) {
  //   const query = ` INSERT INTO employees VALUES(@max_emp_id + 1,'1990-01-01','John','McKay','M','2010-01-01')`;
  const query = `INSERT INTO user (full_name,email,role,phone_number,joined_date,password) VALUES(?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    full_name,
    email,
    role,
    phone_number,
    joined_date,
    password,
  ]);
  return rows;
}

export async function updateGetUser(userId) {
  const query = `SELECT * FROM user WHERE id=${userId}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteUser(id) {
  // usersArray.map(async (id) => {
  const query = `DELETE FROM user WHERE id = ${id}`;
  const [rows] = await pool.query(query);
  // });
  const [row] = await pool.query(`select * from user `);
  return row;
}

export async function updateUser(
  full_name,
  email,
  role,
  phone_number,
  joined_date,
  password,
  userId
) {
  const query = `UPDATE user SET full_name='${full_name}',email='${email}',role='${role}',phone_number='${phone_number}',joined_date='${joined_date}',password='${password}' WHERE id = ${userId}`;
  const [row] = await pool.query(query);

  return row;
}
