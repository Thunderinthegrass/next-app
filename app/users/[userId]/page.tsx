import Link from "next/link";

async function getUser(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) {
    throw new Error("Пользователя получить не получилось");
  }

  return res.json();
}


const UserPage = async ({params}: {params: Promise<{userId: string}>}) => {

  const {userId} = await params;

  const user = await getUser(userId);

  return (
    <div>
      <h2>Страница пользователя {userId}</h2>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>

      <Link href={`/users/${userId}/todos`}>Дела пользователя {user.name}</Link>
    </div>
  )
}

export default UserPage;