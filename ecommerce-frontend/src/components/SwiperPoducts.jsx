import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../main.scss";
// import "./app.css";
import { images } from "../data/images";
// import required modules
import { Zoom, Navigation, Pagination, Mousewheel, Thumbs } from "swiper";

export default function SWiperUI() {
  const [activeThumb, setActiveThumb] = useState(null);
  console.log(activeThumb);
  return (
    <>
      <Swiper
        onSwiper={setActiveThumb}
        // loop={true}
        spaceBetween={20}
        mousewheel={true}
        slidesPerView={6}
        modules={[Mousewheel]}
        className=" mySwiper"
        direction={"vertical"}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.url} alt="" className="rounded" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        modules={[Zoom, Pagination, Thumbs]}
        className="mySwiper2"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={item.url} alt="" className="rounded-4" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
