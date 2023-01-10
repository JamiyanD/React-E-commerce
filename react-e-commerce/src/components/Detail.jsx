import ReactStars from "react-rating-stars-component";
function Detail(){
    return(
        <div className="detail-container d-flex mt-5">
            <div className="detail-img-container w-50">
                <img class="w-100" src="./img/green console.png" alt="" />
                <div className="w-100 d-flex ">
                    <img className="w-50" src="./img/black console.png" alt="" />
                    <img className="w-50" src="./img/black console.png" alt="" />
                </div>
            </div>
            <div className="detail-text w-50 ms-5">
                <h3 className="green">Play game</h3>
                <h3>$11,70</h3>
                <div className="d-flex align-items-center">
                <ReactStars
                    size={24}
                />
                <p1 className="ms-2" >No reviews</p1>
                </div>
                <div className="d-flex align-items-center">
                <h5>Availability</h5>
                <img className="ms-2" src="./img/correct.png" alt="" />
                <p1 class="ms-2" >In stack</p1>
                </div>
                <p1>Hurry up! only 34 product left in stock!</p1>
                <hr></hr>
                <h5>Color :</h5>
                <h5>Size :</h5>
                <h5>Quantity :</h5>
                <div>
                <button className="">Add to cart</button>
                <button className="">Buy it now</button>
                <img src="./img/Frame 138.png" alt="" />
                </div>
                <hr></hr>
                <h5>Sku: 01133-9-9</h5>
                <p1><strong>Category:</strong> 20%off, 49%off Alex remote</p1>
                <div>
                <h5 className="d-inline">Share:</h5>
                <img src="./img/google.png" alt="" />
                <img src="./img/facebook.png" alt="" />
                <img src="./img/whatsapp.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Detail