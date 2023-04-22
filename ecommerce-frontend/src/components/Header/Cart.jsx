import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
export default function Cart() {
  const [show, setShow] = useState(false);
  let sum = 0;
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [cartList, setCartList] = useContext(CartContext);
  function downCartList(id) {
    setCartList(cartList.filter((product) => product.id !== id));
  }

  // const CartInner = () => {
  //   console.log(sum);
  //   return (

  //   );
  // };

  return (
    <div>
      <Badge badgeContent={cartList.length} color="error">
        <i
          class="bi bi-cart pink"
          onClick={toggleShow}
          style={{ fontSize: 25 }}
        ></i>
      </Badge>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll="true"
        className="w-md-50"
      >
        <Offcanvas.Header>
          <p
            class="offcanvas-title fs-4 dark-blue"
            id="offcanvasWithBothOptionsLabel"
          >
            МИНИЙ САГС
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="border-0 bg-white hstack "
          >
            ХААХ<CloseIcon className="fs-5"></CloseIcon>
          </button>
        </Offcanvas.Header>
        <hr />

        <Offcanvas.Body>
          {cartList.length ? (
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                {cartList.map((cart) => {
                  sum = Number(cart.price) + sum;
                  return (
                    <div className="p-2 d-flex border-bottom">
                      <img
                        src={cart.filepath}
                        alt=""
                        className="col-4"
                        style={{ height: "100px" }}
                      />
                      <div className="col-6 mx-3">
                        <p className="dark-blue">{cart.name}</p>
                        <p className="pink">
                          {cart.order_quantity} x ₮{cart.price}
                        </p>
                      </div>
                      <button
                        type="button"
                        class="btn-close col-1 mt-4"
                        aria-label="Close"
                        onClick={() => downCartList(cart.id)}
                      ></button>
                    </div>
                  );
                })}
              </div>
              <div className="border-top pt-2">
                <div className="d-flex">
                  <p className="dark-blue fs-4">ДҮН</p>
                  <p className="pink ms-auto fs-4">₮ {sum}</p>
                </div>
                <Link to={"/cart"}>
                  <button className="border-0 rounded-5 btn grey-bg dark-blue text-white w-100 btn-dark p-3 fw-semibold">
                    САГС
                  </button>
                </Link>
                <button className="border-0 rounded-5 btn pink-bg text-white w-100 btn-dark p-3 fw-semibold mt-3">
                  ТӨЛБӨР ТООЦОО
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-secondary">Сагс хоосон.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
