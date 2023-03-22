import people from "../data/people";
import Slider from "react-slick";

function Section7() {
  const person = people.map((element) => {
    return (
      <div class="small-carousel-div ">
        <img src={element.imgURL} alt="" className="h-100 m-0" />
        <h4 className="text-center dark-blue me-5">МАЛГАЙ</h4>
      </div>
    );
  });
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <section className="my-5">
      <h1 className="text-center dark-blue mb-5">Бичгийн Хэрэгслүүд</h1>
      <Slider {...settings}>{person}</Slider>
    </section>
  );
}
export default Section7;
