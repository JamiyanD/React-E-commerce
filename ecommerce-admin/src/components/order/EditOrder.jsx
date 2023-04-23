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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";

export default function EditOrder({
  openOrderEdit,
  setOpenOrderEdit,
  currentOrder,
  setCurrentOrder,
  setUsers,
  setStatusValue,
  statusValue,
}) {
  const STATUS_URL = "https://puuzket.onrender.com/order/status";
  const URL = "https://puuzket.onrender.com/order";
  const [orderStatus, setOrderStatus] = useState("");
  const navigate = useNavigate();
  console.log(currentOrder.order_status_name);

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      _id: currentOrder._id,
      name: currentOrder.name,
      order_quantity: currentOrder.order_quantity,
      price: currentOrder.price,
      order_status_name: currentOrder.order_status_name,
      isEdit: true,
    };
    const AXIOS_DATA = await axios.post(URL, putData);
    if (AXIOS_DATA.status == 200) {
      const AXIOS_DATA = await axios.get(URL);
      if (AXIOS_DATA.status == 200) {
        // setOpenOrderEdit(false);
        setCurrentOrder("");
        window.location.reload();
        // setUsers(AXIOS_DATA.data);
      }
    }
  }

  async function axiosOrderStatus() {
    const AXIOS_DATA = await axios.get(STATUS_URL);
    setOrderStatus(AXIOS_DATA.data);
    console.log(AXIOS_DATA.data);
  }
  useEffect(() => {
    axiosOrderStatus();
  }, []);

  function handleName(e) {
    setCurrentOrder({
      ...currentOrder,
      name: e.target.value,
    });
  }
  function handleQuantity(e) {
    setCurrentOrder({
      ...currentOrder,
      order_quantity: e.target.value,
    });
  }
  function handlePrice(e) {
    setCurrentOrder({
      ...currentOrder,
      price: e.target.value,
    });
  }

  async function handleChange(e) {
    setStatusValue(e.target.value);
    setCurrentOrder({
      ...currentOrder,
      order_status_name: e.target.value,
    });
  }

  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpenOrderEdit(false);

  return (
    <Box>
      <Modal
        open={openOrderEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-order-modal rounded-4 p-3 ">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Order
          </Typography>
          <Box sx={{ flexGrow: 1, p: 2 }} className="">
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{ width: "300px" }}>
                Order
              </Typography>

              <Typography variant="subtitle2" className="mt-3">
                Name
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleName}
                value={currentOrder.name}
              />

              <Typography variant="subtitle2" className="mt-3">
                Quantity
              </Typography>
              <input
                type=""
                name="quantity"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleQuantity}
                value={currentOrder.order_quantity}
              />
              <Typography variant="subtitle2" className="mt-3">
                Price
              </Typography>
              <input
                type=""
                name="price"
                className="form-control bg-light border-0 add-user-input"
                onChange={handlePrice}
                value={currentOrder.price}
              />
              <Typography variant="subtitle2" className="mt-3">
                Status
              </Typography>
              <FormControl
                sx={{
                  minWidth: 140,
                }}
                size="small"
                className="bg-light rounded-3"
              >
                <Select
                  value={statusValue}
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
                  {orderStatus &&
                    orderStatus.map((e, index) => {
                      return (
                        <MenuItem key={index} value={e.order_status_name}>
                          {e.order_status_name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>

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
