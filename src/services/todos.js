export const fetchTodos = async() => {
  const response = await fetch('https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json');
  return await response.json();
}

export const removeTodo = async(key) => {
  return await fetch(
    `https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${key}.json`, {
      method: 'DELETE',
    }
  );
}

export const createTodo = async(todo) => {
  const response = await fetch(
    `https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/todos.json`, {
      method: 'POST',
      body: JSON.stringify(todo),
    }
  );

  return response.json();
}

export const updateTodo = async(todo, key) => {
  return await fetch(
    `https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/todos/${key}.json`, {
      method: 'PATCH',
      body: JSON.stringify(todo),
    }
  );
}
