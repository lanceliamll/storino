import React, { Component } from "react";
import Meta from "./Meta";
import Navigation from "./Navigation";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
