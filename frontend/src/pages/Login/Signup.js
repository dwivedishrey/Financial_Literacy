import React, { useState } from "react";
import "./Login.css";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/globalContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setUserGlobally } = useGlobalContext(); // Get the function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
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
      const newUser = { username, email, password };
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      
      console.log(data)

      if (data.acknowledged) {
        console.log(data.insertedId);
        setUserGlobally(data.insertedId ); // Set user globally
        navigate("/dashboard");
      } else {
        setError("Failed to register user.");
      }
    } catch (err) {
      setError(err.message);
      window.alert(err.message);
    }
  };

  return (
    <div className="page-container">
      <div className="image-container">
        <img src="./login-image.avif" alt="Placeholder Image" />
      </div>
      <div className="login-container">
        <div className="container">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                <input
                  placeholder="Your Name"
                  type="text"
                  value={username}
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
              <button type="submit" className="submit">
                Sign Up
              </button>
              <button
                type="button"
                className="submit"
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
                onClick={signInWithGoogle}
              />
            </div>
          </form>
          {error && <p className="error">{error}</p>}
          {createUserError && <p className="error">{createUserError.message}</p>}
          {loading && <div>Loading...</div>}
          {googleError && <p className="error">{googleError.message}</p>}
          {googleLoading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
