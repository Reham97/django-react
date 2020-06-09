import React, { useState } from 'react';
import './App.css';
import Login from './components/login/login';
import Books from './components/books/books';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <Books token={token}/>
    </div>
  );
}

export default App;