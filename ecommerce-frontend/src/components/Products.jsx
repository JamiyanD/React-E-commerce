import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import product from "../data/product";
export default function Products({
  product,
  addWishlist,
  setAddWishlist,
  downWishList,
}) {
  const [cartList, setCartList] = useContext(CartContext);
  const [showFullCard, setShowFullCard] = useState(false);
  const showDropdown = (e) => {
    setShowFullCard(!showFullCard);
  };
  const hideDropdown = (e) => {
    setShowFullCard(false);
  };
  const addCartList = (id) => {
    const filtered = product.filter((product) => product.id === id);
    setCartList([...cartList, ...filtered]);

    console.log(filtered);
    console.log(cartList);
  };

  return (
    <div>
      <li
        className=" m-3 product-box-card "
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <img
          src={`http://localhost:8080/upload/${product.filename}`}
          alt=""
          className=" product-box-img"
        />
        {showFullCard ? (
          // <li
          //   className=" m-3  product-box-img text-center position-relative"
          //   onMouseLeave={hideDropdown}
          // >
          <div className=" product-box-card-hover  bg-white text-center shadow position-absolute">
            <div className="position-relative w-100">
              <h2
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className=" product-hover-eye bg-white rounded-circle "
              >
                <i class="bi bi-eye "></i>
              </h2>
            </div>
            <p className="dark-blue ">{product.name}</p>
            <p className="text-secondary ">₮ {product.price}</p>
            <button
              className="border-0 rounded-4 btn dark-blue-bg text-white btn-dark "
              onClick={() => {
                addCartList(product.id);
              }}
            >
              <i class="bi bi-basket me-2"></i>САГСАНД ХИЙХ
            </button>
          </div>
        ) : (
          // </li>
          <div>
            <p className="dark-blue text-center mt-2">{product.name}</p>
            <p className="text-secondary text-center">₮ {product.price}</p>
          </div>
        )}
      </li>
    </div>
  );
}
