import { Stack } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function Section5() {
  return (
    <section class="">
      <h1 className="text-center dark-blue">Ангилал</h1>
      <p className="text-center text-muted">
        Өргөн сонголт, хямд үнэ, чанартай бүтээгдэхүүнийг нэг дороос та яг одоо
        захиалаад, хүргүүлээд аваарай.
      </p>
      <div className="hstack gap-5">
        <div className="section4-div">
          <div className="section4-div1 col h-100 w-100 "></div>
          <h3 className="section4-h ">БИЧИГ ХЭРЭГ</h3>
        </div>
        <div className="section4-div">
          <div className="section4-div2 col h-100 w-100 "></div>
          <h3 className="section4-h">ХЭВЛЭЛИЙН МАТЕРИАЛ</h3>
        </div>
        <div className="section4-div">
          <div className="section4-div3 col h-100 w-100 "></div>
          <h3 className="section4-h ">ХАЯГ ҮЙЛДВЭРЛЭЛИЙН МАТЕРИАЛ</h3>
        </div>
        <div className="section4-div">
          <div className="section4-div4 col h-100 w-100"></div>
          <h3 className="section4-h ">БЭЛЭГ ДУРСГАЛ</h3>
        </div>
      </div>
    </section>
  );
}

export default Section5;
