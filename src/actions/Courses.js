import {
  GET_COURSE_LIST_REQUEST,
  GET_COURSE_LIST_SUCCESS,
  GET_COURSE_LIST_FAIL,
} from "../constants/Courses";

import axios from "axios";

export const getCourseList = () => {
  return (dispatch) => {
    dispatch({ type: GET_COURSE_LIST_REQUEST });
    axios
      .get(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      )
      .then((result) => {
        dispatch({
          type: GET_COURSE_LIST_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_COURSE_LIST_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
