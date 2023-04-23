import TextField from "@mui/material/TextField";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import FormHelperText from "@mui/joy/FormHelperText";
import EditIcon from "@mui/icons-material/Edit";
import EdirUserModal from "./EditUserModal";

export default function EditUserModal({
  currentUser,
  setCurrentUser,
  setOpen,
  open,
}) {
  const ROLE_URL = "https://puuzket.onrender.com/users/roles";
  const [roles, setRoles] = useState([]);
  const [image, setImage] = useState("");
  const url = "https://puuzket.onrender.com/users/users";
  const { id } = useParams();

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
    const putData = {
      userId: id,
      full_name: currentUser.full_name,
      phone_number: currentUser.phone_number,
      email: currentUser.email,
      password: currentUser.password,
      role: currentUser.role,
      isEdit: true,
      joined_date: currentUser.joined_date,
    };
    const data = new FormData();
    const files = e.target.image.files[0];
    console.log(files);
    data.append("isEdit", true);
    data.append("userId", id);
    data.append("full_name", currentUser.full_name);

    data.append("phone_number", currentUser.phone_number);
    data.append("image", files);
    data.append("email", currentUser.email);
    data.append("password", currentUser.password);
    data.append("role", currentUser.role);

    const AXIOS_DATA = await axios.post(url, data);

    if (AXIOS_DATA.status == 200) {
      setOpen(false);
      window.location.reload();
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
    const filename = e.target.value;
    console.log(filename);
  }
  const handleClose = () => setOpen(false);
  return (
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
                  src={currentUser.filepath}
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
                            value={role.roles_name}
                            className="form-check-input me-3"
                            type="radio"
                            size="medium"
                            name="radioNoLabel"
                            id="radioNoLabel1"
                          />
                          <div>
                            <Typography variant="subtitle2" gutterBottom>
                              {role.roles_name}
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
    </Modal>
  );
}
