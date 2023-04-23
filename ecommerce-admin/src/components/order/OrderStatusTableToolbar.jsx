import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Stack from "@mui/joy/Stack";
import { useState, useEffect, useContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/joy/FormHelperText";
import AddCategory from "./AddOrderStatus";
import AddOrderStatus from "./AddOrderStatus";
export default function OrderStatusTableToolbar(props) {
  const [searchColor, setSearchColor] = useState(false);
  const URL = "https://puuzket.onrender.com/order/status";
  const { numSelected, setUsers, handleDelete, selected, axiosScreen } = props;
  const [selectValue, setSelectValue] = React.useState("");
  const [openAddStatus, setOpenAddStatus] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `https://puuzket.onrender.com/order/status/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    console.log(AXIOS_DATA.data);
    if (AXIOS_DATA.status == 200) {
      setUsers(AXIOS_DATA.data);
    }
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
          <Button
            variant="contained"
            className="color-blue rounded-3"
            onClick={() => {
              setOpenAddStatus(true);
            }}
          >
            Add Status
          </Button>
          <AddOrderStatus
            setUsers={setUsers}
            setOpenAddStatus={setOpenAddStatus}
            openAddStatus={openAddStatus}
          />
        </Stack>
      )}
    </Toolbar>
  );
}
