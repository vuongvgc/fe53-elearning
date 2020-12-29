import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Đây là HomePage</p>
        <button onClick={() => this.props.history.push("/admin/users")}>
          Admin
        </button>
      </div>
    );
  }
}
