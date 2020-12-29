import React, { Component } from "react";
import withAPICourses from "./withAPICourses";

class CourseListA extends Component {
  render() {
    console.log("CourseListA", this.props);
    return <div></div>;
  }
}

export const CourseList1 = withAPICourses(CourseListA);

class CourseListB extends Component {
  render() {
    console.log("CourseListB", this.props);
    return <div></div>;
  }
}

export const CourseList2 = withAPICourses(CourseListB);
