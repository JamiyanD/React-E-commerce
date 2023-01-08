import{Stack} from "react-bootstrap"
import news from "./data/news"
import Slider from "react-slick";
function Section9(){

    const jaya = news.map(element => {
        return (
            <div class="mb-3 p-3">
                <div className="border rounded d-flex p-3">
            <img class="w-50" src={element.imgURL} alt=""></img>
            <div class="ms-3">
                <button class=" w-50 text-center bg-white border rounded-pill mb-2">22 oct 2021</button>
                <h5>{element.title}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est ut, iste quaerat suscipit
                    fugit.</p>
                <p>By spacing tech</p>
            </div>
            </div>
        </div>
        )
    })
    var settings = {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        
      
      
      };
    return(
        <section class="mt-5">
        <Stack direction="horizontal" >
            <h5 class="color ">Latest news</h5>
            <h5 class="color ms-auto">View all</h5>
        </Stack>
        <Slider {...settings} className="news ">

       {jaya}
    </Slider>
    </section>
    )
}
export default Section9