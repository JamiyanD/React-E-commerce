import TextField from "@mui/material/TextField";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import FormHelperText from "@mui/joy/FormHelperText";
import EditIcon from "@mui/icons-material/Edit";
export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "http://localhost:8080/users/users";
  const [currentUser, setCurrentUser] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "",
    phone_number: "",
  });
  useEffect(() => {
    axiosProduct();
  }, []);
  async function axiosProduct() {
    const AXIOS_DATA = await axios.put(url, { userId: id });
    if (AXIOS_DATA.status == 200) {
      setCurrentUser(AXIOS_DATA.data[0]);
    }
  }

  const [roles, setRoles] = useState([]);
  const ROLE_URL = "http://localhost:8080/users/userRoles";
  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON);
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
    console.log(putData);
    const AXIOS_DATA = await axios.post(url, putData);

    if (AXIOS_DATA.status == 200) {
      setOpen(false);
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
  // function handleUpload(e) {
  //   setCurrentUser({
  //     ...currentUser,
  //     imgURL: e.target.value,
  //   });
  // }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5 p-3 vstack"
    >
      <div className="border border-2 rounded-5 p-3 border-light mb-3 w-100">
        <Stack alignItems="center" gap={1}>
          <Avatar
            alt="Remy Sharp"
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/avatars/300-13.jpg"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className="avatar "
          />
          <Typography variant="h6">{currentUser.full_name}</Typography>
          <Chip
            label={currentUser.role}
            color="primary"
            size="small"
            className="chip"
          />
        </Stack>
        <Stack direction="row">
          <Typography variant="h6">Details</Typography>
          <Button
            variant="outlined"
            onClick={handleOpen}
            className="ms-auto chip rounded-3"
          >
            Edit
          </Button>
        </Stack>
        <hr className="opacity-25" />
        <Typography variant="subtitle2" className="">
          Account ID
        </Typography>
        <Typography variant="body2" className="mb-3">
          {currentUser.id}
        </Typography>
        <Typography variant="subtitle2" className="">
          Email
        </Typography>
        <Typography variant="body2" className="mb-3">
          {currentUser.email}
        </Typography>
        <Typography variant="subtitle2" className="">
          Address
        </Typography>
        <Typography variant="body2" className="mb-3">
          101 Collin Street, Melbourne 3000 VIC Australia
        </Typography>{" "}
        <Typography variant="subtitle2" className="">
          Phone Number
        </Typography>
        <Typography variant="body2" className="mb-3">
          {currentUser.phone_number}
        </Typography>
        <Typography variant="subtitle2" className="">
          Joined Date
        </Typography>
        <Typography variant="body2" className="mb-3">
          {currentUser.joined_date}
        </Typography>
      </div>
      <div className="border border-2 rounded-5 p-3 border-light mb-3 w-100">
        <Stack direction="row" alignItems="center">
          <div>
            <Typography variant="h6">User's Tasks</Typography>
            <Typography variant="body2" className="mb-3">
              Total 25 tasks in backlog
            </Typography>
          </div>
          <Button
            variant="outlined"
            type="submit"
            className="ms-auto chip rounded-3"
          >
            Add Task
          </Button>
        </Stack>
        <Stack direction="row">
          <div>
            <Typography variant="subtitle2" className="">
              Create FureStibe branding logo
            </Typography>
            <Typography variant="body2" className="mb-3">
              Due in 1 day <a href="#">Karina Clark</a>
            </Typography>
          </div>
          <i class="bi bi-toggles ms-auto me-2 text-black-50"></i>
        </Stack>
        <Stack direction="row">
          <div>
            <Typography variant="subtitle2" className="">
              Schedule a meeting with FireBear CTO John
            </Typography>
            <Typography variant="body2" className="mb-3">
              Due in 3 days <a href="#"> Rober Doe</a>
            </Typography>
          </div>
          <i class="bi bi-toggles ms-auto me-2 text-black-50"></i>
        </Stack>
        <Stack direction="row">
          <div>
            <Typography variant="subtitle2" className="">
              9 Degree Project Estimation
            </Typography>
            <Typography variant="body2" className="mb-3">
              Due in 1 week <a href="#">Neil Owen</a>
            </Typography>
          </div>
          <i class="bi bi-toggles ms-auto me-2 text-black-50"></i>
        </Stack>
        <Stack direction="row">
          <div>
            <Typography variant="subtitle2" className="">
              Dashboard UI & UX for Leafr CRM
            </Typography>
            <Typography variant="body2" className="mb-3">
              Due in 1 day <a href="#"> Olivia Wild</a>
            </Typography>
          </div>
          <i class="bi bi-toggles ms-auto me-2 text-black-50"></i>
        </Stack>
        <Stack direction="row">
          <div>
            <Typography variant="subtitle2" className="">
              Mivy App R&D, Meeting with clients
            </Typography>
            <Typography variant="body2" className="mb-3">
              Due in 2 weeks <a href="#"> Sean Bean</a>
            </Typography>
          </div>
          <i class="bi bi-toggles ms-auto me-2 text-black-50"></i>
        </Stack>
      </div>
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
      </Modal>
    </Box>
  );
}
