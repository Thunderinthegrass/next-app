import Link from "next/link";

async function getTodos(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);

  if (!res.ok) {
    throw new Error("Плейлисты не найдены");
  }

  return res.json();
}

async function getUser(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) {
    throw new Error("Не удалось найти пользователя");
  }

  return res.json();
}


const todosPage = async ({params} : {params: Promise<{userId: string}>}) => {

  const { userId } = await params;

  const [user, todos] = await Promise.all([
    getUser(userId),
    getTodos(userId)
  ])


  return (
    <div>
      <h2>Страница дел пользователя </h2>
      {todos.map(todo => {
        return (<Link key={todo.id} href={`/users/${userId}/todos/${todo.id}`}>{todo.id} дело <br/></Link>)
      })}
    </div>
  )
}

export default todosPage;