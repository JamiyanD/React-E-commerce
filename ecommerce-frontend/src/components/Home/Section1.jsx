import { Stack, Carousel, Row, Col } from "react-bootstrap";

function Section1() {
  return (
    <Carousel interval={null} controls={true} className="mb-5 " fade>
      <Carousel.Item className=" main-carousel1">
        <div className="h-100 hstack container">
          <div className="d-flex flex-column w-50 align-items-center">
            <h1 class="w-50 fs-1 text-white main-carousel-title">
              Спорт кет худалдаа
            </h1>
            <div class="w-50 align-items-center">
              <button className="btn rounded-5 border border-4 border-white text-white fw-semibold d-flex align-items-center  pb-1 px-3 main-carousel-button">
                БҮГДИЙГ ҮЗЭХ
                <h2 className=" d-inline ">
                  <i class="bi bi-arrow-right-short text-white "></i>
                </h2>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className=" main-carousel2">
        <div className="h-100 hstack container">
          <div className="d-flex flex-column w-50 align-items-center">
            <h1 class="w-50 fs-1 text-white main-carousel-title">
              Оригинал кет худалдаа
            </h1>
            <div class="w-50 align-items-center">
              <button className="btn rounded-5 border border-4 border-white text-white fw-semibold d-flex align-items-center pb-1 px-3 main-carousel-button">
                БҮГДИЙГ ҮЗЭХ
                <h2 className=" d-inline">
                  <i class="bi bi-arrow-right-short text-white "></i>
                </h2>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className=" main-carousel3">
        <div className="h-100 hstack container">
          <div className="d-flex flex-column w-50 align-items-center">
            <h1 class="w-50 fs-1 text-white main-carousel-title">
              Сагсны пүүз худалдаа
            </h1>
            <div class="w-50 align-items-center">
              <button className="btn rounded-5 border border-4 border-white text-white fw-semibold d-flex align-items-center pb-1 px-3 main-carousel-button">
                БҮГДИЙГ ҮЗЭХ
                <h2 className=" d-inline">
                  <i class="bi bi-arrow-right-short text-white "></i>
                </h2>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Section1;
