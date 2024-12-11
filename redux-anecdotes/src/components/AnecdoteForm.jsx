import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState('');
  const dispatch = useDispatch();

  const add = event => {
    event.preventDefault();
    console.log('add', newAnecdote);
    dispatch(addAnecdote(newAnecdote));
  };

  const handleAnecdoteChange = event => {
    setNewAnecdote(event.target.value);
  };

  return (
    <div>
      <h2>create new</h2>
      <form>
        <div>
          <input onChange={handleAnecdoteChange} value={newAnecdote} />
        </div>
        <button onClick={add}>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
