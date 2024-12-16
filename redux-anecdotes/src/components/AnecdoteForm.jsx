import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { displayNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState('');
  const dispatch = useDispatch();

  const add = async event => {
    event.preventDefault();
    dispatch(addAnecdote(newAnecdote));
    dispatch(
      displayNotification({
        content: `you added a new anecdode: '${newAnecdote}'`,
        timeout: 5,
      })
    );
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
