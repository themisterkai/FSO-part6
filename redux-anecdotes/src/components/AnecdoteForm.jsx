import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import anecdotesService from '../services/anecdotes';

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState('');
  const dispatch = useDispatch();

  const add = async event => {
    event.preventDefault();
    const addedAnecdote = await anecdotesService.createNew(newAnecdote);
    console.log(addedAnecdote);
    dispatch(addAnecdote(addedAnecdote));
    dispatch(setNotification(`you added a new anecdode: '${addedAnecdote}'`));
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
