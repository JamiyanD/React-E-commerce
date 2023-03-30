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
import Modal from "@mui/material/Modal";
import { ModalContext } from "../context/new-user-context";
export default function AddCategory({
  openAddCategory,
  setOpenAddCategory,
  setUsers,
}) {
  const [currentCategory, setCurrentCategory] = useState({
    category_name: "",
    isEdit: false,
  });
  const URL = "http://localhost:8080/products/category";

  async function handleSubmit(e) {
    e.preventDefault();
    const AXIOS_DATA = await axios.post(URL, currentCategory);
    if (AXIOS_DATA.status == 200) {
      setOpenAddCategory(false);
      setUsers(AXIOS_DATA.data.data);
      setCurrentCategory("");
    }
  }

  function handleName(e) {
    setCurrentCategory({
      ...currentCategory,
      category_name: e.target.value,
    });
  }

  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpenAddCategory(false);

  return (
    <Box>
      <Modal
        open={openAddCategory}
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
                Categories
              </Typography>

              <Typography variant="subtitle2" className="mt-3">
                Name
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleName}
                value={currentCategory.category_name}
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
