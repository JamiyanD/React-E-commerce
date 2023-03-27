import { Nav, NavDropdown, NavLink } from "react-bootstrap";
import menus from "../data/categories";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
function SubMenu() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    // <DropdownButton
    //   title={
    //     <span className="fs-4">
    //       Дэлгүүр<ExpandMoreIcon></ExpandMoreIcon>
    //     </span>
    //   }
    //   className=""
    //   variant="white"
    //   show={show}
    //   onMouseEnter={showDropdown}
    //   onMouseLeave={hideDropdown}
    //   href="/product-box"
    // >
    <div className="submenu">
      <div class="dropdown">
        <a
          class=" dropdown-toggle"
          show={show}
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
          href="/product-box"
          role="button"
          aria-expanded="false"
        >
          <span>
            Дэлгүүр<ExpandMoreIcon></ExpandMoreIcon>
          </span>
        </a>

        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
    /* {menus.map((child, index) => {
        return (
          <NavDropdown.Item className="" key={index}>
            {child.title}
          </NavDropdown.Item>
        );
      })} */
    // </DropdownButton>
  );
}
export default SubMenu;
