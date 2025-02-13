import React,{useState} from 'react'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function AddUser() {

  // meka arn inna
  const history =useNavigate();
  //dan dataset ek methnta cll krnn
  const[inputs,setInputs]=useState({
    name:'',
    age:'',
    gmail:'',
    address:''
  });
// me hadana wena wena function okkoma return ekt udin tm handleChange. return ekt daaane display wen tika

//mokkhri changes ekk klm input wl cll wen oni function ek
  const handleChange = (e) => {
   setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
   }));
  }

  //dan submit krn ek
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // submit klt psu navigate wenn oni koi page ektd kyl yt
    //sendrequest function ekth wenm hdnn yt cl krn ek
    sendRequest().then((data)=>history('/userdetails'))
  }

  //send krn function ek
  const sendRequest = async() => {
    await axios.post('http://localhost:5000/users',{
      name:String(inputs.name),
      age:Number(inputs.age), 
      gmail:String(inputs.gmail),
      address:String(inputs.address)

    }).then((res)=>res.data);
  }





  return (

    
    <div>
      <Nav/>
    <div>AddUser</div>

    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br/>
      {/* inputs kynne uda state ekt denw gnn input */}
      <input type="text" name="name" onChange={handleChange} value={inputs.name} required/>
      <br/>
      <br/>
      <label>age</label>
      <br/>
      <input type="text" name="age"onChange={handleChange} value={inputs.age}required/>
      <br/>
      <br/>
      <label>gmail</label>
      <br/>
      <input type="gmail" name="gmail"onChange={handleChange} value={inputs.gmail} required/>
      <br/>
      <br/>
      <label>address</label>
      <br/>
      <input type="text" name="address"onChange={handleChange} value={inputs.address}required/>
      <br/>
      <br/>
      <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default AddUser