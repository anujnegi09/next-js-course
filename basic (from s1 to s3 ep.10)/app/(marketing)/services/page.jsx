import Link from "next/link";
import {cookies} from "next/headers";

// 1rst way to make static page to dynamic page
// export const dynamic = "force-dynamic";  // by default its "auto" also have other values

export default async function services({searchParams}){

    //2nd way to make static page to dynamic page
    // const search = await searchParams;
    // console.log(search);

    //3rd way to make static page to dynamic page
    // const myCookies = await cookies();
    // console.log(myCookies);

    console.log("Running services")
    return(
        <>
        <h1>All services</h1>
        <Link href="/services/web-dev">web development</Link>{"  "}
        <Link href="/services/app-dev">app development</Link>{"  "}
        </>
    )
}