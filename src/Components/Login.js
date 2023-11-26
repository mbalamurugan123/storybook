import React, { useState } from 'react';
import './styles/Login.css';
import { Link } from "react-router-dom";

function Login() {
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-control"  />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <Link to="/">
          <button type="submit" className=" btn-primary1">Login</button>
          </Link>
            
        </form>
        <p className="register-link1" id='reg-link'><Link to="/Register">Create an Account</Link> </p>
        <p className="register-link2"><Link to="/Register">Forget Password?</Link> </p>
      </div>
    </div>
  );
}

export default Login;