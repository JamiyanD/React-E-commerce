import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/joy/Stack";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import toast, { Toaster } from "react-hot-toast";
import Container from "@mui/material/Container";
import UsersTableHead from "./UsersTableHead";
import UsersTableToolbar from "./UsersTableToolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from "@mui/material/Pagination";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

export default function UsersList() {
  const URL = "https://puuzket.onrender.com/users/users";
  const [users, setUsers] = useState([]);

  async function axiosScreen() {
    const AXIOS_DATA = await axios.get(URL);
    console.log(AXIOS_DATA.data);
    setUsers(AXIOS_DATA.data);
    return AXIOS_DATA;
  }

  useEffect(() => {
    axiosScreen();
  }, []);

  async function handleDelete(userId) {
    console.log(userId);
    const data = {
      userId: userId,
    };
    const AXIOS_DATA = await axios.delete(URL, { data });
    setUsers(AXIOS_DATA.data.data);
    setSelected([]);
  }

  // menu
  const [openElem, setOpenElem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (parametr) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenElem(parametr);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenElem(null);
  };

  const [selected, setSelected] = React.useState([]);

  const handleCheckbox = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // pagination
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };
  const handleChangeRowsPerPage = (event) => {
    setSelectValue(event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // order
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("subtitle");
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (Number(b[orderBy]) < Number(a[orderBy])) {
      return -1;
    }
    if (Number(b[orderBy]) > Number(a[orderBy])) {
      return 1;
    }
    return 0;
  }
  const [selectValue, setSelectValue] = useState(5);

  return (
    <Box sx={{ backgroundColor: "white" }} className="rounded-5 p-3">
      <Box sx={{ flexGrow: 1, p: 2 }} className="border border-1 rounded-5">
        <Box>
          <UsersTableToolbar
            numSelected={selected.length}
            handleDelete={handleDelete}
            selected={selected}
            setUsers={setUsers}
            axiosScreen={axiosScreen}
          />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <UsersTableHead
                setSelected={setSelected}
                users={users}
                selected={selected}
                order={order}
                setOrder={setOrder}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
              <TableBody>
                {stableSort(users, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((parametr, index) => (
                    <TableRow
                      hover
                      role="checkbox"
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      tabIndex={-1}
                      key={index}
                      // selected={isSelected(parametr.id)}
                    >
                      <TableCell sx={{ padding: 0 }}>
                        <Checkbox
                          onClick={(event) =>
                            handleCheckbox(event, parametr._id)
                          }
                          color="primary"
                          checked={isSelected(parametr._id)}
                        />
                      </TableCell>

                      <TableCell className="d-flex align-items-center gap-3 fw-bold">
                        <img
                          src={parametr.filepath}
                          alt=""
                          style={{ width: "70px", height: "70px" }}
                          className="rounded-circle"
                        />
                        {parametr.full_name}
                      </TableCell>
                      <TableCell className="products-tablecell-text">
                        {parametr.email}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={parametr.role}
                          color="primary"
                          size="small"
                          className="chip"
                        />
                      </TableCell>

                      <TableCell
                        component="th"
                        scope="row"
                        className="products-tablecell-text"
                      >
                        {parametr.phone_number}
                      </TableCell>
                      <TableCell className="products-tablecell-text">
                        {parametr.joined_date}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-haspopup="true"
                          onClick={handleMenuClick(parametr._id)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={openElem === parametr._id}
                          onClose={handleClose}
                          PaperProps={{}}
                        >
                          <MenuItem
                            component={Link}
                            to={`/user/edit/${parametr._id}`}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleDelete(parametr._id);
                              handleClose();
                            }}
                          >
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction="row" className="py-3">
            <FormControl
              size="small"
              className="bg-light rounded-3 "
              sx={{ width: "70px", height: "35px" }}
            >
              <Select
                value={selectValue}
                className="rounded-3 "
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
                  height: "35px",
                }}
                onChange={handleChangeRowsPerPage}
                inputProps={{ "aria-label": "Without label" }}
                displayEmpty
                IconComponent={(props) => (
                  <ExpandMoreIcon className=" text-black-50" {...props} />
                )}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
            </FormControl>
            <Pagination
              count={Math.ceil(users.length / 5)}
              onChange={handleChangePage}
              page={page + 1}
              size="medium"
              className="ms-auto blue-color"
              shape="rounded"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
