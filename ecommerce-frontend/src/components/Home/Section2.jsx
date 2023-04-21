import { Stack, Carousel } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";

function Section2() {
  return (
    <div className="  mt-2 row ">
      <div className="col-sm-6 col-lg-3 d-flex border-end mb-4">
        <h1 className="mx-4">
          <i class="bi bi-truck "></i>
        </h1>

        <div>
          <h4 className="mb-2  ">Хүргэлт Үнэгүй</h4>
          <p className="text-muted">
            150,000 төгрөгнөөс дээш худалдан авалт хийсэн тохиолдолд хүргэлт
            үнэгүй.
          </p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 d-flex border-end mb-4">
        <h1 className="mx-4">
          <i class="bi bi-credit-card"></i>
        </h1>

        <div>
          <h4 className="mb-2 section2-h text-primary-emphasis">
            Төлбөрийн Олон Сонголт
          </h4>
          <p className="text-muted">
            Та хүссэн төлбөрийн сонголтоо <br /> сонгох боломжтой
          </p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 d-flex border-end mb-4">
        <h1 className="mx-4">
          <i class="bi bi-gift"></i>
        </h1>

        <div>
          <h4 className="mb-2 section2-h text-primary-emphasis">
            Шуурхай хүргэлт
          </h4>
          <p className="text-muted">Хүргэлт маргааш өдөртөө таны гарт</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 d-flex border-end mb-4">
        <h1 className="mx-4">
          <i class="bi bi-chat-right"></i>
        </h1>

        <div>
          <h4 className="mb-2 section2-h text-primary-emphasis">
            Онлайн туслах
          </h4>
          <p className="text-muted">Захиалгын Цаг 10:00-19:00</p>
        </div>
      </div>
    </div>
  );
}
export default Section2;
