//backend ekei frontend ekek dekem run wenne me app.js file ek
import React from 'react';

import Home from './Components/Home/Home';//Home.js file eka import krnne

//App.js ekne run wenne. api kohe mona page hduwath run wenne me file eka athule ek call kloth vitri 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import User from './Components/User/User';
import UserDetails from './Components/User details/users';
import AddUser from './Components/AddUser/AddUser';
//function ekk athule tm ui ek hdnne
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login'; 
import ContactUs  from './Components/ContactUs/ContactUs';
import SendPdf from './Components/SendPdf/SendPdf';
function App() {
  return (
    <div >
     {/* <Home/>  //udin oni page ek import krn methna ekma tag ekk athule denn vitri oni */}

     {/* route me widiht denna oni page link krl. / mehema nink denne default run wenn oni path ek */}
     <React.Fragment>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/mainhome" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/adduser" element={<AddUser />} />

        {/* yata ek update user page ekt ynne. yddi id ekth arn ynne automa. specific user update krnna oni */}
        <Route path="/userdetails/:id" element={<UpdateUser />} />

        <Route path="/register" element={<Register />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/sendpdf" element={<SendPdf />} />

      </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
