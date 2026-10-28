import Link from "next/link";
export default function users() {
    return(
        <>
        <h1> this is users page</h1>
        <Link href="/">home</Link>{"  "}
        <Link href="/about">about</Link>
       
        </>
    )
}