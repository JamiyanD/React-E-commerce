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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/joy/FormHelperText";

export default function UsersTableToolbar(props) {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [searchColor, setSearchColor] = useState(false);
  const URL = "https://puuzket.onrender.com/users/users";
  const { numSelected, setUsers, handleDelete, selected, axiosScreen } = props;
  const [selectValue, setSelectValue] = React.useState("");

  async function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `https://puuzket.onrender.com/users/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    if (AXIOS_DATA.status == 200) {
      setUsers(AXIOS_DATA.data);
    }
  }

  const CATEGORIES_URL = "https://puuzket.onrender.com/users/roles";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();

    if (FETCHED_JSON.status == "success") {
      setRoles(FETCHED_JSON.data);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleChange(select) {
    const AXIOS_DATA = await axios.get(URL);
    setUsers(AXIOS_DATA.data);
    if (select.target.value) {
      const filteredUser = AXIOS_DATA.data.filter(
        (user) => user.role == select.target.value
      );

      setUsers(filteredUser);
    }
    console.log(select.target.value);
    setSelectValue(select.target.value);
  }

  const ROLE_URL = "https://puuzket.onrender.com/users/userRoles";
  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON);
  }
  useEffect(() => {
    fetchRoles();
  }, []);

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
              <MenuItem value="">Бүгд</MenuItem>
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role.roles_name}>
                      {role.roles_name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            className="color-blue rounded-3"
            href="/newUser"
          >
            Add User
          </Button>
        </Stack>
      )}
    </Toolbar>
  );
}
