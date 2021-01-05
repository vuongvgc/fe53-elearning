import React from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  console.log("Header", history, location, params);
  return (
    <div className="w-100 d-flex justify-content-between">
      <div>Elearning</div>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
