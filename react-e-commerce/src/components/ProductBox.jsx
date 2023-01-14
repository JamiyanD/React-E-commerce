import { products } from "../data/products"
import Stack from 'react-bootstrap/Stack'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Modal } from 'react-bootstrap'
import Detail from './Detail'


export const ProductBox = ({  setAddWishlist, addWishlist,data }) => {

    const [heart, setHeart] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleProduct = (productId) => {
        setShow(true);
     
    };

    const upWishList = (productId) => {
        const filtered = products.filter(product => {
            if (product.id === productId) {
                return product
            }
        });
        setAddWishlist([...addWishlist, ...filtered]);
       
    };


    const downWishList = (productId) => {
        const filtered = addWishlist.filter(product => {
            if (product.id !== productId) {
                return product
            }
        });
        console.log(filtered)
    
        setAddWishlist([...filtered]);
    
    };

    console.log(data)
    console.log(addWishlist)
    return (

   
            <div className="m-2  p-2 border rounded product" >
                <Stack direction="horizontal" className="h-50">

                    <img onClick={() => handleProduct(data.id)} className="col-10 h-100" src={data.imgUrl} alt=""></img>
                    {heart ? <AiFillHeart className="heart-icon" color="red" onClick={() => {
                        downWishList(data.id); setHeart(false);
                    }}></AiFillHeart>
                        : <AiOutlineHeart className="heart-icon" onClick={() => {
                            upWishList(data.id); setHeart(true)
                        }}></AiOutlineHeart>}


                </Stack>
                <h5>{data.title}</h5>
                <Stack direction="horizontal" >
                    <p1>{data.price}</p1>
                    <img  className="ms-auto" src="./img/shop.png" alt=""></img>

                </Stack>
                <ReactStars
                    size={20}
                />
                <Modal show={show} onHide={handleClose} size="lg" >
                <Detail  data={data} addWishlist={addWishlist}></Detail>
                </Modal> 
            </div>
            
        
    )
}
