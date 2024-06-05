import React from 'react'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
const Home = () => {
    const user=useAuthState(auth)
    const handleLogout=()=>{
        signOut(auth)
       }
  return (
    <div>
      <h1>hello</h1>
      <div>
               <button onClick={handleLogout}>Logout</button>
            </div>
    </div>
  )
}

export default Home
