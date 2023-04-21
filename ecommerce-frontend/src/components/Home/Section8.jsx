import { Stack, Button } from "react-bootstrap";
import Slider from "react-slick";

export default function Section9() {
  return (
    <section class="mb-5">
      <h1 className="text-center dark-blue mb-4 ">Мэдээ, мэдээлэл</h1>
      <div className="hstack gap-5">
        <div className="col">
          <img
            className="w-100 rounded"
            src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
            alt=""
          />
          <p className="text-muted my-3">НИЙТЭЛСЭН ОН САР : 2023-03-24</p>
          <h3 className="dark-blue">
            “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
          </h3>
          <p className="text-secondary">
            Улаанбаатар хотын бүх цэгт хүргэнэ. Мөн орон нутгийн унаанд тавина.
          </p>
          <h5 className="dark-blue">Дэлгэрэнгүй...</h5>
        </div>
        <div className="col">
          <img
            className="w-100 rounded"
            src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
            alt=""
          />
          <p className="text-muted my-3">НИЙТЭЛСЭН ОН САР : 2023-03-24</p>
          <h3 className="dark-blue">
            “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
          </h3>
          <p className="text-secondary">
            Улаанбаатар хотын бүх цэгт хүргэнэ. Мөн орон нутгийн унаанд тавина.
          </p>
          <h5 className="dark-blue">Дэлгэрэнгүй...</h5>
        </div>
        <div className="col d-none d-lg-block">
          <img
            className="w-100 rounded"
            src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
            alt=""
          />
          <p className="text-muted my-3">НИЙТЭЛСЭН ОН САР : 2023-03-24</p>
          <h3 className="dark-blue">
            “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
          </h3>
          <p className="text-secondary">
            Улаанбаатар хотын бүх цэгт хүргэнэ. Мөн орон нутгийн унаанд тавина.
          </p>
          <h5 className="dark-blue">Дэлгэрэнгүй...</h5>
        </div>
      </div>
    </section>
  );
}
