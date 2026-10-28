import Link from "next/link";

export default async function posts({params}){
    const {id} = await params;
    return(
        <>
        <h1>all posts</h1>
        <Link href={`/users/${id}/posts/1`}>post 1</Link>{"  "}
        <Link href={`/users/${id}/posts/2`}>post 2</Link>{"  "}
        <Link href={`/users/${id}/posts/3`}>post 3</Link>{"  "}
        </>
    )
}