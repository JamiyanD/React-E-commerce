import {Stack} from "react-bootstrap"
import './App.css';
function ProductFunc(props) {
    return (
        <div id="card" class="col m-2 p-2 border rounded h-100 ">
            <Stack direction="horizontal" className="h-50">
                <img class="w-75 h-100" src={props.imgUrl} alt=""></img>
                <img class="mb-auto" src="./img/heart.png" alt=""></img>
            </Stack>
            <h5>{props.title}</h5>
            <Stack direction="horizontal" >
                <p1>{props.price}</p1>
                <img class="ms-auto" src="./img/shop.png" alt=""></img>
            </Stack>
            <img src="./img/star.png" alt=""></img>
            <img src="./img/star.png" alt=""></img>
            <img src="./img/star.png" alt=""></img>
            <img src="./img/star.png" alt=""></img>
            <img src="./img/star.png" alt=""></img>
        </div>
    )
}
export default ProductFunc