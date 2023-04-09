import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SwiperProducts from "./SwiperPoducts";
import { ProductsDetailSize } from "./ProductsFilter";
import PlaceIcon from "@mui/icons-material/Place";
import Rating from "@mui/material/Rating";

export default function ProductDetail() {
  const { id } = useParams();
  const [number, setNumber] = useState(1);
  const PRODUCTS_URL = "http://localhost:8080/products/products";
  const [currentProducts, setCurrentProducts] = useState("");

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
  const [sizeArray, setSizeArray] = useState([]);
  const size = [];
  size.push(currentProducts.size);
  return (
    <div className="container">
      <div className="d-flex  mt-5 gap-5">
        <div className=" d-flex swiper-products col-7">
          <SwiperProducts />
        </div>
        <div className="m-4 w-100">
          <h1 className="fs-4 mb-2 dark-blue">{currentProducts.name}</h1>

          <p className="mb-5 ">₮ {currentProducts.price}</p>
          <h5 className="dark-blue">Тоо хэмжээ:</h5>
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
      <div className="d-flex gap-3">
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
            src={`http://localhost:8080/upload/${currentProducts.filename}`}
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
