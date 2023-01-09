import { Stack, Button } from "react-bootstrap"
import products from "./data/products"
import AliceCarousel from 'react-alice-carousel'
import Slider from "react-slick";
import './App.css';
import ReactStars from "react-rating-stars-component";
function Section3() {
    const productLoop = products.map(props => {
        function handleUpVote(props){
            console.log("unvoted")
            console.log(props.id)
        }
        return (
            <div id="card" class=" m-3 p-2 border rounded col-3">
                <Stack direction="horizontal" className="h-50">
                    <img class="w-75 h-100" src={props.imgUrl} alt=""></img>
                    <img class="mb-auto" src="./img/heart.png" alt=""></img>
                </Stack>
                <h5>{props.title}</h5>
                <Stack direction="horizontal" >
                    <p1>{props.price}</p1>
                    <a onClick={() => {handleUpVote(props)}} class="ms-auto">
                    <img  src="./img/shop.png" alt=""></img>
                    </a>
                </Stack>
                <ReactStars
                    size={20}
                />
            </div>
        )
    })
    var settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 1,
        slidesPerRow: 2

    };
    return (
        <section className="">
            <Stack direction="horizontal" id="product-up" >
                <h3 className="color">Popular products</h3>
                <div id="genre" className="ms-auto">
                    <button class="color btn btn-outline-secondary rounded-pill bg-light m-2">Cameras</button>
                    <button class="color  btn btn-outline-secondary rounded-pill bg-light m-2">Laptops</button>
                    <button class="color  btn btn-outline-secondary rounded-pill bg-light m-2">Tablets</button>
                    <button class="color  btn btn-outline-secondary rounded-pill bg-light m-2">Mouse</button>
                </div>

            </Stack>
            <div id="product-down">
                {/* <AliceCarousel 
                class="d-flex flex-wrap justify-content-evenly" 
                autoPlay autoPlayInterval={"5000"}  
                disableButtonsControls={true} 
                responsive={responsive}
                rows={2}
                
             >
                    {productLoop}
                </AliceCarousel> */}
                <Slider {...settings} >

                    {productLoop}
                </Slider>
            </div>
        </section>


    )
}
export default Section3