import CloseButton from "react-bootstrap/CloseButton";

export default function Cart({ addWishlist, setAddWishlist, downWishList }) {
  return (
    <div>
      <div className="detail-header gap-2 hstack">
        <p1 className="detail-home fw-normal">Home</p1>
        <p1 className="detail-home fw-normal ">All category</p1>
      </div>
      <div className="row">
        <div className="col-8 ">
          <div className="hstack p-2 blue">
            <h5 className="col-5">Product</h5>
            <div className="col-8  hstack">
              <h5 className="col-3">Price</h5>
              <h5 className="col-4">Quantity</h5>
              <h5 className="col-2">Subtotal</h5>
            </div>
          </div>
          {addWishlist.length === 0 && (
            <h4 className="mt-3">Your wishlist is empty</h4>
          )}
          {addWishlist.map((wish) => {
            return (
              <div className="hstack border-bottom" key={wish.id}>
                <img className="col-2" src={wish.imgUrl} alt="" />
                <div className="col-3 p-2 ps-4">
                  <p>
                    <strong>{wish.title}</strong>
                  </p>
                  <p className="">Color:Green</p>
                  <p1 className="">Size: 30</p1>
                </div>
                <div className="col-8 hstack">
                  <h5 className="col-3">${wish.price}</h5>
                  <div className="col-4">
                    <button className=" border">-</button>
                    <button className="col-4 border">1</button>
                    <button className="border ">+</button>
                  </div>
                  <h5 className="col-2">$ 11,70</h5>
                  <button
                    className="btn-close ms-4"
                    onClick={() => downWishList(wish.id)}
                  ></button>
                </div>
              </div>
            );
          })}

          <div className="d-flex justify-content-between mt-4">
            <button className="orange btn btn-warning text-white rounded-pill">
              Continue shopping
            </button>
            <button className="btn btn-outline-secondary rounded-pill">
              Update Cart
            </button>
            <button className="btn btn-outline-danger rounded-pill">
              Clear cart
            </button>
          </div>
        </div>
        <div className="col-4 border p-0">
          <div className="blue text-center py-2">
            <h5 className="">Cart total</h5>
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between ">
              <h5>Subtotal</h5>
              <h5>$23,20</h5>
            </div>
            <hr />
            <div class="input-group mb-3 ">
              <input
                type="password"
                class="form-control "
                placeholder="Enter coupon code"
              />
              <button class="btn border green">Apply</button>
            </div>
            <hr />
            <select
              class="form-select rounded-4"
              aria-label="Default select example"
            >
              <option selected>Country</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="d-flex justify-content-between mt-3">
              <p>Total amount</p>
              <p>$23,20</p>
            </div>
            <button className="col-10 ms-4 orange btn btn-warning text-white rounded-pill">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
