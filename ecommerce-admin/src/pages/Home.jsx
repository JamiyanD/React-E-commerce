import { Routes, Route } from "react-router-dom";
import Aside from "../components/Toolbar";
import NewUser from "./NewUser";
import { useState } from "react";
import Box from "@mui/material/Box";
import NewProduct from "./NewProduct";
import Container from "@mui/material/Container";
import Page from "../components/Page";
import EditUser from "./EditUser";
import EditProduct from "./EditProduct";
import Navbar from "../components/Navbar";
import ProductsList from ".//ProductsList";
import UsersList from "./UsersList";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Home() {
  return <Container></Container>;
}

export default Home;
