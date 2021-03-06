import React from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";

import "./home.css";

const Home = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  return (
    <div id="home-page">
      <h1>HOME</h1>
      <h2>3 Ways to Navigate using React Router</h2>
      <ul>
        <li>
          <a type="button" href="/todoList">
            Navigate with a anchor tag
          </a>
        </li>
        <li>
          <Link to="/todoList">Using Link</Link>
        </li>
        <li>
          <button onClick={() => history.push("/todoList")}>
            Go to TodoList via Button!
          </button>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Home);
