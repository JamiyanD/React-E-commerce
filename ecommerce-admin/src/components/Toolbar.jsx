import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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

  useEffect(() => {
    axiosScreen();
    axiosUsers();
    axiosOrder();
  }, []);
  return (
    <div
      style={{ backgroundColor: "#217AFF", color: "white" }}
      className="toolbar "
    >
      <Container className="d-flex ">
        <div className="hstack gap-3">
          <img
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/misc/layer.svg"
            alt=""
          />
          <div>
            <h4 className="">Report</h4>
            <span className=" fw-semibold">Jaya LLC</span>
          </div>
        </div>
        <div className="ms-auto hstack gap-4">
          <div>
            <h4 className="">{products} Products</h4>
          </div>
          <div>
            <h4 className="">{users} Users</h4>
          </div>
          <div>
            <h4 className="">{order} Orders</h4>
          </div>
          <div>
            <h4 className="">- Customers</h4>
          </div>
        </div>
      </Container>
    </div>
  );
}
