import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1020,
        }}
      >
        <Container>
          <Navbar.Brand href="#home">PK Group</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <HeroSection />
    </>
  );
};

export default Header;
