import { Button, Card, Col, Row} from "react-bootstrap";
import React from "react";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  return (
    <div >
      { <Row xs={1} md={5} className="g-4">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body className="text-center">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                    {`$${product.price}`}
              </Card.Text>
              <Button>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>}
    </div>
  );
};

export default Products;
