import people from "../data/people"
import Slider from "react-slick";
function Section7() {
    const person = people.map(element => {
        return (
            <div class=" mb-2 px-4 ">
                <div className="border rounded">
                <img class="me-2" src={element.imgURL} alt=""></img>
                <h5 class="d-inline">{element.name}</h5>
                <div class="blue rounded ">
                    <p class="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Magni iusto
                        praesentium voluptates tempora modi vitae veritatis laudantium aliquam.</p>
                </div>
                </div>
            </div>
        )
    })
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
            {/* <div class="col m-2 border rounded">
            <img class="me-2" src="./img/person2.png" alt=""></img>
            <h5 class="d-inline">Esther Howard</h5>
            <div class="bg-info bg-opacity-25 rounded">
                <p class="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Magni iusto
                    praesentium voluptates tempora modi vitae veritatis laudantium aliquam.</p>
            </div>
        </div>
        <div class="col m-2 border rounded">
            <img class="me-2" src="./img/person3.png" alt=""></img>
            <h5 class="d-inline">Esther Howard</h5>
            <div class="bg-info bg-opacity-25 rounded">
                <p class="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Magni iusto
                    praesentium voluptates tempora modi vitae veritatis laudantium aliquam.</p>
            </div>
        </div> */}
        </Slider>
    )
}
export default Section7