import * as React from "react";
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

export default function NewCustomer({ setUsers }) {
  const [currentCustomer, setCurrentCustomer] = useState({
    customer_name: "",
    customer_email: "",
    customer_password: "",
    customer_phone_number: "",
    customer_description: "",
    customer_joined_date: new Date().toString().substr(3, 21),
    filename: "",
  });
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const CUSTOMER_URL = "https://puuzket.onrender.com/customer";

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    // const files = e.target.image.files[0];
    console.log(currentCustomer);
    data.append("customer_name", currentCustomer.customer_name);
    data.append("customer_phone_number", currentCustomer.customer_phone_number);
    data.append("customer_email", currentCustomer.customer_email);
    data.append("customer_description", currentCustomer.customer_description);
    // data.append("image", files);
    data.append("customer_password", currentCustomer.customer_password);

    data.append("customer_joined_date", currentCustomer.customer_joined_date);

    const AXIOS_DATA = await axios.post(CUSTOMER_URL, data);
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.status == 200) {
      navigate("/customerList");
      const AXIOS_DATA = await axios.get(CUSTOMER_URL);
      console.log(AXIOS_DATA.data.data);
      setUsers(AXIOS_DATA.data.data);
      setCurrentCustomer("");
    }
  }

  function handleName(e) {
    setCurrentCustomer({
      ...currentCustomer,
      customer_name: e.target.value,
    });
  }

  function handlePhoneNumber(e) {
    setCurrentCustomer({
      ...currentCustomer,
      customer_phone_number: e.target.value,
    });
  }
  function handleEmail(e) {
    setCurrentCustomer({
      ...currentCustomer,
      customer_email: e.target.value,
    });
  }
  function handlePassword(e) {
    setCurrentCustomer({
      ...currentCustomer,
      customer_password: e.target.value,
    });
  }
  function handleDescription(e) {
    setCurrentCustomer({
      ...currentCustomer,
      customer_description: e.target.value,
    });
  }

  function handleUpload(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
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
          {/* <div className="border border-2 rounded-5 p-3  mb-3">
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
          </div> */}
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
                    Customer Information
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Name
                  </Typography>
                  <input
                    type=""
                    name="fullname"
                    className="form-control mb-4"
                    placeholder="Name"
                    onChange={handleName}
                    value={currentCustomer.customer_name}
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
                    value={currentCustomer.customer_email}
                  />

                  <Typography variant="subtitle2" gutterBottom>
                    Description
                  </Typography>
                  <textarea
                    class="form-control rounded-3"
                    placeholder="Type your text here..."
                    style={{ height: "100px" }}
                    value={currentCustomer.customer_description}
                    onChange={handleDescription}
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
                    value={currentCustomer.customer_password}
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
                    value={currentCustomer.customer_phone_number}
                  />
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
