import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const {
      item: { id, title, description, price, image, largeImage }
    } = this.props;
    return (
      <>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Button variant="primary" href={`/${id}`}>
              View
            </Button>
            <Button variant="primary" href={`/update/${id}`}>
              Edit
            </Button>
            <Button variant="primary" href={`/${id}`}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
