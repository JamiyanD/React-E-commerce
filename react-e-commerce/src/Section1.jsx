import {Stack, Carousel, Row, Col} from 'react-bootstrap'
import carousel1 from './data/carousel1'
import Section1Func from './Section1Func'
import AliceCarousel from 'react-alice-carousel'
function Section1 (){

    const image = carousel1.map(element => {
        return(
            <Section1Func
           name={element.name}
           imgURL={element.imgURL} 
           />
        )
    })
    return(
        <AliceCarousel autoPlay autoPlayInterval={"5000"} disableButtonsControls={true} className="mt-5 h-100" >
            {image}
         </AliceCarousel>
    )
}

export default Section1