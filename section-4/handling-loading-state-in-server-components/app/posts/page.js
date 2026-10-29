"use client"

// client side fetching


import {useEffect, useState} from "react";
export default function posts(){
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    async function fetchPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPosts(data);;
    }
    fetchPosts();
  }, []);
  return (
    <>
    <h1>posts</h1>
    <div className="posts-container">
        {posts.map(({id, title, body}) => (
            <div className="post-card" key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        ))}
    </div>
    </>
  )
}


