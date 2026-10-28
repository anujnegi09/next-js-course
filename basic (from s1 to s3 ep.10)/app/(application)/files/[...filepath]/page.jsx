export default async function filepath({params}){
    const {filepath} = await params;
    return(
        <>
        <h1>file path after files/ === <i>{filepath.join("/")}</i></h1>
        <h3>Required Catch-All Route</h3>
        <p>([...slug]): A required catch-all route is used when you want to match one or more dynamic URL segments. For example, app/docs/[...slug]/page.js can match /docs/react, /docs/react/hooks, and /docs/react/hooks/use-state, but it cannot match /docs because at least one segment after /docs is required. For /docs/react/hooks, params.slug will be ["react", "hooks"]</p>
        </>
    )
}