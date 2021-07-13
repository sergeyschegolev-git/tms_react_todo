import { v4 } from 'uuid';
import {
  removeTodo as removeTodoAction,
  setTodos,
  completeTodo as completeTodoAction,
  createTodo as createTodoAction,
} from '../store/actions/todosActions';
import { toggleDataProcessing } from '../store/actions/dataProcessingActions';
import {
  fetchTodos as fetchTodosService,
  removeTodo as removeTodoService,
  createTodo as createTodoService,
  updateTodo as updateTodoService,
} from '../services/todos';
import { normalizeTodos } from '../utils/todos';

export const fetchTodos = () => async(dispatch) => {
  const body = await fetchTodosService();

  return dispatch(setTodos(normalizeTodos(body)));
}

export const removeTodo = (key) => async(dispatch) => {
  dispatch(toggleDataProcessing(true));
  await removeTodoService(key);
  dispatch(removeTodoAction(key));
  dispatch(toggleDataProcessing(false))
}

export const createTodo = (todo) => async(dispatch) => {
  dispatch(toggleDataProcessing(true));
  const newTodo = {
    id: v4(),
    isCompleted: false,
    label: todo,
  }
  const { name } = await createTodoService(newTodo);
  dispatch(createTodoAction({
    ...newTodo,
    key: name,
  }))
  dispatch(toggleDataProcessing(false));
}

export const completeTodo = (key, isCompleted) => async(dispatch, getState) => {
  const updatedTodo = getState().todos.find((todo) => todo.key === key);

  dispatch(toggleDataProcessing(true));
  await updateTodoService({
    ...updatedTodo,
    key: undefined,
    isCompleted,
  }, key);
  dispatch(completeTodoAction({
    isCompleted,
    key
  }))
  dispatch(toggleDataProcessing(false));
}
