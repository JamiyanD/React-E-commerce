import { Stack, Carousel, Row, Col } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
function Section1() {
  return (
    <Carousel
      interval={null}
      controls={false}
      variant="dark"
      className="my-5 "
      fade
    >
      <Carousel.Item className=" main-carousel1">
        <div className="h-100 hstack ">
          <div className="d-flex flex-column w-50 align-items-center">
            <h1 class="w-50 fs-1 text-white main-carousel-title">
              Бичиг хэрэг, Бэлэг дурсгалын өргөн сонголт
            </h1>
            <div class="w-50 align-items-center">
              <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack main-carousel-button">
                БҮГДИЙГ ҮЗЭХ
                <h2 className=" d-inline">
                  <i class="bi bi-arrow-right-short text-white "></i>
                </h2>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className=" main-carousel1">
        <div className="h-100 hstack ">
          <div className="d-flex flex-column w-50 align-items-center">
            <h1 class="w-50 fs-1 text-white main-carousel-title">
              Хэвлэлийн материал худалдаа
            </h1>
            <div class="w-50 align-items-center">
              <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack main-carousel-button">
                БҮГДИЙГ ҮЗЭХ
                <h2 className=" d-inline">
                  <i class="bi bi-arrow-right-short text-white "></i>
                </h2>
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className=" main-carousel1">
        <div className="h-100 hstack ">
          <div className="d-flex flex-column w-50 align-items-center">
            <h1 class="w-50 fs-1 text-white main-carousel-title">
              Хаяг хэвлэлийн үйлдвэрлэл
            </h1>
            <div class="w-50 align-items-center">
              <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack main-carousel-button">
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
