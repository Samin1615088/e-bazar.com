import React from "react";
import products from "./../products";
import Rating from "./../components/Rating";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductScreen = () => {
  const params = useParams();

  const product = products.find((p) => p._id === params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to={"/"}>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt="" fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>{`Price: $${product.price}`}</ListGroup.Item>
            <ListGroup.Item>{`Description: ${product.description}`}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{`$${product.price}`}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <Button
                className="btn-block m-3"
                type="button"
                disabled={product.countInStock === 0}
              >
                ADD TO CART
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
