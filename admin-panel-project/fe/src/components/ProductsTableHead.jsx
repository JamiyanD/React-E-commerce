import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
const headCells = [
  {
    label: "PRODUCT",
    numeric: false,
    disablePadding: false,
    id: "name",
  },
  {
    label: "SKU",
    numeric: false,
    disablePadding: false,
    id: "code",
  },
  {
    label: "QTY",
    numeric: false,
    disablePadding: false,
    id: "quantity",
  },
  {
    label: "PRICE",
    numeric: false,
    disablePadding: false,
    id: "price",
  },
  {
    label: "RATING",
    numeric: false,
    disablePadding: false,
    id: "rating",
  },
  {
    label: "STATUS",
    numeric: false,
    disablePadding: false,
    id: "status",
  },
  {
    label: "Action",
    numeric: false,
    disablePadding: false,
    id: "action",
  },
];

export default function EnhancedTableHead(props) {
  const { setSelected, users, selected, setOrderBy, orderBy, order, setOrder } =
    props;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ padding: 0 }}>
          <Checkbox
            indeterminate={
              selected.length > 0 && selected.length < users.length
            }
            checked={users.length > 0 && selected.length === users.length}
            onChange={handleSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
