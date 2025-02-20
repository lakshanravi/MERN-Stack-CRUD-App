import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// me page eketh udin nav bar ek display krnn ononline. e hina tm import krgnne

//navbar ek mewgen call krnna oni
function User(props) {

  //display krrn  oni data tika mulin import krgnn. bakcend eke widiht
const navigate = useNavigate();
const deleteHandler = async () => {
  if (!_id) {
    console.error("Error: _id is undefined");
    alert("User ID is missing!");
    return;
  }

  try {
    await axios.delete(`http://localhost:5000/users/${_id}`);
    alert("User deleted successfully!");
    navigate("/userdetails"); 
  } catch (error) {
    console.error("Error deleting user:", error.response?.data || error.message);
    alert("Error deleting user: " + (error.response?.data?.message || "Unknown error"));
  }
};

  const{_id,name,gmail,age,address} = props.user ;
  return (
    <div>
      {/* sagala warahn athule daanne uda call krgttu variable tika */}
      <h1>User display</h1>
      <br />  

      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>Age:{age}</h1>
      <h1>Address:{address}</h1>

      
      <Link to={`/userdetails/${_id}`}>Update</Link>
     
      <button onClick={deleteHandler}>delete</button>

    </div>
  )
}

export default User;