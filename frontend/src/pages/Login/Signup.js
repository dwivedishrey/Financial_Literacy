import React, { useState } from "react";
import "./Login.css";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, createUserError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(email, password);
      const newUser = { name, email };
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      if (data.acknowledged) {
        console.log(data);
        navigate("/");
      } else {
        setError("Failed to register user.");
      }
    } catch (err) {
      setError(err.message);
      window.alert(err.message);
    }
  };

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
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.acknowledged) {
        console.log(data);
        navigate("/");
      } else {
        setError("Failed to register user.");
      }
    } catch (err) {
      setError(err.message);
      window.alert(err.message);
    }
  };

  if (createUserError) {
    console.log(createUserError.message);
  }
  if (loading) {
    console.log("loading...");
  }
  if (googleError) {
    console.log(googleError.message);
  }
  if (googleLoading) {
    console.log("loading...");
  }

  const [action, setAction] = useState("Sign Up");

  return (
    <div className="page-container">
      <div className="image-container">
        <img src="./login-image.avif" alt="Placeholder Image" />
      </div>
      <div className="login-container">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                <input
                  placeholder="Your Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="submit-container">
              <button
                type="submit"
                className={action === "Login" ? "submit gray" : "submit"}
              >
                Sign Up
              </button>
              <button
                type="button"
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
            <h3>OR</h3>
            <div className="google-button">
              <GoogleButton
                className="g-btn"
                type="light"
                onClick={handleGoogleSignIn}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
