import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import loginimg from '../../assets/business-concept-with-graphic-holography.jpg'
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { useGlobalContext } from "../Context/globalContext";

const Login = () => {
  const {users}=useGlobalContext()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserGlobally  } = useGlobalContext(); 
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
        if (auth.currentUser) {
          const googleUser = {
            user_id:auth.currentUser.user_id,
            uid: auth.currentUser.uid,
            username: auth.currentUser.displayName,
            email: auth.currentUser.email,
          };
          setUserGlobally(googleUser);
          navigate("/dashboard");
        }
      } catch (err) {
        console.error('Error signing in with Google:', err);
      }
    };
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(email, password);
        if (auth.currentUser) {
          
          const loggedInUser = {
            user_id: users.user_id,
            username: auth.currentUser.displayName || email,
            email: auth.currentUser.email,
          };
          setUserGlobally(loggedInUser);
          navigate("/dashboard");
        }
      } catch (err) {
        console.error('Error signing in:', err);
      }
    };
  
  if (user || googleuser) {
    console.log(user)
    const userId =user.id
    console.log('Setting user globally:', userId);
    
    
    navigate("/dashboard");
    console.log(googleuser);
  }
  

  return (
    <div className="login-container">
    <div className="login-image-container">
        <img className=" image" src={loginimg} alt="loginimg" />
    </div>

    <div className="login-form-container">
        <div className="login-form-box" >
            <h1>LogIn Now </h1>
           

            {error && <p>{error.message}</p>}
            <form onSubmit={handleSubmit}>

                <input
                    type="email" className="email"
                    placeholder="Email address"
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                />



                <input className="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <div className="btn-login">
                    <button type="submit" className="login-btn" >Log In</button>
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
        {error && <p className="error">{error.message}</p>}
          {googleerror && <p className="error">{googleerror.message}</p>}
          {loading || googleloading ? <div>Loading...</div> : null}


    </div>


</div>
  );
};

export default Login;
