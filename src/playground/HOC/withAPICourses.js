import React from "react";
import axios from "axios";

// withAPICourses(CourseList): tham số nhận vào là 1 component

// HOC: function nhận vào 1 component và return về 1 component mới
export default function withAPICourses(Component) {
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        courseList: [],
      };
    }

    componentDidMount() {
      axios
        .get(
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        )
        .then((result) => {
          this.setState({ courseList: result.data });
        });
    }

    render() {
      return <Component courseList={this.state.courseList} />;
    }
  }

  return WrapperComponent;
}
