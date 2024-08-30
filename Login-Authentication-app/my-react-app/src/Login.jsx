import React, { useState, useEffect } from 'react';
import './App.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      onLogin(username);
      setError('');
    } else {
      setError('The value in this field of login is invalid');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className='form'>
        <div>
          <label className='label'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='username'
          />
        </div>
        <div>
          <label className='label'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='password'
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
