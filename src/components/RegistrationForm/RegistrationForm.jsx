import './RegistrationForm.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../constants/path';
import { setUser } from '../../store/slices/user.slice';
import { setStatus } from '../../store/slices/auth.slice';
import { authStatuses } from '../../constants/authStatuses';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      setShowPopup(true);
      return;
    }
    dispatch(setUser({email}));
    dispatch(setStatus(authStatuses.loggedIn));
    navigate(PATH.index);
  };

  return (
    <div>
      <div className="reg-form">
        <div className="reg-form-name">
          <h3>Sign in</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="reg-form-el">
            <div className="reg-form-field">
              <label htmlFor="email">Email address</label>
              <input
                className="reg-form-input"
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="reg-form-field">
              <label htmlFor="password">Password</label>
              <input
                className="reg-form-input"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="reg-button" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p className="reg-error-message">{errorMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
