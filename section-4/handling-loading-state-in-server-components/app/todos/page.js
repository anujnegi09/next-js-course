//  server side fetching 

export default async function todos(){
  const slowResponse = await fetch('https://procodrr.vercel.app/?sleep=4000');
  const data = slowResponse.json();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5",
     {
      cache: "force-cache",
    }
  );
  const todos = await response.json();
//   console.log(todos);
  return (
    <>
    <h1>todos</h1>
    <div className="todos-container">
        {todos.map(({id, title, completed}) => (
             <div className="todos-item" key={id}>
                <p>{title}</p>
                <div className="flex items-center gap-2">
                    <input type="checkbox" checked={completed}readOnly />
                    <p>completed</p>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}