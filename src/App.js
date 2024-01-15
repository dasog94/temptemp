import React, {useState} from 'react';
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";


function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userInput) => {
      setUsers((prevState) => {
          return [...prevState, userInput]
      });
  }

    return (
        <div>
            <AddUser addUserHandler={addUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
