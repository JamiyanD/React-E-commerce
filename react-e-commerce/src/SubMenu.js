import React from "react"
import { Nav, NavDropdown, NavLink } from "react-bootstrap";
const SubMenu = (props) => {

    // const subMenu = 
    // props.children.length > 0 ? (
    //     <NavDropdown title={props.title}>
    //         {props.children.map(child => {
    //             return (
    //                 <NavDropdown.Item>
    //                     {child.title}
    //                 </NavDropdown.Item>
    //             )
    //         })}
    //     </NavDropdown>
    // ) : (<NavLink>{props.title}</NavLink>)
    
    return (
        <div>
            <Nav className="">
               
            <NavDropdown title={props.title} id="nav-dropdown">
                    <NavDropdown.Item >Action</NavDropdown.Item>
                    <NavDropdown.Item >Another action</NavDropdown.Item>
                    {/* <NavDropdown.Item >Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >Separated link</NavDropdown.Item> */}
                </NavDropdown>
                {/* <NavDropdown title="Home" id="nav-dropdown">
                    <NavDropdown.Item >Action</NavDropdown.Item>
                    <NavDropdown.Item >Another action</NavDropdown.Item>
                    <NavDropdown.Item >Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Catalog" id="nav-dropdown">
                    <NavDropdown.Item >Action</NavDropdown.Item>
                    <NavDropdown.Item >Another action</NavDropdown.Item>
                    <NavDropdown.Item >Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link >
                       Blog
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Pages" id="nav-dropdown">
                    <NavDropdown.Item >Action</NavDropdown.Item>
                    <NavDropdown.Item >Another action</NavDropdown.Item>
                    <NavDropdown.Item >Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link >
                      About us
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-auto">30 Days Free Return</Nav.Item> */}
            </Nav>
        </div>
    );
}
export default SubMenu