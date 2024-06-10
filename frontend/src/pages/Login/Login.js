import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  if (user || googleuser) {
    navigate("/home");
    console.log(googleuser);
  }

  const [action, setAction] = useState("LogIn");

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
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input">
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="submit-container">
              <button
                type="button"
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
              <button
                type="submit"
                className={action === "Sign Up" ? "submit" : "submit gray"}
              >
                LogIn
              </button>
            </div>
            <div className="form-container">
              <div className="form-box">
                <h3>OR</h3>
                <div className="google-button">
                  <GoogleButton
                    className="g-btn"
                    type="light"
                    onClick={handleGoogleSignIn}
                  />
                </div>
              </div>
            </div>
          </form>

          {error && <p className="error">{error.message}</p>}
          {googleerror && <p className="error">{googleerror.message}</p>}
          {loading || googleloading ? <div>Loading...</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
