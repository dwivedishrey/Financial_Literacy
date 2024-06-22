import React, { useEffect, useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import loginimg from '../../assets/login.jpg'
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { useGlobalContext } from "../Context/globalContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  const { users } = useGlobalContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserGlobally } = useGlobalContext(); 
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [customError, setCustomError] = useState(null); // Custom error state

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        // Fetch user_id from the backend using the uid
        const response = await fetch(`https://financial-literacy-be3z.onrender.com/getUserIdByUid/${uid}`);
        const data = await response.json();
        console.log(data);
        if (data.user_id) {
          const googleUser = {
            user_id: data.user_id,
            uid: auth.currentUser.uid,
            username: auth.currentUser.displayName,
            email: auth.currentUser.email,
          };
         
          navigate("/dashboard");
          setUserGlobally(googleUser);
        } else {
          setCustomError('User not found. Please sign up.');
        }
      }
    } catch (err) {
      console.error('Error signing in with Google:', err);
      setCustomError('An unexpected error occurred during Google sign-in.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const response = await fetch(`https://financial-literacy-be3z.onrender.com/getUserIdByUid/${uid}`);
        const data = await response.json();
        if (data.user_id) {
          const loggedInUser = {
            user_id: data.user_id,
            username: auth.currentUser.displayName || email,
            email: auth.currentUser.email,
          };
          
          navigate("/dashboard");
          setUserGlobally(loggedInUser);
        } else {
          setCustomError('User not found. Please sign up.');
        }
      }
    } catch (err) {
      console.error('Error signing in:', err);
      setCustomError('An unexpected error occurred during sign-in.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img className="image" src={loginimg} alt="loginimg" />
      </div>
      <div className="login-form-container">
        <div className="login-form-box">
          <button className="homepage-btn" onClick={() => navigate("/")}>
            <ArrowBackIcon style={{ marginRight: '5px' }} /> {/* Add the icon here */}
            Go to Homepage
          </button>
          <h1>LogIn Now </h1>
          {customError && <p style={{color:"red"}}  className="error">{customError}</p>} {/* Display custom error */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn-login">
              <button type="submit" className="login-btn">
                Log In
              </button>
            </div>
          </form>
          <hr />
          <div className="google-button">
            <GoogleButton
              className="g-btn"
              type="light"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
        <div className="signup-link">
          Don't have an account?
          <Link
            to="/signup"
            style={{
              textDecoration: 'none',
              color: 'var(--twitter-color)',
              fontWeight: '600',
              marginLeft: '5px'
            }}
          >
            Sign up
          </Link>
        </div>
       
        {loading || googleloading ? <div>Loading...</div> : null}
      </div>
    </div>
  );
};

export default Login;
