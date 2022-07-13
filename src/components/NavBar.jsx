import { NavDropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Garden N°5</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#sale">Sale</Nav.Link>
                  <Nav.Link href="#contacto">Contacto</Nav.Link>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#camisas y blusas">Camisas y Blusas</NavDropdown.Item>
                    <NavDropdown.Item href="#jeans">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#abrigos">Abrigos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#todos-los-productos">Todos los productos</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <CartWidget />
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>

    );
}
 
export default NavBar;