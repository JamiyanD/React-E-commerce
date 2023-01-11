import {InputGroup, Form, Button} from "react-bootstrap"
function Section10(){
    return(
        <section id="subscribe" class="blue mt-5 pt-4">
        <div  class="w-100 h-100 d-flex justify-content-evenly align-items-center bg-white ">
            <h3 class="color"><strong>Subscribe newsletter</strong></h3>
            <InputGroup className="w-25 " >
                <Form.Control  placeholder="Email address" className="orange" id="colors"/>
                <Button variant=" orange text-white" ><img src="./img/send-2.png" alt=""></img></Button>
            </InputGroup>
            <div class="d-flex ">
                <img class="me-3" src="./img/headphone.png" alt=""></img>
                <p1>Call us 24/7:<br></br>(+62) 0123 567 789</p1>
            </div>
        </div>
    </section>
    )
}
export default Section10