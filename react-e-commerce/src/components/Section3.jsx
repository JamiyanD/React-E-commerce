import { Stack, Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import products from "../data/products"
import AliceCarousel from 'react-alice-carousel'
import Detail from "./Detail";
import { useState } from "react";

import ReactStars from "react-rating-stars-component";
function Section3() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fullscreen, setFullscreen] = useState(true)

    const productLoop = products.map(props => {
        const children = props.children.map(element => {
            return (
                <div className="w-25">
                <div className="m-2  p-2 border rounded card">
                    <Stack direction="horizontal" className="h-50">
                        <img className="w-75 h-100" src={element.imgUrl} alt=""></img>
                        <img className="mb-auto" src="./img/heart.png" alt=""></img>
                    </Stack>
                    <h5>{element.title}</h5>
                    <Stack direction="horizontal" >
                        <p1>{element.price}</p1>
                        <a onClick={handleShow} className="ms-auto">
                            <img src="./img/shop.png" alt=""></img>
                        </a>
                    </Stack>
                    <ReactStars
                        size={20}
                    />
                </div>
                </div>
            )
        }
        )
        return (
            <div className="d-flex
            flex-wrap">
                {children}
                <div>
                <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                   <Detail />
                   </Modal.Body>
                </Modal>
            </div>
            </div>
        )
    })

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
                <AliceCarousel
                    autoPlay autoPlayInterval={"5000"}
                    disableButtonsControls={true}
                    className="alice">
                    {productLoop}
                </AliceCarousel>
            </div>
        </section>


    )
}
export default Section3