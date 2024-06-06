import React from "react";

import { useState } from "react";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  if (googleuser) {
    navigate("/home");
    console.log(googleuser);
  }
  if (googleerror) {
    console.log(googleerror.message);
  }
  if (googleloading) {
    console.log("loading...");
  }

  const [action, setAction] = useState("Sign Up");
  return (
    <div className="login-container">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input placeholder="Your Name" type="text" />
            </div>
          )}

          <div className="input">
            <input type="email" placeholder="Your Email"></input>
          </div>

          <div className="input">
            <input type="password" placeholder="Your Password"></input>
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forget-password">
            Forgot Password?
            <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("SignUp");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="form-box">
          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              type="light"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
        <div>
          Don't have an account?
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "var(--twitter-color)",
              fontWeight: "600",
              marginLeft: "5px",
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
