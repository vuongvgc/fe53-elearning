import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/Auth";

export const login = (values) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    axios
      .post(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        values
      )
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            error: error.response.data,
          },
        });
      });
  };
};
