export default async function filepath({params}){
    const {filepath} = await params;
    return(
        <>
        <h1>file path after files2/ === <i>{filepath?.join("/")}</i></h1>
        <h3>Optional Catch-All Route</h3>
        <p> ([[...slug]]): An optional catch-all route is used when you want to match zero or more dynamic URL segments. For example, app/docs/[[...slug]]/page.js can match /docs, /docs/react, /docs/react/hooks, and /docs/react/hooks/use-state. For /docs/react/hooks, params.slug will be ["react", "hooks"], while for /docs, params.slug will be undefined.
       </p>
        </>
        
    )
}