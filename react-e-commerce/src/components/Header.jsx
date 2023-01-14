import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import products from '../data/products'
import { Badge, Modal } from 'react-bootstrap'
import SignUp from './SignUp'

const WishBox = ({ addWishlist }) => {
	return (
		<div className="wishlist">
			<h3>Wishlist</h3>
			{addWishlist.length === 0 && <h4>Your wishlist is empty</h4>}
			{addWishlist.map((wish) => {
				return (
					<div className="wishlist-product" key={wish.id}>
						<img src={wish.imgUrl} alt={wish.imgUrl} />
						<div className="product-content">
							<p className="product-name">{wish.title}</p>
							<p className="product-price">{wish.price}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};


function Header({addWishlist}) {
	const [list, setList] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleProduct = (productId) => {
        setShow(true);
     
    };
    return (
        <header>
            <Stack direction="horizontal" id="up">
                <p1 className="m-5">Need help? Call us: (+98) 0234 456 789</p1>
                <div id="up-inner" className="ms-auto  ">
                    <img className="m-2" src="./img/location.png" alt=""></img>
                    <p1 className="m-2">Our store</p1>
                    <img className="m-2" src="./img/group.png" alt=""></img>
                    <p1 className="m-2">Track your order</p1>
                </div>
            </Stack>
            <div id="down" className='green-bg d-flex justify-content-around align-items-center '>
                <img className="" src="./img/logo 1 (1).png" alt=""></img>
                <div className="input-group input me-5">
                    <input class="form-control" placeholder="Search any things" />
                    <button className="orange btn btn-warning text-white " >Search</button>
                </div>
                <Stack direction="horizontal" className="">
                    <img className="m-2" src="./img/user.png" alt=""></img>
                    <p onClick={() => handleProduct()} className="m-2 text-white">Sign in</p>
                    <img  onClick={() => setList(!list)} className="m-2" src="./img/Frame 6.png" alt=""></img>
                    {list && <WishBox addWishlist={addWishlist} />}
                    <Badge>{addWishlist.length}</Badge>
                    <img className="m-2" src="./img/Frame 8.png" alt=""></img>
                    <Badge>0</Badge>
                </Stack>
            </div>
            <Modal show={show} onHide={handleClose}  >
               <SignUp />
                </Modal> 
        </header>
    )
}
export default Header