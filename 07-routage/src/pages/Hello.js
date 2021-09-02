import React, { Component } from "react";
import qs from "qs";

class Hello extends Component {
  //   state = {
  //     name: "World",
  //   };

  //   componentDidMount() {
  //     if (this.props.match.params.name) {
  //       this.setState({
  //         name: this.props.match.params.name,
  //       });
  //     }
  //   }

  render() {
    return <h1>Hello {this.props.match.params.name || "World"}</h1>;
  }
}

export default Hello;
