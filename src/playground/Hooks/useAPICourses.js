import React, { useState, useEffect } from "react";
import axios from "axios";

// Custom hook, Gọi API lấy danh sách khoá học
export default function useAPICourses() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      )
      .then((result) => {
        setCourseList(result.data);
      });
  }, []);

  return [courseList];
}

// const [courseList] = useAPICourses()
