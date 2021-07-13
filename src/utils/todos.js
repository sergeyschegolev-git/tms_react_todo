export const normalizeTodos = (todos) => {
  const todosArr = [];
  for (const key in todos) {
    todos.push({
      key,
      ...todos[key],
    })
  }

  return todosArr;
}