import React from "react";
import { useState } from "react";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      const user = {
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        emailVerified: auth.currentUser.emailVerified,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            navigate("/home");
          }
        });
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

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
        <div className="">
          <hr />
          <div className="google-button">
            <GoogleButton
              className="g-btn"
              type="light"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div>
            Already have an account?
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "var(--twitter-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
