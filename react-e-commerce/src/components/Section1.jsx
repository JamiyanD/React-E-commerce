import { Stack, Carousel, Row, Col } from 'react-bootstrap'
import carousel1 from '../data/carousel1'

import AliceCarousel from 'react-alice-carousel'
function Section1() {

    const image = carousel1.map(element => {
        return (
            <Carousel.Item className="h-100 " >
                <div className='h-100 d-flex justify-content-between align-items-center'>
                    <div className="d-flex flex-column w-50 align-items-center">
                        <h1 class="w-50 green ">Canon <br></br>{element.name}</h1>
                        <div class="w-50 align-items-center">
                            <button className=" ms-2 orange btn btn-warning text-white border-white rounded ">Shop now</button>
                            <button className=" m-2 color border-secondary rounded  btn btn-outline-secondary">View more</button>
                        </div>
                    </div>
                    <img className=" carousel1-img" src={element.imgURL} alt=""></img>
                    <div className='carousel1-price d-flex justify-content-center align-items-center text-white'>only <br></br>$89</div>
                </div>
            </Carousel.Item>
        )
    })
    return (
        <Carousel interval={null} controls={false} className="mt-5 h-100" >
            {image}
        </Carousel>
    )
}

export default Section1