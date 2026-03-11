import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
}

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Пользователи не получены");
  }

  return res.json();
}

const UsersPage = async () => {

  const users = await getUsers();

  return (
    <div>
      <h2>Users Page</h2>
      {users.map((user: User) => {
        return <Link key={user.id} href={`users/${user.id}`}>Пользователь {user.id}</Link>
      })}
    </div>
  )
}

export default UsersPage