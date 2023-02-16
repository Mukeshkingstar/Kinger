import React from 'react'
import  { useEffect, useState } from 'react'
import { getDocs,collection } from 'firebase/firestore'
import {db} from "../Firebase"
const Home = () => {
  const [postList,setPostList] = useState([])
  const PostCollection = collection(db,"Post")
  useEffect(()=>{
    const getPost = async ()=>{
        const data = await getDocs(PostCollection)
       setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        
    };
    getPost();
})
  return (
   
<>
<>
  
    {postList.map((post)=>{
        return <> <center>
        <div className="show-post">
        <div className="user">
        <img src={post.author.url} height={50}/><h4>{post.author.name}</h4>
        </div>
            <p>{post.post}</p>
            
        </div>
        </center>  
        </> 
    })}
    
    </>
</>
  )
}

export default Home