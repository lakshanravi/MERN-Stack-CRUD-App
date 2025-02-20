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
        <li className="home-">
          <Link to="/contactus" className="active home-a">
            {" "}
            <h1>Contact Us</h1>
          </Link>
        </li>
        <li className="home-">
          <Link to="/sendpdf" className="active home-a">
            {" "}
            <h1>Send PDF</h1>
          </Link>
        </li>

        <li className="home-">
          <Link to="/register" className="active home-a">
            {" "}
            <button>Register</button>
          </Link>
        </li>

        <li className="home-">
          <Link to="/login" className="active home-a">
            {" "}
            <button>Login</button>
          </Link>
        </li>

        
       
      </ul>
    </div>
  );
}

export default Nav;
