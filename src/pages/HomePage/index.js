import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from "../../actions/Courses";

export default function HomePage() {
  const { courseList, loading, error } = useSelector(
    (state) => state.coursesReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseList());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {courseList.map((item) => {
          return (
            <div key={item.maKhoaHoc} className="col-sm-4">
              <div className="card">
                <img
                  src={item.hinhAnh}
                  alt="course"
                  className="card-image-top"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">{item.tenKhoaHoc}</h4>
                <p className="card-text">{item.moTa}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
