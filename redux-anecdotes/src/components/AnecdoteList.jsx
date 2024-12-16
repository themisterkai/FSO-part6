import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { displayNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) =>
    anecdotes.filter(a => a.content.includes(filter))
  );

  const dispatch = useDispatch();

  const voteForAnecdote = anecdote => {
    dispatch(vote(anecdote));
    dispatch(
      displayNotification({
        content: `you voted '${anecdote.content}'`,
        timeout: 5,
      })
    );
  };

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteForAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
