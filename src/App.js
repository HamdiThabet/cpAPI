import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import { useEffect, useState } from 'react';
import axios from 'axios'
import faker from 'faker'

function App() {
  const [list, setlist] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setlist(response.data))
      .catch(err => setError(err))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1> listOfUSer </h1>
        {list && list.map(user => <div >
          <img className=" imgss" src={faker.image.avatar()}></img>
          {user.name}
          <br />
          {user.phone}
          <br />
          {user.email}
          <br />
          {user.address.city}

        </div>)}
      </header>
    </div>
  );
}

export default App;
