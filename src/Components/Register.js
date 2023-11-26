import React, { useState } from 'react';
import './styles/Register.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
function Register() {
  
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <form className='form__body'>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input className="form-control" type="text"  id="firstName" placeholder=""/>
          </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input  type="text" id="exp" className="form-control" placeholder="" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  type="password" id="exp" className="form-control"  placeholder="" />
            </div>
         
            <button  type="submit" className="btn-primary1"><Link to="/">Register</Link></button>
   
        </form>
      </div>
    </div>
  );
}

export default Register;
