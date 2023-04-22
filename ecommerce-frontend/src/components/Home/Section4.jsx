import { Stack } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function Section4() {
  return (
    <section class="">
      <h1 className="text-center dark-blue">Ангилал</h1>
      <p className="text-center text-muted mb-4">
        Өргөн сонголт, хямд үнэ, чанартай бүтээгдэхүүнийг нэг дороос та яг одоо
        захиалаад, хүргүүлээд аваарай.
      </p>
      <div className=" row">
        <div className="section4-div col-6 col-lg-3  p-2 rounded">
          <div className="section4-div1  h-100 w-100 rounded"></div>
          <h2 className="section4-h ">Чөлөөт пүүз</h2>
        </div>
        <div className="section4-div col-6 col-lg-3  p-2 rounded">
          <div className="section4-div2  h-100 w-100 rounded"></div>
          <h2 className="section4-h">Жордан</h2>
        </div>
        <div className="section4-div col-6 col-lg-3  p-2 rounded">
          <div className="section4-div3  h-100 w-100 rounded"></div>
          <h2 className="section4-h ">Кет</h2>
        </div>
        <div className="section4-div col-6 col-lg-3  p-2 rounded">
          <div className="section4-div4 h-100 w-100 rounded"></div>
          <h2 className="section4-h ">Сагсны пүүз</h2>
        </div>
      </div>
    </section>
  );
}

export default Section4;
