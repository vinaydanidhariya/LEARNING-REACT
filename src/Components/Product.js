import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Prodcts: [] };
  }
  componentDidMount() {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => this.setState({ Prodcts: data }));
  }
  // {
  //   "id": 2,
  //   "title": "Classic Red Pullover Hoodie",
  //   "price": 10,
  //   "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
  //   "images": [
  //     "https://i.imgur.com/1twoaDy.jpeg",
  //     "https://i.imgur.com/FDwQgLy.jpeg",
  //     "https://i.imgur.com/kg1ZhhH.jpeg"
  //   ],
  //   "creationAt": "2024-03-02T17:12:25.000Z",
  //   "updatedAt": "2024-03-02T17:12:25.000Z",
  //   "category": {
  //     "id": 1,
  //     "name": "Clothes",
  //     "image": "https://i.imgur.com/QkIa5t;T.jpeg",
  //     "creationAt": "2024-03-02T17:12:25.000Z",
  //     "updatedAt": "2024-03-02T17:12:25.000Z"
  //   }
  // }
render() {
    return (
        <Container>
            <h1>Product</h1>
            <Row>
                {this.state.Prodcts.map((product, index) => {
                    return (
                        <Col md={4} key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.images[0]} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Button variant="primary" as={Link} to={`/product/${product.id}`}>
                                        View Details
                                    </Button>
                                    <Button variant="secondary" as={Link} to="#">
                                        Add To Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                );
                })}
            </Row>
        </Container>
    );
}
}

export default Product;
