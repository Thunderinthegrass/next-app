// import React from 'react'

// const TodoItem = async ({params} : {params: Promise<{userId: string, todoId: string}>}) => {

//   const {userId, todoId} = await params;

//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}/${userId}`);
//   const todo = response.json();

//   return (
//     <div>
//       <h2>Дело номер {todoId}</h2>
//           {todo.id}
//     </div>
//   )
// }

// export default TodoItem

import React from 'react'
import Link from "next/link";

const TodoItem = async ({params} : {params: Promise<{userId: string, todoId: string}>}) => {
  const {userId, todoId} = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  
  if (!response.ok) {
    throw new Error(`Не удалось загрузить дело ${todoId}`);
  }
  
  const todo = await response.json();

  // Проверяем, принадлежит ли дело текущему пользователю
  if (todo.userId.toString() !== userId) {
    return (
      <div>
        <h2>Ошибка</h2>
        <p>Дело с id {todoId} не принадлежит пользователю {userId}</p>
        <Link href={`/users/${userId}/todos`}>Вернуться к списку дел</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Дело номер {todoId}</h2>
      <p>ID дела: {todo.id}</p>
      <p>Заголовок: {todo.title}</p>
      <p>Статус: {todo.completed ? 'Выполнено' : 'В процессе'}</p>
      <p>ID пользователя: {todo.userId}</p>
      <Link href={`/users/${userId}/todos`}>Назад к списку дел</Link>
      
    </div>
  )
}

export default TodoItem