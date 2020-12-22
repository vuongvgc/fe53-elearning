import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <div className="form-group">
              <label htmlFor="taiKhoan">Tài Khoản</label>
              <input
                type="text"
                className="form-control"
                id="taiKhoan"
                name="taiKhoan"
                value={this.state.taiKhoan}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="matKhau">Mật Khẩu</label>
              <input
                type="password"
                className="form-control"
                id="matKhau"
                name="matKhau"
                value={this.state.matKhau}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-success">Đăng Nhập</button>
          </div>
        </div>
      </div>
    );
  }
}
