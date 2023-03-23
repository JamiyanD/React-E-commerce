import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import categories from "../data/categories";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import product from "../data/product";
import ProductBoxAside from "./ProductBoxAside";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AppsIcon from "@mui/icons-material/Apps";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function ProductBox() {
  const [defaultSelect, setDefaultSelect] = useState("");
  const [selectValue, setSelectValue] = useState("");
  async function handleChange(select) {
    setSelectValue(select.target.value);
  }
  return (
    <div className="container d-flex">
      <ProductBoxAside />
      <div className="w-75 ms-4">
        <div className="hstack">
          <div>
            <AppsIcon className="mx-2"></AppsIcon>
            <FormatListBulletedIcon color="disabled"></FormatListBulletedIcon>
          </div>
          <div className="ms-auto hstack">
            {" "}
            <FormControl
              sx={{
                minWidth: 140,
              }}
              size="small"
              className=" rounded-3 "
            >
              <Select
                value={selectValue}
                className="rounded-3 text-secondary"
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
                displayEmpty
                IconComponent={(props) => (
                  <ExpandMoreIcon className="m-2 text-black-50" {...props} />
                )}
              >
                <MenuItem value="1">Эрэмбэ: Их сонирхсон</MenuItem>
                <MenuItem value="2">Эрэмбэ: Дундаж үнэлгээ</MenuItem>
                <MenuItem value="">Эрэмбэ: Шинээр</MenuItem>
                <MenuItem value="4">Эрэмбэ: Үнэ өсөхөөр</MenuItem>
                <MenuItem value="5">Эрэмбэ: Үнэ буурахаар</MenuItem>
              </Select>
            </FormControl>
            <p className="border-start border-2 ps-3 text-secondary">
              1–16 харуулсан. Нийт 312
            </p>
          </div>
        </div>
        <hr />
        <div>
          <ul className="d-flex flex-wrap p-0">
            {product.map((product, index) => {
              return (
                <li className=" m-3 product-box-img " key={index}>
                  <img src={product.imgURL} alt="" className="w-100 " />
                  <p className="dark-blue text-center">{product.title}</p>
                  <p className="text-secondary text-center">
                    ₮ {product.price}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="d-flex justify-content-center my-5">
          <Stack spacing={2}>
            <Pagination count={10} size="large" className="dark-blue " />
          </Stack>
        </div>
      </div>
    </div>
  );
}
