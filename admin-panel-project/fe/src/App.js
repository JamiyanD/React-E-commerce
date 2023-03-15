import "./App.css";
import { Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import NewUser from "./pages/NewUser";
import { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import Container from "@mui/material/Container";
import Page from "./components/Page";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import Navbar from "./components/Navbar";
import ProductsList from "./pages/ProductsList";
import UsersList from "./pages/UsersList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <div className="App bg-light">
      {showNavbar && <Navbar />}
      {showNavbar && <Page />}
      {showNavbar && <Toolbar />}
      <Container className="content ">
        <Routes>
          <Route path="/user-management" element={<Home />} />
          <Route path="/usersList" element={<UsersList />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/productsList" element={<ProductsList />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route path="/eCommerce" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
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
