import { Button, Nav, Navbar, Container} from "react-bootstrap";

import { useState } from 'react';
import HeroSection from "./HeroSection";
import Cart from "../Cart/Cart";

const Header = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);


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
          <Nav>
            <Button variant="light"  style={{fontWeight:'bold'}} onClick={()=>handleShow()}>{`Cart ${0}`}</Button>
          </Nav>
        </Container>
        <Cart showCartItems = {show}/>
      </Navbar>
      <HeroSection />
    </>
  );
};

export default Header;
