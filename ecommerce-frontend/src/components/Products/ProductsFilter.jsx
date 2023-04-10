import { useState, useContext } from "react";
import { ProductsContext } from "../../context/products";
import CheckIcon from "@mui/icons-material/Check";

export function ProductsSize({ item, productsData, sizeArray, setSizeArray }) {
  const [isChecked, setIsChecked] = useState(false);

  const [showProducts, setShowProducts] = useContext(ProductsContext);

  function handleClick(key) {
    setIsChecked(!isChecked);

    let sel = sizeArray;
    let find = sel.indexOf(key);
    console.log(find);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    setSizeArray(sel);
    console.log(sel);
    const array = [];
    if (sizeArray.length) {
      sizeArray.map((filter) => {
        const filteredProducts = productsData.filter(
          (product) => product.size == filter
        );

        filteredProducts.map((object) => array.push(object));
        setShowProducts(array);
        // console.log(array);
      });
    } else {
      setShowProducts(productsData);
    }
  }

  return (
    <div>
      <button
        className={
          isChecked
            ? "pink-bg size-button dark-blue btn border m-1"
            : "bg-white size-button dark-blue btn border m-1"
        }
        onClick={() => handleClick(item)}
      >
        {item}
      </button>
    </div>
  );
}

export function ProductsColor({
  item,
  productsData,
  colorArray,
  setColorArray,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [showProducts, setShowProducts] = useContext(ProductsContext);

  function handleClick(key) {
    setIsChecked(!isChecked);

    let sel = colorArray;
    let find = sel.indexOf(key);
    console.log(find);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    setColorArray(sel);
    console.log(sel);
    const array = [];
    if (colorArray.length) {
      colorArray.map((filter) => {
        const filteredProducts = productsData.filter(
          (product) => product.color == filter
        );

        filteredProducts.map((object) => array.push(object));
        setShowProducts(array);
        // console.log(array);
      });
    } else {
      setShowProducts(productsData);
    }
  }

  return (
    <div className="col-4 d-flex flex-column align-items-center">
      <button
        className={`color-button rounded-circle border m-2 text-white d-flex justify-content-center ${item.bg}`}
        onClick={() => handleClick(item.value)}
      >
        {isChecked ? <CheckIcon /> : ""}
      </button>
      <p className="dark-blue">{item.bg}</p>
    </div>
  );
}
const size = [
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
];
export function ProductsDetailSize({
  item,
  currentProducts,
  sizeArray,
  setSizeArray,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const [showProducts, setShowProducts] = useContext(ProductsContext);

  function handleClick(key) {
    setIsChecked(!isChecked);

    console.log(currentProducts);
    // const filteredData = size.filter((item) => (

    // ))
    // let sel = sizeArray;
    // let find = sel.indexOf(key);
    // console.log(find);
    // if (find > -1) {
    //   sel.splice(find, 1);
    // } else {
    //   sel.push(key);
    // }
    // setSizeArray(sel);
    // console.log(sel);
    // const array = [];
    // if (sizeArray.length) {
    //   sizeArray.map((filter) => {
    //     const filteredProducts = productsData.filter(
    //       (product) => product.size == filter
    //     );

    //     filteredProducts.map((object) => array.push(object));
    //     setShowProducts(array);
    //     // console.log(array);
    //   });
    // } else {
    //   setShowProducts(productsData);
    // }
  }

  return (
    <div>
      <button
        className={
          isChecked
            ? "pink-bg size-button dark-blue btn border m-1"
            : "bg-white size-button dark-blue btn border m-1"
        }
        onClick={() => handleClick(item)}
      >
        {item}
      </button>
    </div>
  );
}
