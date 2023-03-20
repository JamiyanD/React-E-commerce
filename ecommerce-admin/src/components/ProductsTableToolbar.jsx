import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { alpha } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function EnhancedTableToolbar(props) {
  const [categories, setCategories] = useState([]);
  const [searchColor, setSearchColor] = useState(false);
  const URL = "http://localhost:8080/products/products";
  const { numSelected, setUsers, handleDelete, selected, setSelected } = props;
  const [selectValue, setSelectValue] = React.useState("");

  async function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/products/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    if (AXIOS_DATA.status == 200) {
      setUsers(AXIOS_DATA.data);
    }
  }

  const CATEGORIES_URL = "http://localhost:8080/products/product-categories";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setCategories(FETCHED_JSON);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleChange(select) {
    const AXIOS_DATA = await axios.get(URL);
    setUsers(AXIOS_DATA.data);
    console.log("ds");
    if (select.target.value) {
      const filteredUser = AXIOS_DATA.data.filter(
        (user) => user.category_id == select.target.value
      );
      setUsers(filteredUser);
    }
    setSelectValue(select.target.value);
  }

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <form onSubmit={handleSearch}>
        <TextField
          sx={{ flex: "1 1 100%" }}
          name="search"
          placeholder="Search Product"
          className={
            searchColor ? "bg-body-secondary rounded-3 " : "bg-light rounded-3 "
          }
          variant="standard"
          onFocus={() => {
            setSearchColor(true);
          }}
          onBlur={() => {
            setSearchColor(false);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  type="submit"
                  disableRipple
                  sx={{
                    padding: 0,
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </form>

      {numSelected > 0 ? (
        <Stack direction="row" className="ms-auto" alignItems="center">
          <Typography color="inherit" variant="subtitle2" component="Stack">
            {numSelected} selected
          </Typography>

          <button
            onClick={() => {
              console.log(selected);
              handleDelete(selected);
            }}
            className="btn btn-danger ms-3"
          >
            Delete Selected{" "}
          </button>
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" className="ms-auto" gap={2}>
          <FormControl
            sx={{
              minWidth: 140,
            }}
            size="small"
            className="bg-light rounded-3"
          >
            <Select
              value={selectValue}
              className="rounded-3"
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid lightgrey",
                  },
              }}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              displayEmpty
              IconComponent={(props) => (
                <ExpandMoreIcon className="m-2 text-black-50" {...props} />
              )}
            >
              <MenuItem value="">All</MenuItem>
              {categories &&
                categories.map((category, index) => {
                  return (
                    <MenuItem key={index} value={category.name}>
                      {category.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <Button
            href="/newProduct"
            variant="contained"
            className="color-blue rounded-3"
          >
            Add product
          </Button>
        </Stack>
      )}
    </Toolbar>
  );
}
