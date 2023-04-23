import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import SwiperProducts from "./SwiperPoducts";
import { ProductsDetailSize } from "./ProductsFilter";
import PlaceIcon from "@mui/icons-material/Place";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { ProductsContext } from "../../context/products";
import { CartContext } from "../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [number, setNumber] = useState(1);
  const PRODUCTS_URL = "https://puuzket.onrender.com/products/products";
  const [currentProducts, setCurrentProducts] = useState({
    order_quantity: 1,
  });
  const [showProducts, setShowProducts] = useContext(ProductsContext);
  const [cartList, setCartList] = useContext(CartContext);

  async function axiosProducts() {
    const AXIOS_DATA = await axios.put(PRODUCTS_URL, { productsId: id });
    if (AXIOS_DATA.status == 200) {
      setCurrentProducts({ ...currentProducts, ...AXIOS_DATA.data });
    }
  }

  useEffect(() => {
    axiosProducts();
  }, []);

  const [sizeArray, setSizeArray] = useState([]);
  const size = [];
  size.push(currentProducts.size);

  const addCartList = (id) => {
    const array = [];
    array.push(currentProducts);
    setCartList([...cartList, ...array]);
  };

  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className=" d-flex swiper-products col-md-6 mb-4">
          <SwiperProducts img={currentProducts.filepath} />
        </div>
        <div className="m-4 col ">
          <h1 className="fs-4 mb-2 dark-blue">{currentProducts.name}</h1>

          <p className="mb-5 ">₮ {currentProducts.price}</p>
          <h5 className="dark-blue">Тоо хэмжээ:</h5>
          <div className="d-flex gap-3">
            <div
              class="btn-group rounded-5 border border-2 "
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                class="btn  product-detail-button2"
                onClick={() => {
                  if (number > 1) {
                    setNumber(number - 1);
                  }
                  setCurrentProducts({
                    ...currentProducts,
                    order_quantity: number - 1,
                  });
                }}
              >
                -
              </button>
              <button type="button" class="btn  ">
                {number}
              </button>
              <button
                type="button"
                class="btn product-detail-button1"
                onClick={() => {
                  setNumber(number + 1);
                  setCurrentProducts({
                    ...currentProducts,
                    order_quantity: number + 1,
                  });
                }}
              >
                +
              </button>
            </div>

            <button
              className="border-0 rounded-5 btn pink-bg text-white btn-dar d-flex "
              onClick={() => {
                addCartList(currentProducts._id);
              }}
            >
              <i class="bi bi-basket "></i>{" "}
              <span className=" d-md-none d-lg-block ms-2">САГСАНД ХИЙХ</span>
            </button>
          </div>
          <hr />
          <p>
            <strong className="dark-blue">Ангилал</strong>:{" "}
            {currentProducts.category}
          </p>
          <h5 className="dark-blue">Гутлын размер:</h5>
          <div className="d-flex flex-wrap">
            {size.map((item) => (
              <ProductsDetailSize
                currentProducts={currentProducts}
                item={item}
                setSizeArray={setSizeArray}
                sizeArray={sizeArray}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="d-flex flex-wrap gap-3">
        <div className=" border  p-2 rounded">
          <p className="text-secondary ">Барааны код</p>
          <p className="fw-semibold dark-blue m-0">{currentProducts.code}</p>
        </div>
        <div className=" border  p-2 rounded">
          <p className="text-secondary ">Төрөл</p>
          <p className="fw-semibold dark-blue m-0">
            {currentProducts.category}
          </p>
        </div>
        <div className=" border  p-2 rounded">
          <p className="text-secondary ">Брэнд</p>
          <p className="fw-semibold dark-blue m-0">{currentProducts.brand}</p>
        </div>
        <div className=" border  p-2 rounded">
          <p className="text-secondary ">Хүйс</p>
          <p className="fw-semibold dark-blue m-0">{currentProducts.gender}</p>
        </div>
        <div className=" border  p-2 rounded">
          <p className="text-secondary ">Ерөнхий өнгө</p>
          <p className="fw-semibold dark-blue m-0">{currentProducts.color}</p>
        </div>
      </div>

      <h5 className="dark-blue">Нэмэлт мэдээлэл</h5>
      <p className="text-secondary ">{currentProducts.description}</p>
      <hr className="my-4 dotted" />
      <div className="my-4 bg-light d-flex align-items-center ">
        <PlaceIcon
          color="secondary"
          className="m-2"
          style={{ width: "60px", height: "60px" }}
        />
        <div className="">
          <p className="fw-semibold dark-blue mb-1">Энгийн</p>
          <p className="text-secondary ">24-48 цагт хүргэнэ</p>
        </div>
      </div>
      <div className="my-4 bg-light d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={currentProducts.filepath}
            alt=""
            style={{ width: "60px", height: "60px" }}
            className="m-2"
          />
          <div className="">
            <p className="fw-semibold fs-5 dark-blue mb-1">Сэтгэгдэл байхгүй</p>
            <Rating name="half-rating" size="medium" value={0} />
          </div>
        </div>
        <button className="btn me-4 btn-outline-dark  ">
          Сэтгэгдэл үлдээх
        </button>
      </div>

      <h1 className="dark-blue  my-5">Төстэй бараанууд</h1>
      <div className="">
        <Swiper
          style={{
            "--swiper-navigation-color": "#01213a",
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
        >
          {showProducts.slice(0, 7).map((product) => (
            <SwiperSlide>
              <img
                src={product.filepath}
                alt=""
                className="w-100"
                style={{ height: "200px" }}
              />
              <p className="dark-blue my-3 fw-bold text-center">
                {product.name}
              </p>
              <p className="text-secondary text-center">₮ {product.price}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
