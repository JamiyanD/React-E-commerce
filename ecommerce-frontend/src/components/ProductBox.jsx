import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import categories from "../data/categories";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import product from "../data/product";
import ProductBoxAside from "./ProductBoxAside";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AppsIcon from "@mui/icons-material/Apps";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Carousel } from "react-bootstrap";
import Products from "./Products";
export default function ProductBox({
  addWishlist,
  setAddWishlist,
  downWishList,
}) {
  const [defaultSelect, setDefaultSelect] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [showlist, setShowList] = useState(false);
  async function handleChange(select) {
    setSelectValue(select.target.value);
  }
  return (
    <div className="container d-flex">
      <ProductBoxAside />
      <div className="w-75 ms-4">
        <div className="hstack">
          <div>
            <AppsIcon
              className="mx-2"
              onClick={() => setShowList(false)}
            ></AppsIcon>
            <FormatListBulletedIcon
              color="disabled"
              onClick={() => setShowList(true)}
            ></FormatListBulletedIcon>
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
                <MenuItem value="1">Эрэмбэ: Их сонирхсон</MenuItem>
                <MenuItem value="2">Эрэмбэ: Дундаж үнэлгээ</MenuItem>
                <MenuItem value="">Эрэмбэ: Шинээр</MenuItem>
                <MenuItem value="4">Эрэмбэ: Үнэ өсөхөөр</MenuItem>
                <MenuItem value="5">Эрэмбэ: Үнэ буурахаар</MenuItem>
              </Select>
            </FormControl>
            <p className="border-start border-2 ps-3 text-secondary">
              1–16 харуулсан. Нийт 312
            </p>
          </div>
        </div>
        <hr />
        {showlist ? (
          product.map((product) => (
            <div className="hstack border-bottom">
              <img
                src={product.imgURL}
                alt=""
                className="product-box-list-img m-4"
              />
              <div>
                <p className="fs-5 mb-2">{product.title}</p>
                <p>₮{product.price}</p>
                <div className="hstack gap-2">
                  <button className="border-0 rounded-4 btn pink-bg text-white btn-dark ">
                    <i class="bi bi-basket me-2"></i>САГСАНД ХИЙХ
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
            <ul className="d-flex flex-wrap p-0 product ">
              {product.map((data, index) => {
                return (
                  <Products
                    data={data}
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
              {/* <img
                src="https://img.freepik.com/free-photo/new-sneakers_93675-130032.jpg?w=1380&t=st=1679499554~exp=1679500154~hmac=5c0f10e4ed882e89543abd0a3a53b8e6457e0c8b54a68e881a28e03dc537c31b"
                alt=""
                className="w-50  h-100"
              /> */}
              <div className="w-50 ps-3">
                <div className="w-100 text-end">
                  <button
                    type="button"
                    className="btn-close m-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="fs-4 mb-2 dark-blue">
                  ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм
                </p>
                <p className=" fs-5">₮ 2,000</p>
                <p className="dark-blue">Тоо хэмжээ: </p>
                <div className="d-flex gap-3">
                  <input
                    type="number"
                    name="quantity"
                    className=" rounded-5  form-control cart-input "
                  />
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
