import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const url = "api/users";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Users Data</h1>
      <h3>Number of Users: {users.length}</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
