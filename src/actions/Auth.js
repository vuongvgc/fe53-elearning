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
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            error: error.data.message,
          },
        });
      });
  };
};
