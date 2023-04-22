import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Products({
  product,
  addWishlist,
  setAddWishlist,
  downWishList,
  productsData,
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
    const filtered = productsData.filter((product) => product._id === id);
    const filteredData = [
      {
        name: filtered[0].name,
        price: filtered[0].price,
        order_quantity: 1,
        filepath: filtered[0].filepath,
      },
    ];

    setCartList([...cartList, ...filteredData]);

    console.log(productsData);
    console.log(filteredData);
  };

  return (
    <div>
      <li
        className=" m-3 w-100 "
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Link to={`/product-detail/${product._id}`}>
          <img src={product.filepath} alt="" className=" product-box-img " />
        </Link>
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
            <Link to={`/product-detail/${product._id}`}>
              <p className="dark-blue my-2 ">{product.name}</p>
            </Link>
            <p className="text-secondary m-2">₮ {product.price}</p>
            <button
              className="border-0 rounded-4 btn dark-blue-bg text-white btn-dark "
              onClick={() => {
                addCartList(product._id);
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
