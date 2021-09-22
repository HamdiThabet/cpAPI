import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import { useEffect, useState } from 'react';
import axios from 'axios'

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
        <UserList list={list} />


      </header>
    </div>
  );
}

export default App;
