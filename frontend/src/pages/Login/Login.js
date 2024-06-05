import React from 'react'
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import {Link, useNavigate} from 'react-router-dom'
import auth from '../../firebase.init';

const Login = () => {
    const navigate=useNavigate();
  const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
  const handleGoogleSignIn=()=>{
    signInWithGoogle();
  }
  if(googleuser){
    navigate('/home')
    console.log(googleuser)
  }
  if (googleerror) {
    console.log(googleerror.message);
  }
  if(googleloading){
    console.log("loading...")
  }
  return (
    <div className="login-container">
   

    <div className="form-container">
        <div className="form-box" >
            
           

           
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
                    textDecoration: 'none',
                    color: 'var(--twitter-color)',
                    fontWeight: '600',
                    marginLeft: '5px'
                }}
            >
                Sign up
            </Link>
        </div>

    </div>


</div>

  )
}

export default Login
