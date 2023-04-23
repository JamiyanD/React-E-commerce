import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import FormHelperText from "@mui/joy/FormHelperText";
import EditIcon from "@mui/icons-material/Edit";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
export default function NewUser({ setUsers }) {
  const [currentUser, setCurrentUser] = useState({
    full_name: "",
    email: "",
    role: "",
    password: "",
    phone_number: "",
    isEdit: false,
    joined_date: new Date().toString().substr(3, 21),
  });
  const [image, setImage] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const USER_URL = "https://puuzket.onrender.com/users/users";
  const ROLE_URL = "https://puuzket.onrender.com/users/roles";

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchRoles();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    const files = e.target.image.files[0];
    console.log(currentUser);
    data.append("full_name", currentUser.full_name);
    data.append("phone_number", currentUser.phone_number);
    data.append("email", currentUser.email);
    data.append("image", files);
    data.append("password", currentUser.password);
    data.append("role", currentUser.role);

    data.append("joined_date", currentUser.joined_date);

    const AXIOS_DATA = await axios.post(USER_URL, data);
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.status == 200) {
      navigate("/usersList");
      const AXIOS_DATA = await axios.get(USER_URL);
      console.log(AXIOS_DATA.data.data);
      setUsers(AXIOS_DATA.data.data);
      setCurrentUser("");
    }
  }

  function handleFullName(e) {
    setCurrentUser({
      ...currentUser,
      full_name: e.target.value,
    });
  }

  function handlePhoneNumber(e) {
    setCurrentUser({
      ...currentUser,
      phone_number: e.target.value,
    });
  }
  function handleEmail(e) {
    setCurrentUser({
      ...currentUser,
      email: e.target.value,
    });
  }
  function handlePassword(e) {
    setCurrentUser({
      ...currentUser,
      password: e.target.value,
    });
  }

  function handleRadio(e) {
    console.log(e.target.value);
    if (e.target.value) {
      setCurrentUser({
        ...currentUser,
        role: e.target.value,
      });
    }
  }
  function handleUpload(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const [value, setValue] = React.useState("1");
  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5 p-3"
    >
      <Box sx={{ flexGrow: 1, p: 2 }} className="p-0">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="border border-2 rounded-5 p-3  mb-3">
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
                  src="https://learncrypto.com/_nuxt/img/901a7a4.jpg"
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

            <FormHelperText className="text-muted mx-auto">
              Only *.png, *.jpg and *.jpeg image files are accepted
            </FormHelperText>
          </div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabs}
                  aria-label="lab API tabs example"
                >
                  <Tab label="General" value="1" />
                  <Tab label="Advanced" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1" className="p-0">
                <div class="my-4 border border-2 border-light rounded-5 p-3">
                  <Typography variant="h6" gutterBottom className="m-3">
                    User Information
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Name
                  </Typography>
                  <input
                    type=""
                    name="fullname"
                    className="form-control mb-4"
                    placeholder="Name"
                    onChange={handleFullName}
                    value={currentUser.full_name}
                  />

                  <Typography variant="subtitle2" gutterBottom>
                    Email
                  </Typography>
                  <input
                    type=""
                    name="email"
                    className="form-control mb-4"
                    placeholder="Email"
                    onChange={handleEmail}
                    value={currentUser.email}
                  />

                  <Typography variant="subtitle2" gutterBottom>
                    Description
                  </Typography>
                  <textarea
                    class="form-control rounded-3"
                    placeholder="Type your text here..."
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
                <div class="mb-4 border border-2 border-light rounded-5 p-3">
                  <Typography variant="subtitle2" gutterBottom>
                    Password
                  </Typography>
                  <input
                    type=""
                    name="password"
                    className="form-control rounded-3 mb-4"
                    placeholder="Password"
                    onChange={handlePassword}
                    value={currentUser.password}
                  />

                  <Typography variant="subtitle2" gutterBottom>
                    Phone Number
                  </Typography>
                  <input
                    type=""
                    name="phone-number"
                    class="form-control mb-4"
                    placeholder="Phone Number"
                    onChange={handlePhoneNumber}
                    value={currentUser.phone_number}
                  />

                  <Typography variant="subtitle2" gutterBottom>
                    Role
                  </Typography>
                  <RadioGroup
                    row
                    className="d-flex flex-wrap gap-3 "
                    onChange={handleRadio}
                    value={currentUser.role}
                  >
                    {roles &&
                      roles.map((role, khuslen) => {
                        return (
                          <FormControlLabel
                            key={khuslen}
                            control={<Radio color="primary" />}
                            label={role.roles_name}
                            value={role.roles_name}
                            className="new-product-radio"
                          />
                        );
                      })}
                  </RadioGroup>
                </div>
              </TabPanel>
              <TabPanel value="2" className="p-0">
                <div class="my-4 border border-2 border-light rounded-5 p-3">
                  <Typography variant="h6" gutterBottom className="m-3">
                    Address Details
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Country
                  </Typography>
                  <input
                    type=""
                    name="code"
                    class="form-control rounded-3 mb-4"
                    placeholder="Country"
                    // onChange={handleCode}
                    // value={currentProducts.code}
                  />

                  <Typography variant="subtitle2" gutterBottom>
                    City
                  </Typography>
                  <input
                    type=""
                    name="code"
                    className="form-control rounded-3 mb-4"
                    placeholder="City"
                  />

                  <Stack direction="row" className="gap-2">
                    <div className="w-50">
                      <Typography variant="subtitle2" gutterBottom>
                        District
                      </Typography>

                      <input
                        type=""
                        name="quantity"
                        className="form-control rounded-3 "
                        placeholder="District"
                        // onChange={handleQuantity}
                        // value={currentProducts.quantity}
                      />
                    </div>
                    <div className="w-50">
                      <Typography variant="subtitle2" gutterBottom>
                        Home
                      </Typography>
                      <input
                        type="number"
                        name="warehouse"
                        className="form-control rounded-3 "
                        placeholder="Home Address"
                      />
                    </div>
                  </Stack>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              className="color-blue rounded-3"
            >
              Save Changes
            </Button>
            <Button
              variant="contained"
              className="bg-light text-muted rounded-3"
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
