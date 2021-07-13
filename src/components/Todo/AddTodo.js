import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../middlewares/todos';

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createTodo(newTodo));
  }

  const inputHandler = (event) => {
    setNewTodo(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onInput={inputHandler} value={newTodo} />
      <button type="submit">Add todo</button>
    </form>
  )
};