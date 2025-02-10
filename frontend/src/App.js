//backend ekei frontend ekek dekem run wenne me app.js file ek
import React from 'react';

import Home from './Components/Home/Home';//Home.js file eka import krnne

//App.js ekne run wenne. api kohe mona page hduwath run wenne me file eka athule ek call kloth vitri 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Components/Add User/user';
import UserDetails from './Components/User details/users';

//function ekk athule tm ui ek hdnne

function App() {
  return (
    <div >
     <Home/>{/*   //udin oni page ek import krn methna ekma tag ekk athule denn vitri oni */}

     {/* route me widiht denna oni page link krl. / mehema nink denne default run wenn oni path ek */}
     <React.Fragment>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/mainhome" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/userdetails" element={<UserDetails />} />

      </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
