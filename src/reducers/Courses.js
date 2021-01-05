import {
  GET_COURSE_LIST_REQUEST,
  GET_COURSE_LIST_SUCCESS,
  GET_COURSE_LIST_FAIL,
} from "../constants/Courses";

const initialState = {
  courseList: [],
  loading: false,
  error: null,
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_COURSE_LIST_SUCCESS: {
      return { ...state, loading: false, courseList: action.payload.data };
    }
    case GET_COURSE_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default coursesReducer;
