import { Stack } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Section7() {
  return (
    <section class=" ">
      <h1 className="text-center dark-blue mb-4 ">Брэндүүд</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#01213a",
        }}
        slidesPerView={1}
        spaceBetween={5}
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
        <SwiperSlide>
          <img
            class="brand-logo w-100 "
            src="https://digitalhub.fifa.com/m/6f4242005904d785/webimage-Partner-asset-inverted-logo-ADIDAS-01.png?tx=c_fill,ar_1.33,x_960,y_600,g_xy_center,q_auto:best,w_636"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="brand-logo w-100"
            src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="brand-logo w-100"
            src="https://1000logos.net/wp-content/uploads/2016/10/Air-Jordan-symbol.jpg"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="brand-logo w-100"
            src="https://1000logos.net/wp-content/uploads/2017/06/Under-Armour-logo.jpg"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="brand-logo w-100"
            src="https://1000logos.net/wp-content/uploads/2016/12/converse-symbol.jpg"
            alt=""
          ></img>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default Section7;
