export function generateStaticParams(){
    return(
        [
          {postid: '1'},
          {postid: '2'},  
          {postid: '3'},
        ]
    )
}

export default async function posts({params}){
    const paramsobj = await params;
    const {postid} = paramsobj;
    console.log(postid);

    
    return(
        <>
        <h1>post {postid}</h1>

        </>
    )
}