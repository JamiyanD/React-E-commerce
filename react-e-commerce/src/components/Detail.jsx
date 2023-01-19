import ReactStars from "react-rating-stars-component";
import AliceCarousel from "react-alice-carousel";
import { Stack } from "react-bootstrap";
import Header from "./Header";
import Mainmenu from "./MainMenu";
import Carousel2 from "../data/carousel2";
import Section10 from "./Section10";
import Footer from "./Footer";
function Detail({ data, addWishlist }) {
  const children = Carousel2.map((element) => {
    return (
      <div className="w-25">
        <div className="detail-card p-2 border rounded m-2">
          <Stack direction="horizontal" className="h-50">
            <img className="w-75 h-100" src={element.imgUrl} alt=""></img>
            <img className="mb-auto" src="./img/heart.png" alt=""></img>
          </Stack>
          <h5>{element.title}</h5>
          <Stack direction="horizontal">
            <p1 className="my-2">{element.price}</p1>
          </Stack>
          <ReactStars size={20} />
        </div>
      </div>
    );
  });

  console.log(addWishlist);
  return (
    <div className="container">
      <div className="detail-header gap-2 hstack">
        <p1 className="detail-home fw-semibold">Home</p1>
        <p1 className="detail-home fw-semibold ">All category</p1>
      </div>
      <div className="detail-container d-flex ">
        <div className="detail-img-container w-50">
          {/* <img class="w-100" src={data.imgUrl} alt="" /> */}
          <div className="w-100 hstack gap-3 mt-3 ">
            {/* <img className="detail-img " src={data.imgUrl} alt="" />
                        <img className="detail-img  " src={data.imgUrl} alt="" /> */}
          </div>
        </div>
        <div className="detail-text w-50 ms-5">
          {/* <h3 className="green">{data.title}</h3> */}
          <h3>$11,70</h3>
          <div className="d-flex align-items-center">
            <ReactStars size={24} />
            <p1 className="ms-2">No reviews</p1>
          </div>
          <div className="d-flex align-items-center">
            <h5>Availability</h5>
            <img className="ms-2" src="./img/correct.png" alt="" />
            <p1 class="ms-2">In stack</p1>
          </div>
          <p1>Hurry up! only 34 product left in stock!</p1>
          <hr></hr>

          <h5 className="d-flex align-items-center mt-4">
            Color :
            <input
              className="detail-circle ms-2"
              type={"radio"}
              name={"gender"}
            ></input>
            <input
              className="detail-circle ms-2"
              type={"radio"}
              name={"gender"}
            ></input>
          </h5>
          <h5 className="d-flex align-items-center">
            Size :<button className="col-2 ms-2 ">30</button>
            <button className="col-2 ms-2 ">56</button>
            <button className="col-2 ms-2 ">42</button>
            <button className="col-2 ms-2 ">48</button>
          </h5>
          <h5 className="d-flex align-items-center">
            Quantity :<button className="col-1 ms-2">-</button>
            <button className="col-2 ">1</button>
            <button className="col-1 ">+</button>
          </h5>
          <div>
            <div className=" d-flex align-items-center">
              <button className="detail-button col-4 orange border-0 rounded-pill text-white fw-semibold">
                Add to cart
              </button>
              <button className="detail-button col-4 orange border-0 ms-2 rounded-pill text-white fw-semibold">
                Buy it now
              </button>
              <img
                className="detail-button ms-2 "
                src="./img/Frame 138.png"
                alt=""
              />
            </div>
          </div>
          <hr></hr>
          <h5>Sku: 01133-9-9</h5>
          <div className="d-flex align-items-center">
            <h5 className="">Category:</h5>{" "}
            <p1 className="m-2">20%off, 49%off Alex remote</p1>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="">Share:</h5>
            <img className="m-2" src="./img/google.png" alt="" />
            <img className="m-2" src="./img/facebook.png" alt="" />
            <img className="m-2" src="./img/whatsapp.png" alt="" />
          </div>
        </div>
      </div>
      <div className="detail-click d-flex align-items-center justify-content-center">
        <button className="btn btn-outline-secondary rounded-pill">
          Description
        </button>
        <button className="ms-3 btn rounded-pill text-white bold-blue">
          Reviews{" "}
        </button>
      </div>
      <div className="border border-2 p-3 rounded">
        <h5>Customer reviews</h5>
        <p>No reviews yet</p>
        <button className="bold-blue btn text-white">Write a review</button>
      </div>
      <div className="">
        <h5>Related product</h5>
        <AliceCarousel
          autoPlay
          autoPlayInterval={"5000"}
          disableButtonsControls={true}
          className="alice"
          responsive={{ 0: { items: 4 } }}
        >
          {children}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Detail;
