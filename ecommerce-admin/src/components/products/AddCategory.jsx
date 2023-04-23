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

export default function AddCategory({
  openAddCategory,
  setOpenAddCategory,
  setUsers,
}) {
  const [currentCategory, setCurrentCategory] = useState({
    category_name: "",
    isEdit: false,
  });
  const URL = "https://puuzket.onrender.com/products/category";

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
        <Box className="add-order-modal rounded-4 p-3 ">
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
