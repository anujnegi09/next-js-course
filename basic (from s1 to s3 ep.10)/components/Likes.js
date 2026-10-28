"use client"
//if we make the parent = client component then we don't need to make child = client compo
//by using "use client" cause it will make children automatically client compo

import {useState} from "react";
export default function likes(){
    
    // if(typeof window !== "undefined"){
    //     console.log(window);
    // }
    console.log("like component")

    const [counter, setCounter] = useState(0)
    return (
        <>
        <div>{counter} likes</div>
        <button
        // onclick will not give error in server even if we don't use "use client"
        onClick={() =>setCounter(counter+1)}> click to like</button>
        </>
    )
}