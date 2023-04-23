import * as React from "react";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function Toolbar() {
  const URL = "https://puuzket.onrender.com/products/products";
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  async function axiosScreen() {
    const AXIOS_DATA = await axios.get(URL);
    setProducts(AXIOS_DATA.data.length);
  }
  const USERS_URL = "https://puuzket.onrender.com/users/users";
  async function axiosUsers() {
    const AXIOS_DATA = await axios.get(USERS_URL);
    setUsers(AXIOS_DATA.data.length);
  }
  const ORDER_URL = "https://puuzket.onrender.com/order";
  const [order, setOrder] = useState(0);

  async function axiosOrder() {
    const AXIOS_DATA = await axios.get(ORDER_URL);
    setOrder(AXIOS_DATA.data.length);
  }

  const CUSTOMER_URL = "https://puuzket.onrender.com/customer";
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
      <div className="d-flex container mx-auto gap-5 ">
        <div className=" d-flex  gap-3 ms-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0593/6850/5511/files/JAYA_x_240x240.png?v=1667232437"
            alt=""
            style={{ width: "70px", height: "60px" }}
          />
          <div>
            <h5>Report</h5>
            <p className="opacity-75">Jaya LLC</p>
          </div>
        </div>
        <div className="ms-auto d-flex gap-5">
          <div className="">
            <h5 className=""> Products</h5>
            <h4 className="opacity-75">{products} </h4>
          </div>

          <div className="">
            <h5 className=""> Users </h5>
            <h4 className="opacity-75">{users} </h4>
          </div>

          <div className="">
            <h5 className="">Orders</h5>
            <h4 className="opacity-75">{order} </h4>
          </div>

          <div className="">
            <h5 className="">Customers</h5>
            <h4 className="opacity-75">{customer}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
