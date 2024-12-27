import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="custom-navbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#">
            AT DIGITAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-link" href="#services">
                SERVICES
              </Nav.Link>
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <Nav.Link href="#contact">CONTACT US</Nav.Link>
              <Nav.Link href="#careers">CAREERS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
