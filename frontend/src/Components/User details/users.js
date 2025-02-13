// useState: Manages the state (stores user data).
// useEffect: Runs code when the component is loaded (fetches data).
// axios: Makes HTTP requests to fetch user data.
// Nav: Imports a navigation bar.

import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios'; 
import User from '../User/User';



//user data display krnn oni arn backend eken arn. url ek import krgnn

const URL = 'http://localhost:5000/users';

//dan data tika aragamu

//Axios is a JavaScript library used to make HTTP requests. It is commonly used in React and Node.js to interact with APIs.

// URL: Stores the backend API endpoint where user data is fetched from.
// fetchHandler(): A function that makes an API call using axios.get() and returns the data.
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function users() {

  // retuen ekt klin me code tika ghnn
  //set krgmu userslwa

//   useState(): Creates a state variable users to store fetched data.
// useEffect(): Calls fetchHandler() only once when the component loads ([] dependency array).
// setUsers(data): Updates the users state with the fetched data.
  const [users,setUsers] =useState();
  useEffect(() => { 
    fetchHandler().then((data) => 
      setUsers(data.users));
    },[]);
  

  return (
    <div>
      <Nav/>
      <h1>User details display page</h1>
      <div>
        {/* DB eke tyne data tika display krnNA KYL TYNNE USER KYN FILE EKE.. User/User.js ek import krl tynne . ek tm methna display wenne */}
        {users && users.map((user,i) => (
          <div key={i}>
            <User user={user} />  

      </div>
      ))}
    </div>
    </div>

  )
}

export default users