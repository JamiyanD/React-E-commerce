import "./App.css";
import { Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import NewUser from "./components/users/NewUser";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Home from "./components/Home";
import NewProduct from "./components/products/NewProduct";
import Container from "@mui/material/Container";
import Page from "./components/Page";
import EditUser from "./components/users/EditUser";
import EditProduct from "./components/products/EditProduct";
import Navbar from "./components/Navbar";
import ProductsList from "./components/products/ProductsList";
import UsersList from "./components/users/UsersList";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "bootstrap-icons/font/bootstrap-icons.css";
import CategoryList from "./components/products/CategoryList";
import RolesList from "./components/users/RolesList";
import OrderList from "./components/order/OrderList";
import NewCustomer from "./components/customer/NewCustomer";
import CustomerList from "./components/customer/CustomerList";
import EditCustomer from "./components/customer/EditCustomer";
import OrderStatusList from "./components/order/OrderStatusList";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className="App bg-light">
      {showNavbar && <Navbar />}
      {showNavbar && <Page />}
      {showNavbar && <Toolbar />}
      <div className="content container ">
        <Routes>
          <Route path="/eCommerce" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/user-management" element={<Home />} />
          <Route path="/usersList" element={<UsersList />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/productsList" element={<ProductsList />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/order-status" element={<OrderStatusList />} />
          <Route path="/roles" element={<RolesList />} />
          <Route path="/order" element={<OrderList />} />
          <Route path="/newCustomer" element={<NewCustomer />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/customer/edit/:id" element={<EditCustomer />} />
        </Routes>
      </div>
      <Routes>
        <Route
          path="/sign-in"
          element={<SignIn setShowNavbar={setShowNavbar} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp setShowNavbar={setShowNavbar} />}
        />
      </Routes>
    </div>
  );
}

export default App;
