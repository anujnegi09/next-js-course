import Link from "next/link";
export default function About(){
    return (
    <>
    <h1>welcome to about page</h1>
    <Link href="/users">users</Link>{" "}
    <Link href="/">home</Link>
    </>
    
    );
}