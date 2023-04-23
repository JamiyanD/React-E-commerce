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
import Modal from "@mui/material/Modal";

export default function AddRoles({ openRoles, setOpenRoles, setRoles }) {
  const [currentRoles, setCurrentRoles] = useState({
    roles_name: "",
    isEdit: false,
  });
  const URL = "https://puuzket.onrender.com/users/roles";

  async function handleSubmit(e) {
    e.preventDefault();

    const AXIOS_DATA = await axios.post(URL, currentRoles);
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.status == 200) {
      setOpenRoles(false);

      console.log(AXIOS_DATA.data.data);
      setRoles(AXIOS_DATA.data.data);
      setCurrentRoles("");
    }
  }

  function handleName(e) {
    setCurrentRoles({
      ...currentRoles,
      roles_name: e.target.value,
    });
  }

  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpenRoles(false);

  return (
    <Box>
      <Modal
        open={openRoles}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-user-modal rounded-4 p-3 ">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User Details
          </Typography>
          <Box sx={{ flexGrow: 1, p: 2 }} className="">
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{ width: "300px" }}>
                Roles
              </Typography>

              <Typography variant="subtitle2" className="mt-3">
                Name
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleName}
                value={currentRoles.roles_name}
              />

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
