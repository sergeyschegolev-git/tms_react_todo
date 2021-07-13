import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';
import { fetchTodos } from '../../middlewares/todos';
import { StyledTodosList } from './styled';

export const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const isDataProcessing = useSelector((state) => state.isDataProcessing);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (

    <StyledTodosList>
      <AddTodo />
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} isLoading={isDataProcessing} />
      ))}
    </StyledTodosList>
  )
}