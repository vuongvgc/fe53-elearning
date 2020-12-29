import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/Auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // Kiểm tra nếu currentUser có data => đã đăng nhập => redirect qua trang home
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    }

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
            <button
              className="btn btn-success"
              onClick={() => this.props.login(this.state)}
              disabled={this.props.loading}
            >
              Đăng Nhập
            </button>
            {this.props.error ? (
              <div className="alert alert-danger">
                <span>{this.props.error}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducer.currentUser,
    loading: state.authReducer.loading,
    error: state.authReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(login(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
