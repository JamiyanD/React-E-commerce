import { Stack, Button } from "react-bootstrap";
import news from "../data/news";
import Slider from "react-slick";

export default function Section9() {
  const jaya = news.map((element) => {
    return (
      <div class="mb-3 p-2">
        <div className="border rounded-4 d-flex p-3 green">
          <img class="w-50" src={element.imgURL} alt=""></img>
          <div class="ms-3">
            <div class=" w-50 text-center  border rounded-pill ">
              22 oct 2021
            </div>
            <h5 className="fs-4">{element.title}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est
              ut, iste quaerat suscipit fugit.
            </p>
            <p>By spacing tech</p>
          </div>
        </div>
      </div>
    );
  });
  var settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <section class="mt-5">
      <div className="hstack">
        <h3 className="green my-2">Latest news</h3>
        <h3 className="green my-2 ms-auto">View all</h3>
      </div>
      <Slider {...settings} className="news ">
        {jaya}
      </Slider>
    </section>
  );
}
