import { Stack } from "react-bootstrap"
function Section6() {
    return (
        <section class=" d-flex blue color align-items-center justify-content-around rounded mt-5">
            <Stack direction="horizontal" class="">
                <img class="me-2" src="./img/1.png" alt=""></img>
                <div class="">
                    <h5>Free delivery</h5>
                    <p1>on order above $50,00</p1>
                </div>
            </Stack>
            <Stack direction="horizontal" class="">
                <img class="me-2" src="./img/1.png" alt=""></img>
                <div class="">
                    <h5>Best quality</h5>
                    <p1>best quality in low price</p1>
                </div>
            </Stack>
            <Stack direction="horizontal" class="">
                <img class="me-2" src="./img/1.png" alt=""></img>
                <div class="">
                    <h5>1 year warranty</h5>
                    <p1>Avaliable warranty</p1>
                </div>
            </Stack>
        </section>
    )
}
export default Section6