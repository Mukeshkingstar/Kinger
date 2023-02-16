import React, { useState } from 'react'
import {addDoc,collection} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import {db} from "../Firebase"
import {getAuth,signOut} from "firebase/auth"
const Post = () => {
  const [post ,setPost] = useState("")
  const PostCollection = collection(db,"Post")
  const auth = getAuth();
  const navigate = useNavigate();
  const CreatePost = async () =>{
    await addDoc(PostCollection,{post,author : {name:auth.currentUser.displayName,id:auth.currentUser.uid}})
   navigate("/")
     };
       // logout User in react
  const UserOut = () =>{
  signOut(auth).then(()=>{
   localStorage.clear();
   window.location.pathname="/"
  })
  }
  return (
    <> <center>
    <div className="post-write">
    <h1>Create A Post</h1>
     <input type="post" placeholder='What is your Mind' onChange={(event)=>{setPost(event.target.value)}}/> <br/>
     <button onClick={CreatePost}>Post</button>

    </div>
    <div className="logout">
    <button onClick={UserOut}>Log Out</button>
    </div>
    </center>
    </>
  )
}

export default Post