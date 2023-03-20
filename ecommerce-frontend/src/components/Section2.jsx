import { Stack, Carousel } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import carousel2Data from "../data/carousel2";

function Section2() {
  const images = carousel2Data.map((par) => {
    return (
      <div className="w-100 d-flex justify-content-evenly align-items-center mt-5 ">
        <div className="col-10 h-75 d-flex justify-content-between  align-items-center border rounded-4 p-3 ">
          <img className="carousel2-img w-50" src={par.imgUrl} alt=""></img>
          <p1 className="col-5 color">
            <strong className="green">{par.name}</strong>
            <br></br>({par.items} items)
          </p1>
        </div>
      </div>
    );
  });
  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayInterval={"5000"}
        disableDotsControls={true}
        responsive={{ 0: { items: 3 } }}
      >
        {images}
      </AliceCarousel>
    </div>
  );
}
export default Section2;
