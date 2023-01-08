import { Stack, Carousel } from 'react-bootstrap'
import AliceCarousel from 'react-alice-carousel'
import carousel2Data from './data/carousel2'
import Section2Func from './Section2Func'
function Section2() {
    const images = carousel2Data.map(par => {
        return (
            <Section2Func
                name={par.name}
                items={par.items}
                imgUrl={par.imgUrl}
            />
        )
    })
    return (
        <div >
            <AliceCarousel 
            autoPlay autoPlayInterval={"5000"}  
            disableDotsControls={true} 
            responsive={{0: {items: 3, itemsFit: 'contain'}}} 
              >
                {images}
            </AliceCarousel>
        </div>

    )
}
export default Section2