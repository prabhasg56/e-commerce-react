import { Button, Card, Col, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";
import "./Products.css";

const Products = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCart = (product, index) => {
    cartCtx._currentValue.addItem({ ...product, quantity: 1, index: index });
  };

  return (
    <div>
      <h2 className="text-center mt-4 fw-bold">MUSIC</h2>

      {
        <Row xs={1} md={5} className="mt-2 g-4">
          {cartCtx._currentValue.totalProducts.map((product, idx) => (
            <Col key={idx}>
              <Card onClick={()=>props.showHeroSection(false)}>
                <NavLink to={`/product-details/${product.id}`} >
                  <Card.Img variant="top" src={product.imageUrl} className="img"/>
                </NavLink>
                <Card.Body className="text-center">
                  <NavLink style={{textDecoration:'none', color:'black'}} to={`/product-details/${product.id}`}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{`$${product.price}`}</Card.Text>
                  </NavLink>
                  <Button onClick={() => addToCart(product, idx)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      }
    </div>
  );
};

export default Products;
