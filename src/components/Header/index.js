import { useSelector } from 'react-redux';
import { StyledHeader, TodosStats } from './styled';

export const Header = () => {
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter(({ isCompleted }) => isCompleted);

  return (
    <StyledHeader>
      <p>Todos application</p>
      <TodosStats>
        <div>Total: {todos.length}</div>
        <div>Completed: {completedTodos.length}</div>
      </TodosStats>
    </StyledHeader>
  )
}