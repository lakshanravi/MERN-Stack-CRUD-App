import React from 'react'
import { Link } from 'react-router-dom';


// me page eketh udin nav bar ek display krnn ononline. e hina tm import krgnne

//navbar ek mewgen call krnna oni
function User(props) {

  //display krrn  oni data tika mulin import krgnn. bakcend eke widiht

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
     
      <button>delete</button>

    </div>
  )
}

export default User;