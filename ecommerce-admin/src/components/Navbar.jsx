import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState, useContext, useEffect } from "react";

import axios from "axios";

function OffcanvasNavbar() {
  const [moreIcon, setMoreIcon] = useState(true);
  const [moreIcon2, setMoreIcon2] = useState(true);
  const [moreIcon3, setMoreIcon3] = useState(true);

  return (
    <nav class="navbar navbar-expand-lg bg-white ">
      <Container className=" d-flex justify-content-between p-0">
        <div className="hstack">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0593/6850/5511/files/JAYA_x_240x240.png?v=1667232437"
              alt=""
              style={{ width: "70px", height: "60px" }}
            />
          </a>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-body  ">
              <ul class="navbar-nav justify-content-end flex-grow-1  gap-2 ">
                <li class="nav-item ">
                  <a
                    class="nav-link active text-body"
                    aria-current="page"
                    href="/"
                  >
                    <i class="bi bi-house-door me-2 d-lg-none"></i>
                    <span className="dropdown-title">Home</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle  active text-body"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      setMoreIcon(!moreIcon);
                      setMoreIcon2(true);
                      setMoreIcon3(true);
                    }}
                  >
                    {moreIcon ? (
                      <span className="dropdown-title d-flex justify-content-between align-items-center">
                        <div>
                          <i class="bi bi-person me-2 d-lg-none"></i>
                          User
                        </div>
                        <ExpandMoreIcon
                          className=" d-lg-none"
                          fontSize="small"
                          color="disabled"
                        />
                      </span>
                    ) : (
                      <span
                        className="dropdown-title d-flex justify-content-between align-items-center"
                        style={{ color: "#2C9AFF" }}
                      >
                        <div>
                          <i class="bi bi-person me-2 d-lg-none"></i>
                          User
                        </div>
                        <ExpandLessIcon
                          className=" d-lg-none"
                          fontSize="small"
                          color="disabled"
                        />
                      </span>
                    )}
                  </a>
                  <ul class="dropdown-menu ">
                    <li>
                      <a class="dropdown-item text-body" href="/newUser">
                        <i class="bi bi-dot"></i> New User
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-body" href="/usersList">
                        <i class="bi bi-dot"></i> Users List
                      </a>
                    </li>{" "}
                    <li>
                      <a class="dropdown-item text-body" href="/roles">
                        <i class="bi bi-dot"></i> Roles
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle  active text-body"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      setMoreIcon2(!moreIcon2);
                      setMoreIcon(true);
                      setMoreIcon3(true);
                    }}
                  >
                    {moreIcon2 ? (
                      <span className="dropdown-title d-flex justify-content-between align-items-center">
                        <div>
                          <i class="bi bi-cart3 me-2 d-lg-none"></i>
                          Product
                        </div>
                        <ExpandMoreIcon
                          className=" d-lg-none"
                          fontSize="small"
                          color="disabled"
                        />
                      </span>
                    ) : (
                      <span
                        className="dropdown-title d-flex justify-content-between align-items-center"
                        style={{ color: "#2C9AFF" }}
                      >
                        <div className="htack">
                          <i class="bi bi-cart3 me-2 d-lg-none"> </i>
                          Product
                        </div>
                        <ExpandLessIcon
                          className="d-lg-none"
                          fontSize="small"
                          color="disabled"
                        />
                      </span>
                    )}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item text-body" href="/newProduct">
                        <i class="bi bi-dot"></i> Add Product
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-body" href="/productsList">
                        <i class="bi bi-dot"></i> Products List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-body" href="/category">
                        <i class="bi bi-dot"></i> Categories
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link active text-body dropdown-toggle "
                    aria-current="page"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bi bi-house-door me-2 d-lg-none"></i>
                    <span className="dropdown-title">Order</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item text-body" href="/order-status">
                        <i class="bi bi-dot"></i> Order Status List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-body" href="/order">
                        <i class="bi bi-dot"></i> Order List
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle  active text-body"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      setMoreIcon3(!moreIcon3);
                      setMoreIcon2(true);
                      setMoreIcon(true);
                    }}
                  >
                    {moreIcon3 ? (
                      <span className="dropdown-title d-flex justify-content-between align-items-center">
                        <div>
                          <i class="bi bi-person me-2 d-lg-none"></i>
                          Customer
                        </div>
                        <ExpandMoreIcon
                          className=" d-lg-none"
                          fontSize="small"
                          color="disabled"
                        />
                      </span>
                    ) : (
                      <span
                        className="dropdown-title d-flex justify-content-between align-items-center"
                        style={{ color: "#2C9AFF" }}
                      >
                        <div>
                          <i class="bi bi-person me-2 d-lg-none"></i>
                          Customer
                        </div>
                        <ExpandLessIcon
                          className=" d-lg-none"
                          fontSize="small"
                          color="disabled"
                        />
                      </span>
                    )}
                  </a>
                  <ul class="dropdown-menu ">
                    <li>
                      <a class="dropdown-item text-body" href="/newCustomer">
                        <i class="bi bi-dot"></i> New Customer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-body" href="/customerList">
                        <i class="bi bi-dot"></i> Customers List
                      </a>
                    </li>{" "}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hstack">
          <div class="dropdown d-lg-none">
            <button
              class=" dropdown-toggle p-2 m-2 border-0 text-black-50 bg-white"
              data-bs-toggle="dropdown"
            >
              <SearchIcon />
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  <form style={{ width: "200px" }}>
                    <TextField
                      name="search"
                      label="Search"
                      variant="outlined"
                      placeholder="Search..."
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              type="submit"
                              aria-label="search"
                              sx={{ padding: 0 }}
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </form>
                </a>
              </li>
            </ul>
          </div>
          <form
            style={{ marginRight: 10, width: "200px" }}
            className="searchbox d-sm-none d-lg-block p-2"
          >
            <TextField
              name="search"
              label="Search"
              variant="outlined"
              id="outlined-basic"
              placeholder="Search..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      type="submit"
                      aria-label="search"
                      sx={{ padding: 0 }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <div class="dropdown ">
            <Avatar
              alt="Remy Sharp"
              src={`http://localhost:8081/user-upload/IMG_6468.jpg`}
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              sx={{ width: 56, height: 56 }}
            />
            <ul
              class="dropdown-menu dropdown-menu-end "
              aria-labelledby="dropdownMenuButton"
            >
              <li className="d-flex align-items-center p-2">
                <img
                  src={`http://localhost:8081/user-upload/IMG_6468.jpg`}
                  alt=""
                  className="rounded m-2 "
                  style={{ width: "70px", height: "60px" }}
                />
                <div className="">
                  <h5 class=" fw-bold mb-1">Jamiyan</h5>
                  <p className="text-secondary "> jaya@gmail.com</p>
                </div>
              </li>
              <li>
                <a class="dropdown-item text-secondary" href="#">
                  My Profile
                </a>
              </li>

              <li>
                <a class="dropdown-item text-secondary" href="/sign-in">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default OffcanvasNavbar;
