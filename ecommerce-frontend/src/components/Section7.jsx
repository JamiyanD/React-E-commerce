import people from "../data/people";
import Slider from "react-slick";

function Section7() {
  const person = people.map((element) => {
    return (
      <div class=" mb-2 px-2 green">
        <div className="border rounded-4 p-3">
          <div className="hstack">
            <img class="me-2" src={element.imgURL} alt=""></img>
            <h5 class="ms-3">{element.name}</h5>
          </div>
          <div class="blue rounded ">
            <p class="mt-3 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              ipsam? Magni iusto praesentium voluptates tempora modi vitae
              veritatis laudantium aliquam.
            </p>
          </div>
        </div>
      </div>
    );
  });
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings} className="mt-5">
      {person}
    </Slider>
  );
}
export default Section7;
