import React, { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';
import Homepage from './Homepage';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleSignUp = (username, password) => {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert('User with this username already exists');
    } else {
      const newUsers = [...users, { username, password }];
      setUsers(newUsers);
      localStorage.setItem('users', JSON.stringify(newUsers));
      setIsSignUp(false);
    }
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Homepage onLogout={handleLogout} />
      ) : (
        <>
          {isSignUp ? (
            <SignUp onSignUp={handleSignUp} />
          ) : (
            <Login users={users} onLogin={handleLogin} />
          )}
          <div className='Hello'>
            <button onClick={() => setIsSignUp(!isSignUp)} className='button'>
              {isSignUp ? 'Go to Login' : 'Go to Sign Up'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
