import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TodoItem } from './styled';
import { removeTodo, completeTodo } from '../../middlewares/todos';

export const Todo = ({ todo: { isCompleted, label, key }, isLoading }) => {
  const dispatch = useDispatch();

  const completeHandler = useCallback((event) => {
    dispatch(completeTodo(key, event.target.checked));
  }, [dispatch, key]);

  const removeHandler = useCallback(() => {
    dispatch(removeTodo(key))
  }, [dispatch, key]);

  return (
    <TodoItem isCompleted={isCompleted}>
      <div>
        <input disabled={isLoading} onChange={completeHandler} type="checkbox" checked={isCompleted} />
        <p>{label}</p>
      </div>
      <button disabled={isLoading} onClick={removeHandler}>Remove</button>
    </TodoItem>
  )
}