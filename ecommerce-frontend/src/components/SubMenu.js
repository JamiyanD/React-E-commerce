import { Nav, NavDropdown, NavLink } from "react-bootstrap";
import menus from "../data/menus";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
function SubMenu() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <NavDropdown
      title={
        <span>
          Дэлгүүр<ExpandMoreIcon></ExpandMoreIcon>
        </span>
      }
      className="text-black"
      id="collasible-nav-dropdown"
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      {menus.map((child, index) => {
        return (
          <NavDropdown.Item className="" key={index}>
            {child.title}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
export default SubMenu;
