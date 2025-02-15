import React from 'react'
import Nav from '../Nav/Nav'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {

  const navigate = useNavigate();
  const [user,setUser] = useState({
   
    gmail:'',
    password:''
  });
  const handleInputChange = (e) => {  
    const {name,value} = e.target;
    setUser((prevUser)=>({...prevUser,[name]:value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = 
    sendRequest().then(()=>{
      alert('User Logged In Successfully');
      navigate('/userdetails');    
  }).catch((err)=>{
    alert(err.message);
  });
};

  const sendRequest = async () => {
    await axios.post('http://localhost:5000/users/login',{
      gmail:user.gmail,
      password:user.password
    })
    .then((res)=>res.data);
  };

   
  return (
    <div> 


    <Nav/>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br/>
      {/* inputs kynne uda state ekt denw gnn input */}
      <input type="text" name="name" onChange={handleInputChange} value={user.name} required/>
      <br/>
      <br/>
      <label>Gmail</label>
      <br/>
      <input type="gmail" name="gmail"onChange={handleInputChange} value={user.gmail} required/>
      <br/>
      <br/>
      <label>Password</label>
      <br/>
      <input type="password" name="password"onChange={handleInputChange} value={user.password}required/>
      <br/>
      <br/>
      <button >Login</button>
      </form>

    </div> 
  )
}

export default Login;