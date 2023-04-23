import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import menus from "../../data/categories";
import { Nav, Stack, NavLink } from "react-bootstrap";
import SubMenu from "./SubMenu";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Cart from "./Cart";
import axios from "axios";
import { ProductsContext } from "../../context/products";
import Products from "../Products/Products";
import categories from "../../data/categories";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function Header({ addWishlist, setAddWishlist, downWishList }) {
  const [list, setList] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);
  const [showProducts, setShowProducts] = useContext(ProductsContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProduct = (productId) => {
    setShow(true);
  };

  async function handleSearch(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    const searchInput = e.target.search.value;
    const SEARCH_URL = `https://puuzket.onrender.com/products/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.status == 200) {
      setShowProducts(AXIOS_DATA.data);
    }
  }
  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          const AXIOS_DATA = await axios.get(
            `https://puuzket.onrender.com/products/search?value=${query}`
          );
          setCharacters(AXIOS_DATA.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    } else {
      setCharacters([]);
    }
  }, [query]);

  const URL = "https://puuzket.onrender.com/customer/login";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      customer_email: e.target.email.value,
      customer_password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    if (FETCHED_JSON.status === "success") {
      navigate("/");
      Swal.fire({
        title: "Баярлалаа",
        text: "Амжилттай нэвтэрлээ",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#e84f69",
      });
    } else {
      Swal.fire({
        title: "Баярлалаа",
        text: "Амжилтгүй ",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#e84f69",
      });
    }
  };

  return (
    <header className="container mb-3">
      <div className="hstack">
        <p1 className="my-3 text-black-50">Утас: (+976) 9988-2655</p1>
        <p1 className="m-2 ms-auto text-black-50">Жаяа ХХК</p1>
      </div>
      <div className=" d-flex align-items-center">
        {" "}
        <Link to={"/"} addWishlist={addWishlist}>
          <img
            style={{ height: 80 }}
            className="col-10"
            alt=""
            src="https://cdn.shopify.com/s/files/1/0593/6850/5511/files/JAYA_x_240x240.png?v=1667232437"
          ></img>
        </Link>
        <div className="  fs-5 w-75  ">
          <Nav className="d-flex align-items-center  gap-4 mx-3">
            <SubMenu />

            <NavLink
              className="p-0 pink-hover d-none d-lg-block"
              href="/about-us"
            >
              Бидний тухай
            </NavLink>
            <NavLink className="p-0 pink-hover d-none d-lg-block" href="/blog">
              Мэдээ
            </NavLink>
            <NavLink
              className="p-0 pink-hover d-none d-lg-block"
              href="/contact"
            >
              Холбоо барих
            </NavLink>
          </Nav>
        </div>
        <div className="d-flex align-items-center gap-3 w-50 justify-content-end">
          <div class="dropdown w-50 text-end">
            <a
              // type="button"
              className="pink-hover dropdown-toggle text-black"
              aria-expanded="false"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              НЭВТРЭХ
            </a>
            <form
              class="dropdown-menu p-4 dropdown-menu-end "
              onSubmit={handleSubmit}
              style={{ width: "200px" }}
            >
              <div className="d-flex justify-content-between">
                <p className="">Нэвтрэх</p>
                <Link to={"/register"}>
                  <p className="pink ">Бүртгүүлэх</p>
                </Link>
              </div>
              <div class="mb-3 ">
                <label className=" text-secondary mb-2">Имэйл хаяг</label>
                <input
                  class="form-control  p-3 "
                  type="email"
                  name="email"
                  placeholder="Имэйл "
                />
              </div>
              <div class="mb-3">
                <label className="text-secondary mb-2">Нууц үг</label>
                <input
                  class="form-control  p-3"
                  type=""
                  name="password"
                  placeholder="Нууц үг"
                />
              </div>

              <button className="w-100 btn pink-bg btn-dark fw-semibold  border-0 rounded-5 p-3 text-white ">
                Нэвтрэх
              </button>
              <p className="pink text-end mt-2 ">Нууц үгээ мартсан уу?</p>
            </form>
          </div>

          <i
            className="bi bi-search pink"
            style={{ fontSize: 25 }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          ></i>

          <div
            style={
              characters.length ? { height: "650px" } : { height: "150px" }
            }
            className="offcanvas offcanvas-top "
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header container hstack justify-content-end p-0 mt-3 ">
              <HighlightOffIcon
                className=""
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></HighlightOffIcon>
            </div>
            <div className="offcanvas-body container ">
              <form
                onSubmit={handleSearch}
                class=" d-flex align-items-start justify-content-center p-0 "
              >
                <input
                  type=""
                  name="search"
                  class="form-control rounded-3 w-50 me-3"
                  placeholder="Хайх"
                  onChange={(event) => {
                    setQuery(event.target.value);
                    console.log(query);
                  }}
                />
                <button
                  type="submit"
                  className="border-0 rounded-4 btn pink-bg text-white  btn-dark "
                >
                  ХАЙХ
                </button>
              </form>

              <div className="d-flex flex-wrap p-0 product ">
                {characters.map((product, index) => {
                  return (
                    <li className=" m-3 product-box-card ">
                      <img
                        src={`http://localhost:8080/upload/${product.filename}`}
                        alt=""
                        className=" product-box-img"
                      />
                      <div>
                        <p className="dark-blue text-center mt-2">
                          {product.name}
                        </p>
                        <p className="text-secondary text-center">
                          ₮ {product.price}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <Badge badgeContent={addWishlist.length} color="error">
            <i
              className="bi bi-heart pink "
              style={{ fontSize: 25 }}
              onClick={() => setList(!list)}
            ></i>
          </Badge>

          {list && (
            <WishBox addWishlist={addWishlist} downWishList={downWishList} />
          )}
          <Cart />
        </div>
      </div>
    </header>
  );
}
export default Header;

const WishBox = ({ addWishlist, downWishList }) => {
  return (
    <div className="wishlist">
      <h3 className="dark-blue">Хүслийн жагсаалт</h3>
      {addWishlist.length === 0 && (
        <p className="text-secondary">Хүслийн жагсаалт хоосон байна.</p>
      )}
      {addWishlist.map((wish) => {
        return (
          <div className="wishlist-product" key={wish.id}>
            <img src={wish.imgURL} alt={wish.imgURL} />
            <div className="product-content">
              <p className="product-name">{wish.title}</p>
              <p className="product-price">{wish.price}</p>
            </div>
            <button
              className="btn-close"
              onClick={() => downWishList(wish.id)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
