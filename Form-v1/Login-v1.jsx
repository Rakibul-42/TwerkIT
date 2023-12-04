import React, { useState } from "react";
import logo from './assets/logo.svg';
import './App.css';
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${email} ${password}`);
  };

  return (
    <div className="container">
      <img src={logo} alt="nigger600react" />
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputContainer">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            type="text"
          />
        </div>
        <div className="inputContainer">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="bottomForm">
          <button type="submit">Login</button>
          <div className="links">
          <p className="new-user">New User?</p>
          <p>Forgot Password</p>
          </div>

        </div>
      </form>
      <small className="copyright">&copy; Free Slaves</small>
    </div>
  );
}

export default App;
