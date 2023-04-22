import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../main.scss";
// import "./app.css";
import { images } from "../../data/images";
// import required modules
import { Zoom, Navigation, Pagination, Mousewheel, Thumbs } from "swiper";

export default function SWiperUI({ img }) {
  const [activeThumb, setActiveThumb] = useState(null);
  const imgArray = [img, img, img, img, img, img];
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
        {imgArray.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" className="rounded" />
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
        {imgArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={item} alt="" className="rounded-4" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
