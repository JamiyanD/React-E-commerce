import { Stack } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
function Section5() {
    return (
        <section class="row mt-5 ps-3">
            <div class="col-7 d-flex border rounded">
                <img class="w-50" src="./img/big-speaker.png" alt=""></img>
                <div class="w-50 d-flex flex-column justify-content-center ">
                    <h5 class="color">JBL bar 2.1 deep bass</h5>
                    <p1>$11,70</p1>
                    <ReactStars
                        size={24}
                    />
                    <button className="blue btn btn-info col-7 d-flex align-items-center border-0 p-2 mt-2 rounded ">
                        <p1>Add to cart</p1>
                        <img class="col-3 ms-auto" src="./img/shop.png" alt=""></img>
                    </button>
                </div>
            </div>
            <Stack className="col-5 ps-4 h-100">
                <div class=" d-flex border rounded small-card">
                    <img class="w-50" src="./img/playstation.png" alt=""></img>
                    <div class="d-flex flex-column justify-content-center">
                        <h5 className="color">Play game</h5>
                        <p1>$11.70</p1>
                        <ReactStars
                            size={24}
                        />
                    </div>
                </div>
                <div class=" mt-auto d-flex border rounded small-card">
                    <img class="w-50" src="./img/laptop.png" alt=""></img>
                    <div class="d-flex flex-column justify-content-center">
                        <h5 className="color">Play game</h5>
                        <p1>$11.70</p1>
                        <ReactStars
                            size={24}
                        />
                    </div>
                </div>
            </Stack>
        </section>
    )
}

export default Section5