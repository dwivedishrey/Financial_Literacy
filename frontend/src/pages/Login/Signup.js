import React, { useEffect, useState } from "react";
import "./Login.css";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/globalContext";
import signupimg from '../../assets/login.jpg'
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { setUserGlobally } = useGlobalContext(); // Get the function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, createUserError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser,googleloading, googleerror] =
    useSignInWithGoogle(auth);
    useEffect(() => {
      setEmail("");
      setPassword("");
      setName("");
      setError("");
    }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!username) {
      setError("Username is required.");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(email, password);
      const newUser = { username, email, password, uid: auth.currentUser.uid };
      console.log(newUser)
      const response = await fetch(`https://financial-literacy-be3z.onrender.com/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();

    

      if (data.acknowledged) {
        const user = {
          user_id: data.insertedId,
          username,
          email
        };
        
       

        navigate("/dashboard");
        setUserGlobally(user);
      } else {
        setError("User already exists");
      }
    } catch (err) {
      setError(err.message);
      
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
        firebaseUid: auth.currentUser.uid,
      };
      
      const response = await fetch(`https://financial-literacy-be3z.onrender.com/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (data.acknowledged) {
        const user = {
          user_id: data.insertedId,
          username: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid
        };
        
        navigate("/dashboard");
        setUserGlobally(user);
      
        
      } else {
        setError("User already exists");
      }
    } catch (err) {
      setError(err.message);
      
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img className="image" src={signupimg} alt="signupImage" />
      </div>

      <div className="login-form-container">
        <div className="">
          <div className="d-flex align-items-sm-center">
            <h3 className="heading1"> Signup </h3>
            {error && <p style={{color:"red"}} className="error">{error}</p>}
            {googleerror && <p style={{color:"red"}} className="error">{googleerror}</p>}
          </div>

        
          
          <form onSubmit={handleSubmit}>
            <input
              className="display-name"
              type="username"
              placeholder="@username "
              value={username}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="email"
              type="email"
              value={email}
              placeholder="Email address"
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
              <button type="submit" className="login-btn">Sign Up</button>
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
          <div className="signup-link">
            Already have an account?
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: 'var(--twitter-color)',
                fontWeight: '600',
                marginLeft: '5px'
              }}
            >
              Log In
            </Link>
          </div>
        
          {loading || googleloading ? <div>Loading...</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;
