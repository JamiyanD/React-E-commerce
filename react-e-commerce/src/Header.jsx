import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function Header (props){
    return(
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
        <Stack direction="horizontal" id="down" className='colors'>
            <img className="m-5" src="./img/logo 1 (1).png" alt=""></img>
            <InputGroup className="ms-auto w-25">
                <Form.Control  placeholder="Search any things"/>
                <Button variant=" bg-warning text-white" >Search</Button>
            </InputGroup>
            <Stack direction="horizontal" className="ms-auto">
                <img className="m-2" src="./img/user.png" alt=""></img>
                <p className="m-2 text-white">Sign in</p>
                <img className="m-2" src="./img/Frame 6.png" alt=""></img>
                <img className="m-2" src="./img/Frame 8.png" alt=""></img>
            </Stack>
        </Stack>
        </header>
    )
}
export default Header