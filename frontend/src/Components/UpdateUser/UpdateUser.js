// import React ,{useEffect,useState}from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


// function UpdateUser() {

//   //mulinma hamthissema api import krgtta tika set krn inna

//   const {id} = useParams().id; //me id ek parameter widiht enn oni userdetails page eken user click krl methenta edddi

//   const history = useNavigate();
//   const [inputs,setInputs] = useState({ });


//   //meken tm update click krm adala userge klin details tika labadenne
//   const fetchHandler = async()=>{
//     await axios.get(`http://localhost:5000/users/${id}`).then((res)=>{
//       setInputs(res.data);
//     });
//   }
//   useEffect(() => {
    
//     fetchHandler();
//   },[id]);


//   //update krnn gnn function ek
// const sendRequest = async()=>{
//   await axios.put(`http://localhost:5000/users/${id}`,{
//     name:String(inputs.name),
//     age:Number(inputs.age),
//     gmail:String(inputs.gmail),
//     address:String(inputs.address)
//   }).then((res)=>res.data);
// }


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     sendRequest().then((data)=>history('/userdetails'));
//   }

//   //meken tm input field wlt input dunnm ek blnne. mek nthnm empty value mai tynne
//   const handleChange = (e) => {
//     setInputs((prevState)=>({
//       ...prevState,
//       [e.target.name]:e.target.value
//     }));
//   }

//   return (
//     <div>
//     <div>UpdateUser</div>
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <br/>
//       {/* inputs kynne uda state ekt denw gnn input */}
//       <input type="text" name="name" onChange={handleChange} value={inputs.name} required/>
//       <br/>
//       <br/>
//       <label>age</label>
//       <br/>
//       <input type="text" name="age"onChange={handleChange} value={inputs.age}required/>
//       <br/>
//       <br/>
//       <label>gmail</label>
//       <br/>
//       <input type="gmail" name="gmail"onChange={handleChange} value={inputs.gmail} required/>
//       <br/>
//       <br/>
//       <label>address</label>
//       <br/>
//       <input type="text" name="address"onChange={handleChange} value={inputs.address}required/>
//       <br/>
//       <br/>
//       <button type="submit">Submit</button>
//       </form>


//     </div>
//   )
// }

// export default UpdateUser

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams(); // Extract user ID from URL
  const navigate = useNavigate(); // Handles navigation after update

  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    gmail: "",
    address: "",
  });

  // Fetch user details when component loads
  useEffect(() => {
    const fetchHandler = async () => {
      if (!id) return; // Ensure id exists
      console.log("Fetching user with ID:", id); // Debugging

      try {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        console.log("Fetched Data:", res.data); // Debugging
        setInputs(res.data); // Populate form fields
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchHandler();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", inputs); // Debugging

    try {
      const res = await axios.put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        age: parseInt(inputs.age, 10),
        gmail: String(inputs.gmail),
        address: String(inputs.address),
      });

      console.log("Update Response:", res.data); // Debugging
      alert("User updated successfully!");
      navigate("/userdetails"); // Navigate after update
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user. Please try again.");
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name || ""} // Ensure input is controlled
          required
        />
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={inputs.age || ""} // Ensure input is controlled
          required
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail || ""} // Ensure input is controlled
          required
        />
        <br />
        <br />
        <label>Address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address || ""} // Ensure input is controlled
          required
        />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
