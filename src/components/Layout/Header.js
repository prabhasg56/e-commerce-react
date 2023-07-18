import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { useContext } from "react";
import { NavLink, useNavigate} from "react-router-dom";

import CartContext from "../../store/cart-context";
import './Header.css';

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const navigate = useNavigate();

  const removeToken = () => {
    cartCtx._currentValue.logout();
    navigate('/');
  };
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
          {/* <Navbar.Brand href="/">PK Group</Navbar.Brand> */}

          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" className="nav-componets">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              {cartCtx._currentValue.isLoggedIn && <NavLink to="/store" className="nav-componets">Store</NavLink>}
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" className="nav-componets">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contactUs" className="nav-componets">Contact US</NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            {cartCtx._currentValue.isLoggedIn && <Button
              variant="light"
              style={{ fontWeight: "bold" }}
              onClick={() => props.showModalHandler(true)}
            >{`Cart ${cartCtx._currentValue.items.length}`}</Button>}
          </Nav>
          <Nav>
          <Nav.Link >
              {!cartCtx._currentValue.isLoggedIn && <NavLink to="/login" className="nav-componets text-primary fw-bold">Login</NavLink>}
            </Nav.Link>
            <Nav.Link >
              {cartCtx._currentValue.isLoggedIn && <NavLink to="/logout" className="nav-componets text-danger fw-bold" onClick={() => removeToken()}>Logout</NavLink>}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
