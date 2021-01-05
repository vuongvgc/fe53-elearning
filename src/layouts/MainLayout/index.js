import React, { Component } from "react";
import Header from "../../components/Header";

export default class MainLayout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}
