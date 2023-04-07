import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Mousewheel, Pagination } from "swiper";
import { images } from "../data/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../main.scss";
import "swiper/css/free-mode";

export default function ProductDetail() {
  const { id } = useParams();
  const [number, setNumber] = useState(1);
  const PRODUCTS_URL = "http://localhost:8080/products/products";
  const [currentProducts, setCurrentProducts] = useState("");
  const [activeThumb, setActiveThumb] = useState(null);
  console.log(activeThumb);
  async function axiosProducts() {
    const AXIOS_DATA = await axios.put(PRODUCTS_URL, { productsId: id });
    if (AXIOS_DATA.status == 200) {
      setCurrentProducts(AXIOS_DATA.data);
      console.log(AXIOS_DATA);
    }
  }
  useEffect(() => {
    axiosProducts();
  }, []);

  return (
    <div className="container">
      <div className="d-flex">
        <div
          className="mb-5 d-flex"
          style={{
            width: "750px",
            height: "650px",
            backgroundColor: "#fff",
            padding: "20px",
          }}
        >
          <Swiper
            // onMouseEnter={setActiveThumb}

            onSwiper={setActiveThumb}
            // loop={true}
            spaceBetween={20}
            mousewheel={true}
            slidesPerView={4}
            modules={[Mousewheel]}
            className=" mySwiper"
            direction={"vertical"}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <img src={item.url} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            className=" mySwiper2"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.url} alt="" className="zoom" />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="d-flex flex-column">
            <img
              src="https://img.freepik.com/free-photo/new-sneakers_93675-130032.jpg?w=1380&t=st=1679499554~exp=1679500154~hmac=5c0f10e4ed882e89543abd0a3a53b8e6457e0c8b54a68e881a28e03dc537c31b"
              alt=""
              className="product-detail-thumbnail m-2"
            />
            <img
              src="https://img.freepik.com/free-photo/new-sneakers_93675-130032.jpg?w=1380&t=st=1679499554~exp=1679500154~hmac=5c0f10e4ed882e89543abd0a3a53b8e6457e0c8b54a68e881a28e03dc537c31b"
              alt=""
              className="product-detail-thumbnail m-2"
            />
          </div>
          <InnerImageZoom
            zoomType="hover"
            src={`http://localhost:8080/upload/${currentProducts.filename}`}
            alt=""
            className="product-detail-img m-2"
          /> */}
        </div>
        <div className="m-4 w-100">
          <p className="fs-5 mb-2 dark-blue">{currentProducts.name}</p>
          <p>₮{currentProducts.price}</p>
          <div className="d-flex gap-3">
            <div className="rounded-5 border border-2 col-3 ">
              <button
                className="border-0 product-detail-button btn col-4 fs-4"
                onClick={() => {
                  if (number > 1) {
                    setNumber(number - 1);
                  }
                }}
              >
                -
              </button>
              <button className="border-0 product-detail-button btn col-4 fs-4">
                {number}
              </button>
              <button
                className="product-detail-button border-0 btn col-4 fs-4"
                onClick={() => {
                  setNumber(number + 1);
                }}
              >
                +
              </button>
            </div>
            <button className="border-0 rounded-5 btn pink-bg text-white btn-dark col-5">
              <i class="bi bi-basket me-2"></i>САГСАНД ХИЙХ
            </button>
          </div>
          <hr />
          <p>
            <strong className="dark-blue">Ангилал</strong>:{" "}
            {currentProducts.category}
          </p>
        </div>
      </div>
      <p className="dark-blue fs-5 text-center">Үнэлгээ (0)</p>
      <hr />
      <div className="w-75 mx-auto rate-div text-white hstack p-4">
        Одоогоор үнэлгээ байхгүй байна.
      </div>
      <p className="text-secondary w-75 mx-auto my-5 ">
        Та үнэлгээ хийхийн тулд{" "}
        <a href="#" className="dark-blue">
          нэвтэрч орох
        </a>{" "}
        шаардлагатай.
      </p>

      <h1 className="dark-blue text-center my-5">Ойролцоо бараанууд</h1>
      <div className="d-flex gap-3">
        <div className="text-center col">
          <img
            src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
            alt=""
            className="w-100"
          />
          <p className="dark-blue my-3">ТЭМДЭГЛЭЛИЙН ДЭВТЭР 139Х204мм</p>
          <p className="text-secondary">₮ 10,000 НӨАТ-тай</p>
        </div>
        <div className="text-center col">
          <img
            src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
            alt=""
            className="w-100"
          />
          <p className="dark-blue my-3">ТЭМДЭГЛЭЛИЙН ДЭВТЭР 139Х204мм</p>
          <p className="text-secondary">₮ 10,000 НӨАТ-тай</p>
        </div>
        <div className="text-center col">
          <img
            src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
            alt=""
            className="w-100"
          />
          <p className="dark-blue my-3">ТЭМДЭГЛЭЛИЙН ДЭВТЭР 139Х204мм</p>
          <p className="text-secondary">₮ 10,000 НӨАТ-тай</p>
        </div>
        <div className="text-center col">
          <img
            src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
            alt=""
            className="w-100"
          />
          <p className="dark-blue my-3">ТЭМДЭГЛЭЛИЙН ДЭВТЭР 139Х204мм</p>
          <p className="text-secondary">₮ 10,000 НӨАТ-тай</p>
        </div>
      </div>
    </div>
  );
}
