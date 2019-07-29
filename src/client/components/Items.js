import gql from "graphql-tag";
import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";

const GET_ALL_ITEMS = gql`
  query GET_ALL_ITEMS {
    items {
      id
      title
      description
      image
      price
      largeImage
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <div>
        <Query query={GET_ALL_ITEMS}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Fragment className="container">
                {data.items.map(item => (
                  <Row>
                    <Col>
                      <Item item={item} key={item.id} />
                    </Col>
                  </Row>
                ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Items;
