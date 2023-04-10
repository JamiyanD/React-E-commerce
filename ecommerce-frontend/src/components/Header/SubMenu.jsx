import { Nav, NavDropdown, NavLink } from "react-bootstrap";
import menus from "../../data/categories";
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
          class=" dropdown-toggle py-4 dark-blue pink-hover"
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
            <div class=" login-dropdown d-flex flex-column gap-2 mx-5">
              <h5 className="dark-blue">Ангилал</h5>
              <a class="text-secondary" href="#">
                Классик
              </a>
              <a class="text-secondary" href="#">
                Чөлөөт пүүз
              </a>
              <a class="text-secondary" href="#">
                Спорт кет
              </a>
              <a class="text-secondary" href="#">
                Сагсны пүүз
              </a>
              <a class="text-secondary" href="#">
                Кет
              </a>
            </div>
            <div class="login-dropdown d-flex flex-column gap-2 ">
              <h5 className="dark-blue">Брэнд</h5>

              <a class="text-secondary" href="#">
                Nike
              </a>

              <a class="text-secondary" href="#">
                Adidas
              </a>
              <a class="text-secondary" href="#">
                Jordan
              </a>
              <a class="text-secondary" href="#">
                Converse
              </a>
              <a class="text-secondary" href="#">
                Under Armour
              </a>
            </div>
            <img
              style={{ width: 330, height: "200px" }}
              className="ms-auto"
              alt=""
              src="https://cdn.shopify.com/s/files/1/0593/6850/5511/files/JAYA_x_240x240.png?v=1667232437"
            ></img>
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
