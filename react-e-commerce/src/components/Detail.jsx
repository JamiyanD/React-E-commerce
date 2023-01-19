import ReactStars from "react-rating-stars-component";
import AliceCarousel from "react-alice-carousel";
import { Stack } from "react-bootstrap";
import Header from "./Header";
import Mainmenu from "./MainMenu";
import Carousel2 from "../data/carousel2";
import Section10 from "./Section10";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
function Detail() {
  const children = Carousel2.map((element) => {
    return (
      <div className="w-25">
        <div className="detail-card p-2 border rounded m-2">
          <div className="h-50 hstack">
            <img className="w-75 h-100 m-2" src={element.imgUrl} alt=""></img>
            <AiOutlineHeart className="heart-icon "></AiOutlineHeart>{" "}
          </div>
          <p1 className="green">{element.name}</p1>
          <div className="hstack">
            <p1 className="my-2">{element.price}</p1>
          </div>
          <Rating size={20} />
        </div>
      </div>
    );
  });

  const location = useLocation();
  return (
    <div className="container">
      <div className="detail-header gap-2 hstack">
        <p1 className="detail-home fw-normal">Home</p1>
        <p1 className="detail-home fw-normal ">All category</p1>
      </div>
      <div className="detail-container d-flex ">
        <div className="detail-img-container w-50">
          <img
            class="big-product w-100 border rounded-4 p-3"
            src={location.state.imgUrl}
            alt=""
          />
          <div className="w-100 hstack gap-3 mt-3 ">
            <img
              className="small-card detail-img border rounded-4 p-3 "
              src={location.state.imgUrl}
              alt=""
            />
            <img
              className="small-card detail-img border rounded-4 p-3"
              src={location.state.imgUrl}
              alt=""
            />
          </div>
        </div>
        <div className="detail-text w-50 ms-5">
          <h3 className="green">{location.state.title}</h3>
          <h3>${location.state.price}</h3>
          <div className="d-flex align-items-center">
            <Rating initialValue={location.state.stars} size={30} />
            <p1 className="ms-2">No reviews</p1>
          </div>
          <div className="d-flex align-items-center mt-4">
            <h5>Availability:</h5>
            <img className="ms-3" src="./img/correct.png" alt="" />
            <p1 class="ms-3">In stack</p1>
          </div>
          <p1 className="text-muted">
            Hurry up! only 34 product left in stock!
          </p1>
          <hr></hr>

          <h5 className="d-flex align-items-center mt-4">
            Color :
            <input
              className="detail-circle ms-2"
              type={"radio"}
              name={"gender"}
              checked
            ></input>
            <input
              className="detail-circle ms-2"
              type={"radio"}
              name={"gender"}
            ></input>
          </h5>
          <div className="hstack mt-3">
            <h5 className=" ">Size : </h5>
            <button className="col-2 ms-2 border ">30</button>
            <button className="col-2 ms-2 border">56</button>
            <button className="col-2 ms-2 border">42</button>
            <button className="col-2 ms-2 border">48</button>
          </div>
          <div className="hstack mt-2">
            <h5 className="d-inline">Quantity : </h5>
            <button className="col-1 ms-2 border">-</button>
            <button className="col-2 border">1</button>
            <button className="col-1 border">+</button>
          </div>
          <div>
            <div className=" hstack mt-4">
              <button className="detail-button col-4 orange border-0 rounded-pill text-white fw-semibold ">
                Add to cart
              </button>
              <button className="detail-button col-4 orange border-0 rounded-pill text-white fw-semibold ms-3">
                Buy it now
              </button>
              <img
                className="detail-button ms-3"
                src="./img/Frame 138.png"
                alt=""
              />
            </div>
          </div>
          <hr></hr>
          <h5>Sku: 01133-9-9</h5>
          <div className="hstack mt-3">
            <h5 className="">Category:</h5>{" "}
            <p1 className="ms-2">20%off, 49%off Alex remote</p1>
          </div>
          <div className="hstack mt-2">
            <h5 className="">Share:</h5>
            <img className="ms-2" src="./img/google.png" alt="" />
            <img className="ms-2" src="./img/facebook.png" alt="" />
            <img className="ms-2" src="./img/whatsapp.png" alt="" />
          </div>
        </div>
      </div>
      <div className="detail-click d-flex align-items-center justify-content-center">
        <button className="btn btn-outline-secondary rounded-4 col-2">
          Description
        </button>
        <button className="ms-3 btn rounded-4 text-white bold-blue col-2">
          Reviews{" "}
        </button>
      </div>
      <div className="border border-2 p-4 rounded-4">
        <h5>Customer reviews</h5>
        <p>No reviews yet</p>
        <button className="bold-blue btn text-white fw-light">
          Write a review
        </button>
      </div>
      <div className="">
        <h5 className="my-4 green">Related product</h5>
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
