import {notFound} from "next/navigation";
import Link from "next/link"
export default async function id({params}){
    const {id} = await params;
    if(!/^\d+$/.test(id)){  //not found page if after users/ we have char in id
        notFound();
    }
    return(
        <>
        <h1>hello {id}</h1>
        <Link href={`/users/${id}/posts/`}>view all posts</Link>

        </>
    )
}