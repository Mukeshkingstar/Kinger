import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import "./Firebase"
import { NavLink } from 'react-router-dom'
import Post from './components/Post'
import  "./Firebase"
const App = () => {
  const [isAuth,setIsAuth] = useState(false) 
  // logout User in react

 
  return (

    <>
    <BrowserRouter>
    <div className="nav">
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/4015/4015248.png" height={50} /> <h2> Kinger</h2>
      </div>
      <div className="join">
        {
          !isAuth ? (<NavLink to='/login'><button>Join Now</button></NavLink>):
          (<NavLink to='/post'><button>Post</button></NavLink>) 
        }
      </div>
    </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Post" element={<Post/>}/>
        <Route path="login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App