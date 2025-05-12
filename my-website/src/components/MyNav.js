import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3" sticky="top">
      <Container>
        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Brand (centered and outside collapse) */}
        <Navbar.Brand
          className="mx-auto"
          style={{
            fontFamily: 'Reenie Beanie, cursive',
            fontSize: '1.7rem',
          }}
        >
          Alannah Bennett
        </Navbar.Brand>

        {/* Navbar collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
