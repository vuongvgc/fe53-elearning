import React, { Component } from "react";

export default class AuthLayout extends Component {
  render() {
    return (
      <div>
        <h1>AuthLayout</h1>
        {this.props.children}
      </div>
    );
  }
}
