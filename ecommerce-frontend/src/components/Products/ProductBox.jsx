import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/categories";
import { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import product from "../../data/product";
import ProductBoxAside from "./ProductBoxAside";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AppsIcon from "@mui/icons-material/Apps";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Carousel } from "react-bootstrap";
import Products from "./Products";
import axios from "axios";
import { ProductsContext } from "../../context/products";
import { Link } from "react-router-dom";
export default function ProductBox({
  addWishlist,
  setAddWishlist,
  downWishList,
}) {
  const [selectValue, setSelectValue] = useState("");
  const [showlist, setShowList] = useState(false);
  const ALL_PRODUCTS_URL = "https://puuzket.onrender.com/products/products";
  const PRODUCTS_URL =
    "https://puuzket.onrender.com/products/list?page=0&productsPerPage=20";
  const [showProducts, setShowProducts] = useContext(ProductsContext);
  const [productsData, setProductsData] = useState([]);

  async function axiosTotalProducts() {
    const AXIOS_DATA = await axios.get(ALL_PRODUCTS_URL);
    setProductsData(AXIOS_DATA.data);
  }

  async function axiosProducts() {
    const AXIOS_DATA = await axios.post(PRODUCTS_URL);
    setShowProducts(AXIOS_DATA.data);
  }

  useEffect(() => {
    axiosProducts();
    axiosTotalProducts();
  }, []);
  async function handleChange(e) {
    setSelectValue(e.target.value);
    console.log(e.target.value);
    const AXIOS_DATA = await axios.post(PRODUCTS_URL, {
      select: e.target.value,
    });
    setShowProducts(AXIOS_DATA.data);
  }

  async function handlePagination(event, value) {
    console.log("page", value);
    const PAGINATION_URL = `https://puuzket.onrender.com/products/list?page=${
      value - 1
    }&productsPerPage=20`;
    const PAGINATION_DATA = await axios.post(PAGINATION_URL, {
      select: selectValue,
    });
    setShowProducts(PAGINATION_DATA.data);
  }

  return (
    <div className="container d-flex">
      <div className="d-none d-md-block col-3">
        <ProductBoxAside className="" />
      </div>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ProductBoxAside />
        </div>
      </div>
      <div className="col-md-9 ms-4">
        <div className="hstack">
          <div className="d-flex">
            <div
              className="d-flex d-md-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i class="bi bi-funnel"></i>
              <p className=" text-black-50 ms-2">Шүүх</p>
            </div>
            <div className="d-none d-md-block">
              <AppsIcon
                className="mx-2"
                onClick={() => setShowList(false)}
              ></AppsIcon>
              <FormatListBulletedIcon
                color="disabled"
                onClick={() => setShowList(true)}
              ></FormatListBulletedIcon>
            </div>
          </div>
          <div className="ms-auto hstack">
            {" "}
            <FormControl
              sx={{
                minWidth: 140,
              }}
              size="small"
              className=" rounded-3 "
            >
              <Select
                value={selectValue}
                className="rounded-3 text-secondary"
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
                displayEmpty
                IconComponent={(props) => (
                  <ExpandMoreIcon className="m-2 text-black-50" {...props} />
                )}
              >
                <MenuItem value="">Шинээр</MenuItem>
                <MenuItem value="asc">Үнэ өсөхөөр</MenuItem>
                <MenuItem value="desc">Үнэ буурахаар</MenuItem>
              </Select>
            </FormControl>
            <p className="border-start border-2 ps-3 text-secondary">
               Нийт {productsData.length}
            </p>
          </div>
        </div>
        <hr />
        {showlist ? (
          showProducts.map((product) => (
            <div className="hstack border-bottom">
              <Link to={`/product-detail/${product._id}`}>
                <img
                  src={`https://puuzket.onrender.com/upload/${product.filename}`}
                  alt=""
                  className="product-box-list-img m-4"
                />
              </Link>
              <div>
                <Link to={`/product-detail/${product._id}`}>
                  <p className="fs-5 mb-2">{product.name}</p>
                </Link>
                <p>₮{product.price}</p>
                <div className="hstack gap-2">
                  <button className="border-0 rounded-4 btn pink-bg text-white btn-dark d-flex ">
                    <i class="bi bi-basket"></i>
                    <span className="d-none d-lg-block ms-2">САГСАНД ХИЙХ</span>
                  </button>
                  <h3 className="m-0">
                    <i
                      class="bi bi-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    ></i>
                  </h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <ul className="d-flex flex-wrap p-0 product">
              {showProducts.map((product, index) => {
                return (
                  <Products
                    productsData={productsData}
                    product={product}
                    addWishlist={addWishlist}
                    setAddWishlist={setAddWishlist}
                    downWishList={downWishList}
                  />
                );
              })}
            </ul>
          </div>
        )}
        <hr />
        <div className="d-flex justify-content-center my-5">
          <Stack spacing={2}>
            <Pagination
              count={10}
              size="large"
              className="dark-blue pagination"
              // page={page}
              onChange={handlePagination}
            />
          </Stack>
        </div>
      </div>

      <div
        class="modal fade h-50 product-modal "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-white  modal-dialog-centered h-100">
          <div class="modal-content h-100">
            <div class="modal-body d-flex h-100 p-0">
              <div
                id="carouselExampleControls"
                class="carousel slide w-50 h-100 carousel-dark"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner h-100">
                  <div class="carousel-item active h-100">
                    <img
                      src="https://img.freepik.com/free-photo/new-sneakers_93675-130032.jpg?w=1380&t=st=1679499554~exp=1679500154~hmac=5c0f10e4ed882e89543abd0a3a53b8e6457e0c8b54a68e881a28e03dc537c31b"
                      class=" w-100 h-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item h-100">
                    <img
                      src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                      class=" w-100 h-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div className="w-50 ps-3">
                <div className="w-100 text-end">
                  <button
                    type="button"
                    className="btn-close m-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <h1 className="fs-4 mb-2 dark-blue">
                  ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм
                </h1>
                <p className="mb-2 ">₮ 2,000</p>
                <h5 className="dark-blue">Гутлын размер:</h5>
                {/* <div className="d-flex flex-wrap">
            {size.map((item) => (
              <ProductsDetailSize
                currentProducts={currentProducts}
                item={item}
                setSizeArray={setSizeArray}
                sizeArray={sizeArray}
              />
            ))}
          </div> */}
                <div className="d-flex gap-3">
                  <button className="border-0 rounded-pill btn pink-bg text-white btn-dark p-3">
                    <i class="bi bi-basket me-2"></i>САГСАНД ХИЙХ
                  </button>
                </div>
                <hr />
                <span className="dark-blue">Ангилал: </span>
                <span className="text-secondary ">Тэмдэглэлийн дэвтэр</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
