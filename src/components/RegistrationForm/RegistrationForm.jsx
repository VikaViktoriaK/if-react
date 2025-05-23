import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authStatuses } from '../../constants/authStatuses';
import { PATH } from '../../constants/path';
import { setStatus } from '../../store/slices/auth.slice';
import { setUser } from '../../store/slices/user.slice';

import { useRegistrationFormStyles } from './RegistrationForm.styless';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = useRegistrationFormStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      setShowPopup(true);
      return;
    }
    dispatch(setUser({ email }));
    dispatch(setStatus(authStatuses.loggedIn));
    navigate(PATH.index);
  };

  return (
    <div>
      <div className={classes.regForm}>
        <div className={classes.regFormName}>
          <h3>Sign in</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.regFormEl}>
            <div className={classes.regFormField}>
              <label htmlFor="email">Email address</label>
              <input
                className={classes.regFormInput}
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.regFormField}>
              <label htmlFor="password">Password</label>
              <input
                className={classes.regFormInput}
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className={classes.regButton} type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        {showPopup && (
          <div>
            <div>
              <p className={classes.regErrorMessage}>{errorMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
