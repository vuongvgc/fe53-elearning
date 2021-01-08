import React, { useState, useMemo } from "react";

export default function DemoUseMemo() {
  // Ví dụ 1:
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // // phép tính double luôn bị tính lại mỗi khi component bị render lại
  // const double = count1 * 2;

  // // Muốn phép tính double chỉ đc tính lại khi count1 thay đổi => dùng useMemo
  // const doubleMemo = useMemo(() => {
  //   return count1 * 2;
  // }, [count1]);

  // return (
  //   <div>
  //     <h3>Count 1: {count1}</h3>
  //     <h3>Double count 1: {double}</h3>
  //     <button onClick={() => setCount1(count1 + 1)}>Cộng count 1</button>

  //     <br />
  //     <br />

  //     <h3>Count 2: {count2}</h3>
  //     <button onClick={() => setCount2(count2 + 1)}>Cộng count 2</button>
  //   </div>
  // );

  // Ví dụ 2:
  const [userList, setUserList] = useState([
    { username: "Nguyen", age: 27 },
    { username: "Khai", age: 29 },
    { username: "Dan", age: 25 },
  ]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState({});

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  // const userListNew = userList.filter((item) => {
  //   return item.username.indexOf(search) !== -1;
  // });

  // userListNew chỉ đc tính lại khi search hoặc userList thay đổi
  const userListNew = useMemo(() => {
    console.log("Tính toán lại userList");
    return userList.filter((item) => {
      return item.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }, [userList, search]);

  return (
    <div className="container">
      <div>
        Search:
        <input type="text" className="form-control" onChange={handleSearch} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userListNew.map((item) => {
            return (
              <tr>
                <td>{item.username}</td>
                <td>{item.age}</td>
                <td>
                  <button className="btn btn-success">Select user</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
