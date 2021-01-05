import React, { useEffect } from "react";

export default function Child() {
  useEffect(() => {
    console.log("Child mounted");

    // Tương đương componentWillUnmount, chạy trước khi component bị huỷ
    return () => {
      console.log("Child unmounted");
    };
  }, []);

  return <div>Child Component</div>;
}
