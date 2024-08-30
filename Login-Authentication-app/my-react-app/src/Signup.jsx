import React, { useState } from 'react';
import './App.css'
const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    onSignUp(username, password);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className='form'>
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
        <div>
          <label className='label'>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='password'
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='button'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
