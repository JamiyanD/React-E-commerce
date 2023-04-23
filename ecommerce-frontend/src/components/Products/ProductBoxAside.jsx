import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import axios from "axios";
import { ProductsContext } from "../../context/products";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ProductsSize, ProductsColor } from "./ProductsFilter";

export default function ProductBoxAside() {
  const [sliderValue, setSliderValue] = useState([0, 120000]);
  const [categories, setCategories] = useState([]);
  const PRODUCTS_URL = "https://puuzket.onrender.com/products/products";
  const CATEGORIES_URL = "https://puuzket.onrender.com/products/category";
  const [showProducts, setShowProducts] = useContext(ProductsContext);
  const [productsData, setProductsData] = useState([]);

  async function axiosProducts() {
    const AXIOS_DATA = await axios.get(PRODUCTS_URL);
    setProductsData(AXIOS_DATA.data);
  }

  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status == "success") {
      setCategories(FETCHED_JSON.data);
    }
  }
  useEffect(() => {
    axiosProducts();
    fetchCategories();
  }, []);

  const handleSlider = (event) => {
    setSliderValue(event.target.value);
    const filteredData = productsData.filter((product) => {
      return product.price >= sliderValue[0] && product.price <= sliderValue[1];
    });
    setShowProducts(filteredData);
  };

  async function handleCategory(category) {
    if (category) {
      const filteredProducts = productsData.filter(
        (product) => product.category == category
      );
      setShowProducts(filteredProducts);
    }
  }

  const [genderArray, setGenderArray] = useState([]);
  const gender = ["Эрэгтэй", "Эмэгтэй"];
  function handleGenderChange(key) {
    let sel = genderArray;
    let find = sel.indexOf(key);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    console.log(sel);
    setGenderArray(sel);
    const array = [];
    if (genderArray.length) {
      genderArray.map((item) => {
        const filteredProducts = productsData.filter(
          (product) => product.gender == item
        );
        filteredProducts.map((object) => array.push(object));
        setShowProducts(array);
      });
    } else {
      setShowProducts(productsData);
    }
  }

  const [heightArray, setHeightArray] = useState([]);
  const height = ["Богино түрийтэй", "Хагас түрийтэй", "Урт түрийтэй"];
  function handleHeightChange(key) {
    let sel = heightArray;
    let find = sel.indexOf(key);
    console.log(find);
    if (find > -1) {
      sel.splice(find, 1);
    } else {
      sel.push(key);
    }
    setHeightArray(sel);
    const array = [];
    if (heightArray.length) {
      heightArray.map((item) => {
        const filteredProducts = productsData.filter(
          (product) => product.height == item
        );

        filteredProducts.map((object) => array.push(object));
        setShowProducts(array);
        console.log(array);
      });
    } else {
      setShowProducts(productsData);
    }
  }
  const [sizeArray, setSizeArray] = useState([]);
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
  const [colorArray, setColorArray] = useState([]);
  const color = [
    { value: "хар", bg: "Black" },
    { value: "цагаан", bg: "White" },
    { value: "цэнхэр", bg: "Blue" },
    { value: "саарал", bg: "Grey" },
    { value: "бор", bg: "Brown" },
    { value: "ногоон", bg: "Green" },
    { value: "солонго", bg: "Rainbow" },
    { value: "ягаан", bg: "Pink" },
    { value: "чернил", bg: "Purple" },
    { value: "улаан", bg: "Red" },
    { value: "шар", bg: "Yellow" },
  ];
  function handleColorClick(key) {
    console.log(key);
  }

  return (
    <aside className=" vstack gap-5 ">
      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Ангилал</h3>
        <hr />
        {categories.map((category) => {
          return (
            <p
              className="dark-blue pink-hover cursor-pointer"
              onClick={() => handleCategory(category.category_name)}
            >
              <ArrowForwardIosIcon fontSize="inherit" className="me-1" />
              {category.category_name}
            </p>
          );
        })}
      </div>
      <div className=" border border-1 p-3">
        <h3 className=" dark-blue">Хүйс</h3>

        {gender.map((option) => (
          <div class="form-check" className="p-0 mb-1">
            <input
              class="form-check-input  me-2 genderCheckbox shadow-none"
              type="checkbox"
              value={option}
              key={option}
              text={option}
              id="genderCheckbox"
              onChange={() => handleGenderChange(option)}
            />
            <label class="form-check-label dark-blue" for="genderCheckbox">
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className=" border border-1 p-3">
        <h3 className=" dark-blue">Гутлын өндөр</h3>

        {height.map((option) => (
          <div class="form-check" className="p-0 mb-1">
            <input
              class="form-check-input  me-2 genderCheckbox shadow-none"
              type="checkbox"
              value={option}
              key={option}
              text={option}
              id="genderCheckbox"
              onChange={() => handleHeightChange(option)}
            />
            <label class="form-check-label dark-blue" for="genderCheckbox">
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Гутлын размер</h3>
        <hr />
        <div className="d-flex flex-wrap">
          {size.map((item) => (
            <ProductsSize
              item={item}
              productsData={productsData}
              setSizeArray={setSizeArray}
              sizeArray={sizeArray}
            />
          ))}
        </div>
      </div>
      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Үнээр эрэмбэлэх</h3>

        <Slider
          size="small"
          min={100000}
          max={1000000}
          className="pink"
          aria-label="Volume"
          value={sliderValue}
          onChange={handleSlider}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          getAriaLabel={() => "Temperature range"}
        />
        <div className="hstack">
          <span className="dark-blue ">
            Үнэ: <br className=" d-lg-none" /> ₮{sliderValue[0]} - ₮
            {sliderValue[1]}
          </span>
          {/* <button className="btn border-0 dark-blue ms-auto fw-semibold pink-hover">
            ШҮҮЛТ
          </button> */}
        </div>
      </div>
      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Өнгө</h3>
        <hr />
        <div className="row text-center">
          {color.map((item) => {
            return (
              <ProductsColor
                item={item}
                productsData={productsData}
                setColorArray={setColorArray}
                colorArray={colorArray}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}

{
  /* <div className="hstack border border-1 p-3">
<input
  type=""
  name=""
  class="form-control rounded-3 w-75 me-3"
  placeholder="Бүтээгдэхүүн хайх"
/>
<button className="border-0 rounded-4 btn pink-bg text-white  btn-dark ">
  ХАЙХ
</button>
</div> */
}
{
  /* <hr />
        <FormControl sx={{ minWidth: 120 }} size="small" className="w-100">
          <Select
            displayEmpty
            value={defaultSelect}
            //   onChange={handleChange}

            inputProps={{ "aria-label": "Without label" }}
            className=" rounded-3 text-secondary "
            sx={{
              boxShadow: "none",

              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "silver",
                },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "lightgrey",
                },
            }}
          >
            <MenuItem disabled value="">
              Ангилал сонгох
            </MenuItem>
            {categories.map((category, index) => {
              return (
                <MenuItem key={index} value={category.category_name}>
                  {category.category_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> */
}
