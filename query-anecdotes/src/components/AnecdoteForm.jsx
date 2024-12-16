import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addAnecdote } from '../requests';
import { useNotificationDispatch } from '../NotificationContext';

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();

  const newAnecdoteMutation = useMutation({
    mutationFn: addAnecdote,
    onMutate: ({ content }) => {
      if (content.length < 5) {
        throw new Error('anecdote must be at least 5 characters long');
      }
    },
    onError: ({ message }) => {
      dispatch({
        type: 'DISPLAY',
        message,
      });
    },
    onSuccess: anecdote => {
      dispatch({
        type: 'DISPLAY',
        message: `you added anecdote: ${anecdote.content}`,
      });
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(['anecdotes'], [...anecdotes, anecdote]);
    },
  });

  const onCreate = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    console.log('new anecdote');
    newAnecdoteMutation.mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
