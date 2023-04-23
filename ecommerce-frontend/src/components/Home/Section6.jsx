import { ProductsContext } from "../../context/products";
import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Section6() {
  const [showProducts, setShowProducts] = useContext(ProductsContext);
  console.log(showProducts);
  return (
    <section className="">
      <h1 className="text-center dark-blue mb-4">Бусад бараанууд</h1>
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
            <p className="dark-blue my-3 fw-bold text-center">{product.name}</p>
            <p className="text-secondary text-center">₮ {product.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Section6;
