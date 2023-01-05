import SubMenu from "./SubMenu"
import { Nav, Stack, NavDropdown } from "react-bootstrap"
import menus from './data/menus'

function MainMenu() {
    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />
        )
    })
    return (
        <Stack className="bg-light" direction="horizontal" >
            <Nav className=""  >
                <NavDropdown title="Browse catogories" className="bg-warning mx-5 " id="colors">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                </NavDropdown>
                {subMenus}
            </Nav>
            <strong className="ms-5 color">30 days free return</strong>

        </Stack>
    )
}
export default MainMenu