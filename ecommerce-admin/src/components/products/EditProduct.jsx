import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import EditProductTab from "./EditProductTab";

export default function EditProduct() {
  const PRODUCTS_URL = "https://puuzket.onrender.com/products/products";
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [defaultSelect, setDefaultSelect] = useState("");
  const [currentProducts, setCurrentProducts] = useState({});
  const [image, setImage] = useState("");
  const [changeColor, setChangeColor] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [brand, setBrand] = useState("");

  const CATEGORIES_URL = "https://puuzket.onrender.com/products/category";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setCategories(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    axiosProduct();
  }, []);
  async function axiosProduct() {
    const AXIOS_DATA = await axios.put(PRODUCTS_URL, { productsId: id });
    if (AXIOS_DATA.status == 200) {
      setCurrentProducts(AXIOS_DATA.data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    const files = e.target.image.files[0];
    data.append("isEdit", true);
    data.append("productsId", id);
    data.append("name", currentProducts.name);
    data.append("price", currentProducts.price);
    data.append("image", files);
    data.append("code", currentProducts.code);
    data.append("quantity", currentProducts.quantity);
    data.append("category", currentProducts.category);
    data.append("color", currentProducts.color);
    data.append("size", currentProducts.size);
    data.append("height", currentProducts.height);
    data.append("gender", currentProducts.gender);
    data.append("brand", currentProducts.brand);
    data.append("description", currentProducts.description);

    const AXIOS_DATA = await axios.post(PRODUCTS_URL, data);
    if (AXIOS_DATA.status == 200) {
      navigate("/productsList");
    }
  }

  function handleChange(select) {
    setDefaultSelect(select.target.value);
    console.log(select.target.value);
    setCurrentProducts({
      ...currentProducts,
      category: select.target.value,
    });
  }

  function handleUpload(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
    const filename = e.target.value;
    console.log(filename);
  }

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5"
    >
      <Box sx={{ flexGrow: 1, p: 2 }} className="p-0">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="border border-2 rounded-5 p-3 border-light mb-3">
            <Typography variant="h6">Thumbnail</Typography>
            <div className="position-relative">
              {image ? (
                <img
                  src={image}
                  alt=""
                  style={{ width: "200px" }}
                  className="rounded-4 shadow m-4"
                />
              ) : (
                <img
                  src={currentProducts.filepath}
                  alt=""
                  style={{ width: "200px" }}
                  className="rounded-4 shadow m-4"
                />
              )}

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                className="position-absolute upload-edit-icon shadow"
              >
                <input
                  name="image"
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={handleUpload}
                />
                <EditIcon className="text-secondary text-opacity-50" />
              </IconButton>
            </div>
            <FormHelperText className="form-text mx-auto">
              Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
              image files are accepted
            </FormHelperText>
          </div>
          <Stack className="border border-2 rounded-5 p-3 border-light mb-3">
            <Typography variant="h6" gutterBottom>
              Status
            </Typography>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select
                value={defaultSelect}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className=" rounded-3"
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
                <MenuItem value="">Select an option</MenuItem>
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <MenuItem key={index} value={category.category_name}>
                        {category.category_name}
                      </MenuItem>
                    );
                  })}
              </Select>

              <FormHelperText>Set the product status.</FormHelperText>
            </FormControl>
          </Stack>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <EditProductTab
              currentProducts={currentProducts}
              setCurrentProducts={setCurrentProducts}
              changeColor={changeColor}
              setChangeColor={setChangeColor}
              size={size}
              setSize={setSize}
              setGender={setGender}
              gender={gender}
              setHeight={setHeight}
              height={height}
              setBrand={setBrand}
              brand={brand}
            />
          </Box>
          <Stack direction="row" spacing={2} justifyContent="end">
            <Button
              variant="contained"
              className="bg-light text-muted rounded-3"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="color-blue rounded-3"
            >
              Save Changes
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
