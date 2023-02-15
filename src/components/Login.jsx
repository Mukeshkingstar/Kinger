import React from 'react'
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
  const Login = ({setIsAuth}) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
     const navigate = useNavigate();
     const loginWithGoogle = () =>{
   signInWithPopup(auth,provider).then((result)=>{
     localStorage.setItem("isAuth",true)
     setIsAuth(true)
     navigate("/")
   
   })}
  return (
    <>
   <center>
   <div className="login-box">
      <h2>Join Toaday</h2>
      <p>Sign in one of the provider</p>
      <button onClick={loginWithGoogle}>Log in With Google</button>
    </div>
   </center>
    </>
  )
}

export default Login