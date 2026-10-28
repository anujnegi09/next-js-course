export default async function comments(){
    // this is for stream in next 
     await new Promise((resolve)=> setTimeout(resolve, 5000));
    return (
        <h3>3 comments</h3>
    )
}