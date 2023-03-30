import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "@mui/joy/Stack";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState, useContext } from "react";

function OffcanvasNavbar() {
  const [moreIcon, setMoreIcon] = useState(true);
  const [moreIcon2, setMoreIcon2] = useState(true);

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
              src="https://preview.keenthemes.com/metronic8/demo30/assets/media/logos/demo30.svg"
              alt=""
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
                    }}
                  >
                    {moreIcon ? (
                      <span className="dropdown-title d-flex justify-content-between align-items-center">
                        <div>
                          <i class="bi bi-person me-2 d-lg-none"></i>
                          User Management
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
                          User Management
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
                    }}
                  >
                    {moreIcon2 ? (
                      <span className="dropdown-title d-flex justify-content-between align-items-center">
                        <div>
                          <i class="bi bi-cart3 me-2 d-lg-none"></i>
                          Catalog
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
                          Catalog
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
                <a class="dropdown-item profile-dropdown-item" href="#">
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
              src="https://preview.keenthemes.com/metronic8/demo30/assets/media/avatars/300-13.jpg"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul
              class="dropdown-menu dropdown-menu-end "
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a class="dropdown-item profile-dropdown-item" href="#">
                  My Profile
                </a>
              </li>

              <li>
                <a class="dropdown-item profile-dropdown-item" href="/sign-in">
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
