
import { Nav, NavDropdown, NavLink } from "react-bootstrap";
const SubMenu = (props) => {
    const subMenu = 
    props.children.length > 0 ? (
        <NavDropdown title={props.title} id="color">
            {props.children.map(child => {
                return (
                    <NavDropdown.Item>
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    ) : (<NavLink id="color">{props.title}</NavLink>)
    
    return (
        <div>
            <Nav className="">
               {subMenu}
            </Nav>
        </div>
    );
}
export default SubMenu