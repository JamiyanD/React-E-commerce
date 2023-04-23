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
import Modal from "@mui/material/Modal";

export default function EditRoles({
  openRolesEdit,
  setOpenRolesEdit,
  currentRoles,
  setCurrentRoles,
  setRoles,
}) {
  const URL = "https://puuzket.onrender.com/users/roles";

  console.log(currentRoles);
  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      _id: currentRoles._id,
      roles_name: currentRoles.roles_name,
      isEdit: true,
    };
    const AXIOS_DATA = await axios.post(URL, putData);
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.status == 200) {
      const AXIOS_DATA = await axios.get(URL);
      console.log(AXIOS_DATA.data.data);
      if (AXIOS_DATA.status == 200) {
        setOpenRolesEdit(false);
        setCurrentRoles("");
        setRoles(AXIOS_DATA.data.data);
      }
    }
  }

  function handleName(e) {
    setCurrentRoles({
      ...currentRoles,
      roles_name: e.target.value,
    });
  }

  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpenRolesEdit(false);

  return (
    <Box>
      <Modal
        open={openRolesEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-order-modal rounded-4 p-3 ">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Roles
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
