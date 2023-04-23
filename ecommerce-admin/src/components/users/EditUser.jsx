import TextField from "@mui/material/TextField";
import * as React from "react";
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
import FormHelperText from "@mui/joy/FormHelperText";
import EdirUserModal from "./EditUserModal";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const url = "https://puuzket.onrender.com/users/users";
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axiosProduct();
  }, []);
  async function axiosProduct() {
    const AXIOS_DATA = await axios.put(url, { userId: id });
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.status == 200) {
      setCurrentUser(AXIOS_DATA.data.data);
    }
  }

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
            src={currentUser.filepath}
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
      <EdirUserModal
        open={open}
        setOpen={setOpen}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Stack direction="row" spacing={2}>
        <Button
          href={"/usersList"}
          variant="contained"
          className="color-blue rounded-3"
        >
          Save Changes
        </Button>
        <Button
          href={"/usersList"}
          variant="contained"
          className="bg-light text-muted rounded-3"
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
