import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./component/Card";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    randomUser();
  }, []);
  
  function randomUser() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setUsers(response.data.results));
  }

  return (
    <div className="App">
      <div className="card-container py-3 m-auto">
        {users.map((user, index) => (
          <Card user={user} key={index} />
        ))}
        <div className="card-btn">
          <button onClick={randomUser} className="btn btn-outline-success">
            Random User
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;