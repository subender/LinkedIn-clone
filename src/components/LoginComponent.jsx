import React, { useState } from "react";
import linkedinLogo from "../assets/linkedinLogo.png";
import { Link } from "react-router-dom";
import "../sass/LoginComponent.scss";
import { RegisterAPI } from "../API/authApi";
const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});

  const emailHandler = (e) => {
    setCredentials({ ...credentials, email: e.target.value });
  };
  const passwordHandler = (e) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-wrapper ">
        <img src={linkedinLogo} className="logo" alt="Linkedin Logo" />
        <div className="login-box">
          <div className="login-heading-box">
            <h3>Sign in</h3>
            <span>Stay updated on your professional world</span>
          </div>
          <form className="input-field-box" onSubmit={login}>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                onChange={emailHandler}
                className="common-input"
                id="email"
                placeholder="Enter yor Email"
                type="email"
                required
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                onChange={passwordHandler}
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="login-btn" type="submit">
              Sign in to Linkedin
            </button>
          </form>
          <hr className="stroke" data-content="or" />
          <p className="newto">
            New to LinkedIn?{" "}
            <Link className="newblue" to={"/signup"}>
              Join now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
