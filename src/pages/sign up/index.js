import React, { useState } from 'react';

import './signup.css';
import pic2 from'./pic2.svg';
import logo4 from './logo4.png';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm Password is required');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError !== '' || passwordError !== '' || confirmPasswordError !== '') {
      return;
    }

    // perform login here with email and password
    console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
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
                    <img src={logo4} alt="logo4" className="logo4"/>
                    <span>INFOTECH UNIVERSITY</span>
                </div>
                <div className='headerButton'>
                    <button className="loginButtonSignup">Login</button>
                    <button className="signupButtonSignup">Sign Up</button>
                </div>
                
            </div>
          <div className='form' onSubmit={handleSubmit}>
              <div className='formHeader'>
                <h1 className="headerSignin">SIGN UP</h1>
                <p className="text">Sign up to continue to our application</p>
              </div>
              <div className='inputs'>

                <input
                  className="inputEmail"
                  id="email"
                  name='email'
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />

                {emailError !== '' && <div className='error'>{emailError}</div>}

                <input
                  className="inputPass"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                {passwordError !== '' && <div className='error'>{passwordError}</div>}

                <input
                  className="inputConfirmPass"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />

                {confirmPasswordError !== '' && <div className='error'>{confirmPasswordError}</div>}

              </div>
              
              <button className="signinButton" type="submit">Create Account</button>

          </div>

        </div>

      <div className="rectangleRight">

          <img src={pic2} alt="pic2" className="pic2" />

      </div>
    </div>
  );
}
