
import { Nav, NavDropdown, NavLink } from "react-bootstrap";
const SubMenu = (props) => {
    const subMenu = 
    props.children.length > 0 ? (
        <NavDropdown title={props.title}  id="green" class="">
            {props.children.map(child => {
                return (
                    <NavDropdown.Item className=" ">
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    ) : (<NavLink  className="green">{props.title}</NavLink>)
    
    return (
        <div>
            <Nav className="">
               {subMenu}
            </Nav>
        </div>
    );
}
export default SubMenu