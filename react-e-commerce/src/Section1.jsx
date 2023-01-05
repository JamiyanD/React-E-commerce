import {Stack, Carousel, Row, Col} from 'react-bootstrap'
function Section1 (){
    return(
        <Carousel className="mt-5 h-100" interval={null} >
            <Carousel.Item className="h-100 carousel-item" >
                <div className='d-flex align-items-center h-100'>
                <div className=" ms-5">
                    <h1 class="w-50 color ms-5">Canon <br></br>camera</h1>
                        <button className="bg-warning text-white border-white rounded ms-5">Shop now</button>
                        <button className="color border-secondary rounded ms-2">View more</button>
                </div>
                <img className="ms-auto h-100" src="./img/frame 29.png" alt=""></img>
                </div>
            </Carousel.Item>
            <Carousel.Item className="h-100" >
                <div className='d-flex align-items-center h-100'>
                <div className=" ms-5">
                    <h1 class="w-50 color ms-5">Canon <br></br>camera</h1>
                        <button className="bg-warning text-white border-white rounded ms-5">Shop now</button>
                        <button className="color border-secondary rounded ms-2">View more</button>
                </div>
                <img className="ms-auto h-100" src="./img/speaker.png" alt=""></img>
                </div>
            </Carousel.Item>
            <Carousel.Item className="h-100" >
                <div className='d-flex align-items-center h-100'>
                <div className=" ms-5">
                    <h1 class="w-50 color ms-5">Canon <br></br>camera</h1>
                        <button className="bg-warning text-white border-white rounded ms-5">Shop now</button>
                        <button className="color border-secondary rounded ms-2">View more</button>
                </div>
                <img className="ms-auto h-100" src="./img/playstation.png" alt=""></img>
                </div>
            </Carousel.Item>
    </Carousel>
    )
}

export default Section1