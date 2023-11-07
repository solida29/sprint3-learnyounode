/* 

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/
type Salida = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function collectBody(): Promise<Salida> {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(resp);
  const salida = (await resp.json()) as Salida;
  return salida;
}

collectBody().then((data) => console.log(data.completed));
