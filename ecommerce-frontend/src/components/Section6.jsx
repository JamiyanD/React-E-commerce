import { Stack } from "react-bootstrap";
function Section6() {
  return (
    <section class=" d-flex blue green align-items-center justify-content-evenly rounded mt-5">
      <div className="d-flex my-5">
        <img class="me-3" src="./img/1.png" alt=""></img>
        <div class="">
          <h5 className="mb-2">Free delivery</h5>
          <p1>on order above $50,00</p1>
        </div>
      </div>
      <div className="d-flex">
        <img class="me-3" src="./img/1.png" alt=""></img>
        <div class="">
          <h5 className="mb-2">Best quality</h5>
          <p1>best quality in low price</p1>
        </div>
      </div>
      <div className="d-flex">
        <img class="me-3" src="./img/1.png" alt=""></img>
        <div class="">
          <h5 className="mb-2 ">1 year warranty</h5>
          <p1>Avaliable warranty</p1>
        </div>
      </div>
    </section>
  );
}
export default Section6;
