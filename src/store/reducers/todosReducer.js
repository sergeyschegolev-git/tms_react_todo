import { handleActions } from 'redux-actions';
import { setTodos, removeTodo, completeTodo, createTodo } from '../actions/todosActions';

export const todosReducer = handleActions({
  [setTodos]: (state, action) => [...action.payload],
  [removeTodo]: (state, action) => state.filter(({ key }) => key !== action.payload),
  [createTodo]: (state, action) => [action.payload, ...state],
  [completeTodo]: (state, action) => {
    const updatedTodo = state.find(({ key }) => action.payload.key === key);
    updatedTodo.isCompleted = action.payload.isCompleted;

    return [...state];
  }
}, [])