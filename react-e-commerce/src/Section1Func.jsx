import { Carousel  } from "react-bootstrap"

function Section1Func(props) {
    return (
        <div className="h-100 " >
            <div className='d-flex align-items-center h-100'>
                <div className=" ms-5">
                    <h1 class="w-50 color ms-5">Canon <br></br>{props.name}</h1>
                    <button className="bg-warning text-white border-white rounded ms-5">Shop now</button>
                    <button className="color border-secondary rounded ms-2">View more</button>
                </div>
                <img className="ms-auto carousel1-img" src={props.imgURL} alt=""></img>
            </div>
        </div>
        
        
    )
}
export default Section1Func