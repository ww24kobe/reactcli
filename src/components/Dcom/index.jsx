import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function D() {
  return (
   
      <div>
        <nav>
          <ul>
            <li>
                {/* 相当于router-link */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/wrewerwerw">404</Link>
            </li>
            <li>
              <Link to="/users/fsdfsdfsdfs">usersfsdfsdfsdfs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* Route相当于 router-view */}
        {/* <Route path="/abc/def"  component={abc} /> */}

       
      </div>
  
  );
}

