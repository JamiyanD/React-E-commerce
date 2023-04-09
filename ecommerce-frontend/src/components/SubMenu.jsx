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
    <div className="submenu">
      <div class="dropdown ">
        <a
          class=" dropdown-toggle p-2 dark-blue pink-hover"
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
        <div className="dropdown-menu p-5 dropdown-menu-end ">
          <div className="d-flex container gap-5">
            <div class=" login-dropdown d-flex flex-column gap-2 ">
              <h5 className="dark-blue">Жордан</h5>
              <a class="text-secondary" href="#">
                Action
              </a>
              <a class="text-secondary" href="#">
                Another action
              </a>
              <a class="text-secondary" href="#">
                Something else here
              </a>
            </div>
            <div class="login-dropdown d-flex flex-column gap-2 ">
              <h5 className="dark-blue">Чөлөөт загвар</h5>

              <a class="text-secondary" href="#">
                Action
              </a>

              <a class="text-secondary" href="#">
                Another action
              </a>

              <a class="text-secondary" href="#">
                Something else here
              </a>
            </div>
            <div class="login-dropdown d-flex flex-column gap-2 ">
              <h5 className="dark-blue">Уулын гутал</h5>

              <a class="text-secondary" href="#">
                Action
              </a>

              <a class="text-secondary" href="#">
                Another action
              </a>

              <a class="text-secondary" href="#">
                Something else here
              </a>
            </div>
            <div class="login-dropdown d-flex flex-column gap-2  ">
              <h5 className="dark-blue">Сагсан бөмбөг</h5>

              <a class="text-secondary" href="#">
                Action
              </a>

              <a class="text-secondary" href="#">
                Another action
              </a>

              <a class="text-secondary" href="#">
                Something else here
              </a>
            </div>
            <div class="login-dropdown d-flex flex-column gap-2 ">
              <h5 className="dark-blue">Гүйлтийн гутал</h5>

              <a class="text-secondary" href="#">
                Action
              </a>

              <a class="text-secondary" href="#">
                Another action
              </a>

              <a class="text-secondary" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
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
