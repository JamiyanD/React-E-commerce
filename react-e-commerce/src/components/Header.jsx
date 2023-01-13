import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import products from '../data/products'
import { Badge } from 'react-bootstrap'

function Header(props) {
    const [ show, setShow] = useState(false)
   
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
                    <p className="m-2 text-white">Sign in</p>
                    <img  onClick={() => setShow(!show)} className="m-2" src="./img/Frame 6.png" alt=""></img>
                    {show ? <div className="wish  " >
                        <h5>Wishlist</h5>
                        <hr></hr>
                    </div> : ""}
                    <Badge>{props.wishList}</Badge>
                    <img className="m-2" src="./img/Frame 8.png" alt=""></img>
                    <Badge>0</Badge>
                </Stack>
            </div>
        </header>
    )
}
export default Header