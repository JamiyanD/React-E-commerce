import { Stack } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function Section5() {
  return (
    <section class="row mt-5 ps-3">
      <div class="col-7 d-flex border rounded-4">
        <img class="w-50 h-100" src="./img/big-speaker.png" alt=""></img>
        <div class="w-50 d-flex flex-column justify-content-center ">
          <h4 class="green">JBL bar 2.1 deep bass</h4>
          <p>$11,70</p>
          <ReactStars />
          <button className="col-7 blue btn  hstack gap-2 border-0 p-3 mt-4 rounded-4 ">
            <p1>Add to cart</p1>
            <img class="col-3 " src="./img/shop.png" alt=""></img>
          </button>
        </div>
      </div>
      <div className="col-5 ps-4 h-100">
        <div class=" d-flex border rounded-4 small-card">
          <img class="w-50 mx-3" src="./img/playstation.png" alt=""></img>
          <div class="d-flex flex-column justify-content-center">
            <h5 className="color">Play game</h5>
            <p>$11.70</p>
            <ReactStars size={24} />
          </div>
        </div>
        <div class=" mt-4 d-flex border rounded-4 small-card">
          <img class="w-50 mx-3" src="./img/laptop.png" alt=""></img>
          <div class="d-flex flex-column justify-content-center">
            <h5 className="color">Play game</h5>
            <p>$11.70</p>
            <ReactStars size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
