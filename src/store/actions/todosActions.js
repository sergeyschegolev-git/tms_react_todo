import { createAction } from 'redux-actions';

const prefix = 'todo:';

export const completeTodo = createAction(`${prefix}complete`);
export const createTodo = createAction(`${prefix}create`);
export const removeTodo = createAction(`${prefix}remove`);
export const setTodos = createAction(`${prefix}set`);
