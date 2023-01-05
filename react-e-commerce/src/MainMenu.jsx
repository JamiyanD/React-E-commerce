import SubMenu from "./SubMenu"
import {Nav} from "react-bootstrap"
import menus from './data/menus'
import NavDropdown from 'react-bootstrap/NavDropdown';
function MainMenu() {

    const subMenus = menus.map(subMenu =>{
        return(
            <SubMenu 
            title={subMenu.title} 
            position={subMenu.position} 
            children={subMenu.children}
            />
        )
    })
    return (
        <div>

            <Nav bg="light" expand="lg" >
                {subMenus}
            </Nav>

        </div>
    )
}
export default MainMenu