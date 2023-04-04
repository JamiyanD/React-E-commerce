import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import categories from "../data/categories";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
export default function ProductBoxAside() {
  const [defaultSelect, setDefaultSelect] = useState("");
  const [sliderValue, setSliderValue] = useState([0, 120000]);
  const [categories, setCategories] = useState([]);

  const CATEGORIES_URL = "http://localhost:8080/products/category";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status == "success") {
      setCategories(FETCHED_JSON.data);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSlider = (event) => {
    console.log(event.target.value);
    setSliderValue(event.target.value);
  };
  return (
    <aside className=" vstack gap-5 w-25">
      <div className="hstack border border-1 p-3">
        <input
          type=""
          name=""
          class="form-control rounded-3 w-75 me-3"
          placeholder="Бүтээгдэхүүн хайх"
        />
        <button className="border-0 rounded-4 btn pink-bg text-white  btn-dark ">
          ХАЙХ
        </button>
      </div>
      <div className=" border border-1 p-3">
        <h3 className=" dark-blue">Ангилал сонгох</h3>
        <hr />
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
        </FormControl>
      </div>
      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Ангилал</h3>
        <hr />
        {categories.map((category) => {
          return (
            <p className="dark-blue pink-hover">{category.category_name}</p>
          );
        })}
      </div>
      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Үнээр эрэмбэлэх</h3>

        <Slider
          size="small"
          max={120000}
          className="pink"
          aria-label="Volume"
          value={sliderValue}
          onChange={handleSlider}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          getAriaLabel={() => "Temperature range"}
        />
        <div className="hstack">
          <span className="dark-blue">
            Үнэ: ₮{sliderValue[0]} - ₮{sliderValue[1]}
          </span>
          <button className="btn border-0 dark-blue ms-auto fw-semibold pink-hover">
            ШҮҮЛТ
          </button>
        </div>
      </div>
      <div className=" border border-1 p-3">
        <h3 className="dark-blue">Өнгөөр эрэмбэлэх</h3>
        <hr />
        <div>
          <button className="color-button dark-blue btn border m-1 ">
            Бор
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Нил ягаан
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Ногоон
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Сааоал
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Улаан
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Улбар шар
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Хар
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Хөх
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Хүрэн
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Цэнхэр
          </button>
          <button className="color-button dark-blue btn border m-1 ">
            Шар
          </button>
        </div>
      </div>
    </aside>
  );
}
