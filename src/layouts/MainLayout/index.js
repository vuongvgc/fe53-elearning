import React, { Component } from "react";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1>MainLayout</h1>
        {this.props.children}
      </div>
    );
  }
}
