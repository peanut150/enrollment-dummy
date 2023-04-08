import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import './styles.css';
import pic1 from'./pic1.svg';
import logo from './logo.png';
<<<<<<< HEAD
import Dashboard from '../../dashboard';
=======
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const history = useHistory();

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    if (email.trim() === '') {
      setEmailError('Email is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Provide a valid email address');
    } else {
      setEmailError('');
    }
  }

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.trim() === '') {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError !== '' || passwordError !== '') {
      return;
    }

    history.push('/dashboard');

  }

  const isValidEmail = (email) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(String(email).toLowerCase());
  }
  
  return (
    <div className="container">
        <div className="rectangle">
            <div className='header'>
                <div className='headerSchool'>
                    <img src={logo} alt="logo" className="logo"/>
                    <span>INFOTECH UNIVERSITY</span>
                </div>
                <div className='headerButton'>
                    <button className="loginButton">Login</button>
                    <button className="signupButton">Sign Up</button>
                </div>
                
            </div>
          <div className='form'>
              <div className='formHeader'>
                <h1 className="headerSignin">SIGN IN</h1>
                <p className="text">Sign in to continue to our application</p>
              </div>

              <div className='inputs'>

                <input
                  className="inputEmail"
                  id = "email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />

                {emailError !== '' && <div className='error'>{emailError}</div>}

                <input
                  className="inputPass"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                  {passwordError !== '' && <div className='error'>{passwordError}</div>}

              </div>
              
              <button className="forgotpassButton">Forgot Password ?</button>
<<<<<<< HEAD
              <button className="signinButton" onClick={event => window.location.href='../../dashboard'}>Sign In</button>
=======
              <button className="signinButton" onClick={handleSubmit}>Sign In</button>
>>>>>>> 5c76616bd4569a12c5f74b01333bbf371aff76a0
          </div>

        </div>

      <div className="rectangleRight">

          <img src={pic1} alt="pic1" className="Pic" />

      </div>
    </div>
  );
}
