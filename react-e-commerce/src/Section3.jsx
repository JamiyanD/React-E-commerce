import { Stack, Button } from "react-bootstrap"
import ProductFunc from "./ProductFunc"
import products from "./data/products"

import './App.css';
function Section3() {
    const productLoop = products.map(element => {
        return (
            <ProductFunc
                title={element.title}
                price={element.price}
                imgUrl={element.imgUrl}
            />
        )
    })
  
    return (
        <section className="mt-5">
            <Stack direction="horizontal" id="product-up" >
                <h3 className="color">Popular products</h3>
                <div id="genre" className="ms-auto">
                    <button class="color border-secondary border-opacity-50 rounded-pill bg-light m-2">Cameras</button>
                    <button class="color border-secondary border-opacity-50 rounded-pill bg-light m-2">Laptops</button>
                    <button class="color border-secondary border-opacity-50 rounded-pill bg-light m-2">Tablets</button>
                    <button class="color border-secondary border-opacity-50 rounded-pill bg-light m-2">Mouse</button>
                </div>

            </Stack>
            <div id="product-down">
                <div class="row ">
                    {productLoop}
                </div>
               
            </div>
        </section>


    )
}
export default Section3