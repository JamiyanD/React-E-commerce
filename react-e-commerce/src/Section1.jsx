import { Stack, Carousel, Row, Col } from 'react-bootstrap'
import carousel1 from './data/carousel1'

import AliceCarousel from 'react-alice-carousel'
function Section1() {

    const image = carousel1.map(element => {
        return (
            <Carousel.Item className="h-100 " >
                <div className='d-flex align-items-center h-100'>
                    <div className=" ms-5">
                        <h1 class="w-50 color ms-5">Canon <br></br>{element.name}</h1>
                        <button className="orange btn btn-warning text-white border-white rounded ms-5">Shop now</button>
                        <button className="color border-secondary rounded ms-2 btn btn-outline-secondary">View more</button>
                    </div>
                    <img className="ms-auto carousel1-img" src={element.imgURL} alt=""></img>
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