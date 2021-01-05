import React, { useState, useEffect } from "react";
import Child from "./Child";
import useAPICourses from "./useAPICourses";
import useWindowResize from "./useWindowResize";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({ username: "", email: "" });

  // Sử dụng custom hook
  const [courseList] = useAPICourses();
  const [width, height] = useWindowResize();

  // lifecyle của function component
  // useEffect không có tham số thứ 2 => tương đương componentDidMount + componentDidUpdate luôn luôn chạy sau khi render
  useEffect(() => {
    console.log(courseList);
    console.log("width: ", width, "height: ", height);
  });

  // useEffect có tham số thứ 2 là 1 array rỗng => tương đương componentDidMount, chỉ chạy 1 lần sau khi render
  useEffect(() => {
    console.log("mounted");
  }, []);

  // useEffect có tham số thứ 2 là [count] => sẽ chỉ được chạy lại sau khi render và count phải thay đổi
  useEffect(() => {
    console.log("count thay đổi");
  }, [count]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    // setForm({
    //   ...form,
    //   [name]: value,
    // });

    setForm((currentForm) => {
      return {
        ...currentForm,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <br />
      <br />

      {/* <p className={isActive ? "bg-primary" : "bg-secondary"}>Hello</p> */}
      {isActive ? <Child /> : null}
      <button onClick={() => setIsActive(!isActive)}>Toggle</button>

      <br />
      <br />

      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

class HooksClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isActive: false,
    };
  }

  render() {
    return <div></div>;
  }
}
