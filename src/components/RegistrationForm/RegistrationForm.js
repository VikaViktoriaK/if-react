import React, { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      setShowPopup(true);
      return;
    }
    navigate("/home-page");
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
                type="email"
                id="email"
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

export default RegistrationForm;
