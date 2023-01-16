import { Stack, Button, Heart } from "react-bootstrap"
import Slider from "react-slick";
import { products } from "../data/products"
import AliceCarousel from 'react-alice-carousel'
import Detail from "./Detail";
import { useState } from "react";
import { AiFillHeart } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";
import { ProductBox } from "./ProductBox";
function Section3({ setAddWishlist, addWishlist }) {

 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        row:2,
        slidesPerRow: 2
       
    };

   

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
            <div id="product-down " className="">
            <Slider {...settings} className="mt-5 ">
                
                    {products.map(data => {
                        return (
                            <ProductBox
                        
                       
                            setAddWishlist={setAddWishlist}
                                addWishlist={addWishlist}
                                title={data.title}
                                imgUrl={data.imgUrl}
                                price={data.price}
                                data={data} />
                        )
                    }
                    )}

                </Slider>
            </div>


        </section>


    )
}
export default Section3







    // const detailCard = products.map(par => {
    //     const detailChildren = par.children.map(props => {
    //         return (
    //             <div>
    //                 <Detail
    //                     id={props.id}
    //                     imgUrl={props.imgUrl}
    //                     title={props.title}
    //                 />
    //             </div>
    //         )
    //     })
    //     return (
    //         <div>
    //             {detailChildren}
    //         </div>
    //     )
    // })


