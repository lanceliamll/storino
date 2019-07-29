import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
// import { Mutation } from "react-apollo"
// import gql from "graphql-tag"

class CreateItem extends Component {
  state = {
    title: "NIce",
    description: "large",
    price: 12,
    image: "",
    largeImage: ""
  };

  onChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { title, description, price } = this.state;
    return (
      <div className="container">
        <h1>Sell an Item</h1>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description"
              name="description"
              value={description}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CreateItem;
