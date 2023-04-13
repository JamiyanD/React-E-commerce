import * as React from "react";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function Toolbar() {
  const URL = "http://localhost:8081/products/products";
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  async function axiosScreen() {
    const AXIOS_DATA = await axios.get(URL);
    setProducts(AXIOS_DATA.data.length);
  }
  const USERS_URL = "http://localhost:8081/users/users";
  async function axiosUsers() {
    const AXIOS_DATA = await axios.get(USERS_URL);
    setUsers(AXIOS_DATA.data.length);
  }
  const ORDER_URL = "http://localhost:8081/order/order";
  const [order, setOrder] = useState(0);

  async function axiosOrder() {
    const AXIOS_DATA = await axios.get(ORDER_URL);
    setOrder(AXIOS_DATA.data.length);
  }

  const CUSTOMER_URL = "http://localhost:8081/customer";
  const [customer, setCustomer] = useState([]);

  async function axiosCustomer() {
    const AXIOS_DATA = await axios.get(CUSTOMER_URL);
    setCustomer(AXIOS_DATA.data.length);
  }

  useEffect(() => {
    axiosScreen();
    axiosUsers();
    axiosOrder();
    axiosCustomer();
  }, []);
  return (
    <div
      style={{ backgroundColor: "#217AFF", color: "white" }}
      className="toolbar "
    >
      <div className="row container mx-auto gap-5">
        <div className="toolbar-box col  border-1  border rounded-5 p-2 d-flex ">
          <i class="bi bi-cart d-flex ms-1" style={{ fontSize: "60px" }}></i>
          <div className="ms-auto me-2">
            <h5 className="opacity-75"> Products</h5>
            <h4 className="">{products} </h4>
          </div>
        </div>
        <div className="toolbar-box col  border-1  border rounded-5 p-2  d-flex">
          <i class="bi bi-person d-flex" style={{ fontSize: "65px" }}></i>
          <div className="ms-auto me-2">
            <h4 className="opacity-75"> Users </h4>
            <h4 className="">{users} </h4>
          </div>
        </div>
        <div className="toolbar-box col  border-1  border rounded-5 p-2  d-flex">
          <i class="bi bi-list-ul d-flex" style={{ fontSize: "65px" }}></i>
          <div className="ms-auto me-2">
            <h4 className="opacity-75">Orders</h4>
            <h4 className="">{order} </h4>
          </div>
        </div>
        <div className="toolbar-box col  border-1  border rounded-5 p-2  d-flex">
          <i class="bi bi-person d-flex" style={{ fontSize: "65px" }}></i>
          <div className="ms-auto me-2">
            <h4 className="opacity-75">Customers</h4>
            <h4 className="">{customer}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
