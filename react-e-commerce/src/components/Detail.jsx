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
             
                <h5 className="d-flex align-item-center">Color : 
                <span className="circle d-flex ms-2 mt-1 align-items-center"></span>
                <span className="circle d-flex ms-2 mt-1 align-items-center bg-black"></span>
                </h5>
                <h5 className="d-flex align-items-center">Size :
                <button className="col-2 ms-2 ">30</button>
                <button className="col-2 ms-2 ">56</button>
                <button className="col-2 ms-2 ">42</button>
                <button className="col-2 ms-2 ">48</button>
                </h5>
                <h5 className="d-flex align-items-center">Quantity :
                <button className="col-1 ms-2">-</button>
                <button className="col-2 ">1</button>
                <button className="col-1 ">+</button>
                </h5>
                <div>
                <div className=" d-flex align-items-center">
                <button className="detail-button col-4 orange border-0 rounded-pill text-white fw-bold">Add to cart</button>
                <button className="detail-button col-4 orange border-0 ms-2 rounded-pill text-white fw-bold">Buy it now</button>
                <img className="detail-button ms-2 " src="./img/Frame 138.png" alt="" />
                </div>
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