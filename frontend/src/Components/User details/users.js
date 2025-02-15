//

import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";

// pdf handling
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/users";

// Axios fetch handler
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => {
      setUsers(data.users);
      console.log(data.users); // Debug: check the data
    });
  }, []);

  // Create ref for the content to be printed
  const contentRef = useRef();

  // Handle print functionality
  const handlePrint = useReactToPrint({
    content: () => contentRef.current, // Pass the reference to the printable content
    DocumentTitle: "User Details",
    onafterprint: () => alert("Printed successfully!"),
  });

  //search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });

    //search krnn puluwn wenn search bar ekk em hdnnn dan
  };

  //whatsapp msg sensd kirima
  //send krn details wlt adala function ek'
  const handleSendReport = () => {
    //create the whatsapp chat url
    const phoneNumber = "+94711031449";
    const message = `selected User Reports`
    const whatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;


    //open whtsapp caht in new window
    window.open(whatsAppUrl,"_blank");
  }

  return (
    <div>
      <Nav />
      <div>
        <h1>User details display page</h1>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {/* dan user detail search ekt addalw filter wenn hadima */}
        {noResults ? (
          <div>
            <p>no users found</p>
          </div>
        ) : (
          <div>
            {/* Ensure users are rendered properly */}
            {users && users.length > 0 ? (
              users.map((user, i) => (
                <div key={i}>
                  <User user={user} />
                </div>
              ))
            ) : (
              <p>No users available.</p> // Message if no users to show
            )}
          </div>
        )}
      </div>

      {/* print krn ek weda nh. pdf hdn ek */}
      <div ref={contentRef}>
        <h1>Hi me yy</h1>
        <h2>Hi me yy</h2>
      </div>

      <button onClick={handlePrint}>Download Report</button>

      <br />
      <br />
      <button onClick={handleSendReport}>Send whatsapp Message</button>
    </div>
  );
}

export default Users;
