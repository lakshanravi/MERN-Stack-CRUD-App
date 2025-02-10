import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-"> 
          
          {/* app.js eke me link krn path tika denna oni */}

          <Link to="/mainhome" className="active home-a">
            {" "}
            <h1>home</h1>
          </Link>
        </li>

        <li className="home-">
          <Link to="/adduser" className="active home-a">
            {" "}
            <h1>Add user</h1>
          </Link>
        </li>
        <li className="home-">
          <Link to="/userdetails" className="active home-a">
            {" "}
            <h1>user details</h1>
          </Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Nav;
