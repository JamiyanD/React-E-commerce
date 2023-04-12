import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Tab from "@mui/material/Tab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
export default function NewProductTab({
  currentProducts,
  setCurrentProducts,
  changeColor,
  setChangeColor,
  size,
  setSize,
  gender,
  setGender,
  height,
  setHeight,
  brand,
  setBrand,
}) {
  function handleName(e) {
    setCurrentProducts({
      ...currentProducts,
      name: e.target.value,
    });
  }
  function handleDescription(e) {
    console.log(e.target.value);
    setCurrentProducts({
      ...currentProducts,
      description: e.target.value,
    });
  }

  function handlePrice(e) {
    setCurrentProducts({
      ...currentProducts,
      price: e.target.value,
    });
  }

  function handleCode(e) {
    setCurrentProducts({
      ...currentProducts,
      code: e.target.value,
    });
  }
  function handleQuantity(e) {
    setCurrentProducts({
      ...currentProducts,
      quantity: e.target.value,
    });
  }
  function handleBrand(e) {
    setBrand(e.target.value);
    console.log(e.target.value);
    setCurrentProducts({
      ...currentProducts,
      brand: e.target.value,
    });
  }

  function handleColor(e) {
    setChangeColor(e.target.value);
    setCurrentProducts({
      ...currentProducts,
      color: e.target.value,
    });
  }
  function handleSize(e) {
    setSize(e.target.value);
    setCurrentProducts({
      ...currentProducts,
      size: e.target.value,
    });
  }
  function handleGender(e) {
    setGender(e.target.value);
    setCurrentProducts({
      ...currentProducts,
      gender: e.target.value,
    });
  }
  function handleHeight(e) {
    setHeight(e.target.value);
    setCurrentProducts({
      ...currentProducts,
      height: e.target.value,
    });
  }

  const [value, setValue] = React.useState("1");
  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const [sliderValue, setSliderValue] = useState(0);
  const handleSlider = (newValue) => {
    setSliderValue(newValue.target.value);
  };

  const [showTax, setShowTax] = useState(true);
  const [radioValue, setRadioValue] = useState(2);
  function handleRadio(e) {
    setRadioValue(e.target.value);
    if (e.target.value == 1 || e.target.value == 3) {
      setShowTax(false);
    } else {
      setShowTax(true);
    }
  }
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleTabs} aria-label="lab API tabs example">
          <Tab label="General" value="1" />
          <Tab label="Advanced" value="2" />
        </TabList>
      </Box>

      <TabPanel value="1" className="p-0">
        <div class="my-4 border border-2 border-light rounded-5 p-3">
          <Typography variant="h6" gutterBottom className="m-3">
            General
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Product Name
          </Typography>
          <input
            type=""
            name="name"
            class="form-control "
            placeholder="Product name"
            onChange={handleName}
            value={currentProducts.name}
          />
          <FormHelperText className="mb-4">
            A product name is required and recommended to be unique.
          </FormHelperText>
          <Typography variant="subtitle2" gutterBottom>
            Description
          </Typography>
          <textarea
            class="form-control rounded-3"
            placeholder="Type your text here..."
            style={{ height: "200px" }}
            onChange={handleDescription}
          ></textarea>
          <FormHelperText>
            Set a description to the product for better visibility.
          </FormHelperText>
        </div>
        <div class="mb-4 border border-2 border-light rounded-5 p-3">
          <Typography variant="h6" gutterBottom className="my-3">
            Pricing
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Base Price
          </Typography>
          <input
            type=""
            name=""
            class="form-control rounded-3"
            placeholder="Product price"
            onChange={handlePrice}
            value={currentProducts.price}
          />
          <FormHelperText className="mb-4">
            Set the product price.
          </FormHelperText>
          <Typography variant="subtitle2" gutterBottom>
            Discount Type
          </Typography>
          <RadioGroup
            row
            className="d-flex justify-content-between mb-4"
            onChange={handleRadio}
            value={radioValue}
          >
            <FormControlLabel
              control={<Radio color="primary" />}
              label="No Discount"
              value={1}
              className="new-product-radio m-0"
            />
            <FormControlLabel
              control={<Radio />}
              label="Percentage %"
              value={2}
              className="new-product-radio m-0"
            />
            <FormControlLabel
              control={<Radio />}
              label="Fixed Price"
              value={3}
              className="new-product-radio m-0"
            />
          </RadioGroup>
          {showTax && (
            <>
              <Typography variant="h4" className="text-center">
                {sliderValue}%
              </Typography>
              <Slider
                aria-label="Volume"
                value={sliderValue}
                onChange={handleSlider}
              />
              <FormHelperText className="mb-4">
                Set a percentage discount to be applied on this product.
              </FormHelperText>
            </>
          )}
          <Stack direction="row" gap={2}>
            <FormControl className="w-50" size="small">
              <Typography variant="subtitle2" gutterBottom>
                Color
              </Typography>
              <Select
                value={changeColor}
                onChange={handleColor}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className=" rounded-3 text-muted"
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
                IconComponent={(props) => (
                  <ExpandMoreIcon className="m-2 text-black-50" {...props} />
                )}
              >
                <MenuItem disabled value="">
                  Select an option
                </MenuItem>
                <MenuItem value="хар">хар</MenuItem>
                <MenuItem value="цагаан">цагаан</MenuItem>
                <MenuItem value="цэнхэр">цэнхэр</MenuItem>
                <MenuItem value="саарал">саарал</MenuItem>
                <MenuItem value="бор">бор</MenuItem>
                <MenuItem value="ногоон">ногоон</MenuItem>
                <MenuItem value="солонго">солонго</MenuItem>
                <MenuItem value="ягаан">ягаан</MenuItem>

                <MenuItem value="чернил">чернил</MenuItem>
                <MenuItem value="улаан">улаан</MenuItem>
                <MenuItem value="шар">шар</MenuItem>
              </Select>
              <FormHelperText>Set the color.</FormHelperText>
            </FormControl>

            <FormControl className="w-50" size="small">
              <Typography variant="subtitle2" gutterBottom>
                Size
              </Typography>
              <Select
                value={size}
                onChange={handleSize}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className=" rounded-3 text-muted"
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
                IconComponent={(props) => (
                  <ExpandMoreIcon className="m-2 text-black-50" {...props} />
                )}
              >
                <MenuItem disabled value="">
                  Select an option
                </MenuItem>
                <MenuItem value="33">33</MenuItem>
                <MenuItem value="34">34</MenuItem>
                <MenuItem value="35">35</MenuItem>
                <MenuItem value="36">36</MenuItem>
                <MenuItem value="37">37</MenuItem>
                <MenuItem value="38">38</MenuItem>
                <MenuItem value="39">39</MenuItem>
                <MenuItem value="40">40</MenuItem>
                <MenuItem value="41">41</MenuItem>
                <MenuItem value="42">42</MenuItem>
                <MenuItem value="43">43</MenuItem>
                <MenuItem value="44">44</MenuItem>
                <MenuItem value="45">45</MenuItem>
                <MenuItem value="46">46</MenuItem>
                <MenuItem value="47">47</MenuItem>
                <MenuItem value="48">48</MenuItem>
              </Select>
              <FormHelperText className="mb-4">
                Set the product size.
              </FormHelperText>
            </FormControl>
          </Stack>
        </div>
      </TabPanel>
      <TabPanel value="2" className="p-0">
        <div class="my-4 border border-2 border-light rounded-5 p-3">
          <Typography variant="h6" gutterBottom className="m-3">
            Inventory
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            SKU
          </Typography>
          <input
            type=""
            name="code"
            class="form-control rounded-3"
            placeholder="SKU Number"
            onChange={handleCode}
            value={currentProducts.code}
          />
          <FormHelperText className="mb-4">
            Enter the product SKU.
          </FormHelperText>
          <FormControl className="w-100" size="small">
            <Typography variant="subtitle2" gutterBottom>
              Height
            </Typography>
            <Select
              value={height}
              onChange={handleHeight}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className=" rounded-3 text-muted"
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
              IconComponent={(props) => (
                <ExpandMoreIcon className="m-2 text-black-50" {...props} />
              )}
            >
              <MenuItem disabled value="">
                Select an option
              </MenuItem>
              <MenuItem value="Богино түрийтэй">Богино түрийтэй</MenuItem>
              <MenuItem value="Хагас түрийтэй">Хагас түрийтэй</MenuItem>
              <MenuItem value="Урт түрийтэй">Урт түрийтэй</MenuItem>
            </Select>
            <FormHelperText className="mb-4">
              Set the product height.
            </FormHelperText>
          </FormControl>
          <Stack direction="row" gap={2}>
            <div className="w-50">
              <Typography variant="subtitle2" gutterBottom>
                Quantity
              </Typography>

              <input
                type="number"
                name="quantity"
                className="form-control rounded-3 "
                placeholder="On shelf"
                onChange={handleQuantity}
                value={currentProducts.quantity}
              />
              <FormHelperText className="mb-4">
                Enter the product quantity.
              </FormHelperText>
            </div>
            <FormControl className="w-50" size="small">
              <Typography variant="subtitle2" gutterBottom>
                Brand
              </Typography>
              <Select
                value={brand}
                onChange={handleBrand}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className=" rounded-3 text-muted"
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
                IconComponent={(props) => (
                  <ExpandMoreIcon className="m-2 text-black-50" {...props} />
                )}
              >
                <MenuItem disabled value="">
                  Select an option
                </MenuItem>
                <MenuItem value="Jordan">Jordan</MenuItem>
                <MenuItem value="Nike">Nike</MenuItem>
                <MenuItem value="Converse">Converse</MenuItem>
                <MenuItem value="Adidas">Adidas</MenuItem>
              </Select>
              <FormHelperText className="mb-4">
                Set the product brand.
              </FormHelperText>
            </FormControl>
          </Stack>

          <Typography variant="subtitle2" gutterBottom>
            Gender
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={handleGender}
            >
              <FormControlLabel
                value="Эмэгтэй"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="Эрэгтэй"
                control={<Radio />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>
          <FormHelperText className="mb-4">
            Allow customers to purchase products that are out of stock.
          </FormHelperText>
        </div>
      </TabPanel>
    </TabContext>
  );
}
