"use client"
import {usePathname} from "next/navigation";
export default function idnotfound(){
    const pathname = usePathname();
    console.log(pathname);
    return(
        <div>
            <h1>user page not-found!</h1>
        </div>
    )
}