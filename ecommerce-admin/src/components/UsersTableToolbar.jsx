import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Stack from "@mui/joy/Stack";
import { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/joy/FormHelperText";
import EditIcon from "@mui/icons-material/Edit";
export default function UsersTableToolbar(props) {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [searchColor, setSearchColor] = useState(false);
  const URL = "http://localhost:8080/users/users";
  const { numSelected, setUsers, handleDelete, selected, axiosScreen } = props;
  const [selectValue, setSelectValue] = React.useState("");
  async function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/users/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    console.log(AXIOS_DATA.data);
    if (AXIOS_DATA.status == 200) {
      setUsers(AXIOS_DATA.data);
    }
  }

  const CATEGORIES_URL = "http://localhost:8080/users/userRoles";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON);
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

  const [currentUser, setCurrentUser] = useState({
    full_name: "",
    email: "",
    role: "",
    password: "",
    phone_number: "",
    isEdit: false,
    joined_date: new Date().toString().substr(3, 18),
  });

  const url = "http://localhost:8080/users/users";

  const ROLE_URL = "http://localhost:8080/users/userRoles";
  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON);
  }
  useEffect(() => {
    fetchRoles();
  }, []);

  const location = useLocation();
  console.log(location);
  const handleOpen = () => setOpen(true);

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
              <MenuItem value="">All</MenuItem>
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role.name}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <Button
            // href="/newUser"
            variant="contained"
            className="color-blue rounded-3"
            onClick={handleOpen}
          >
            Add User
          </Button>
        </Stack>
      )}
      {/* 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-user-modal rounded-4 p-3">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User Details
          </Typography>
          <Box sx={{ flexGrow: 1, p: 2 }} className="">
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{ width: "300px" }}>
                User Information
              </Typography>
              <FormHelperText className=" mt-3">Update Avatar</FormHelperText>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                className=""
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  // onChange={handleUpload}
                />
                <EditIcon className="text-secondary text-opacity-50" />
              </IconButton>
              <Typography variant="subtitle2" className="mt-3">
                Name
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleFullName}
                value={currentUser.full_name}
              />
              <Typography variant="subtitle2" className="mt-3">
                Email
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleEmail}
                value={currentUser.email}
              />
              <Typography variant="subtitle2" className="mt-3">
                Password
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handlePassword}
                value={currentUser.password}
              />
              <Typography variant="subtitle2" className="mt-3">
                Phone Number
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handlePhoneNumber}
                value={currentUser.phone_number}
              />

              <div>
                <Typography variant="subtitle2" className="my-3">
                  Role
                </Typography>
                <RadioGroup>
                  {roles &&
                    roles.map((role, khuslen) => {
                      return (
                        <>
                          <Stack
                            direction="row"
                            alignItems="center"
                            className="mb-3"
                          >
                            <input
                              key={khuslen}
                              onChange={handleRadio}
                              value={role.name}
                              className="form-check-input me-3"
                              type="radio"
                              size="medium"
                              name="radioNoLabel"
                              id="radioNoLabel1"
                            />
                            <div>
                              <Typography variant="subtitle2" gutterBottom>
                                {role.name}
                              </Typography>
                              <FormHelperText className="">
                                A product name is required and recommended to be
                                unique.
                              </FormHelperText>
                            </div>
                          </Stack>
                        </>
                      );
                    })}
                </RadioGroup>
              </div>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                className="mt-3"
              >
                <Button
                  variant="contained"
                  className="bg-light text-muted rounded-3"
                >
                  Discard
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="color-blue rounded-3"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Modal> */}
    </Toolbar>
  );
}
