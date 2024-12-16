import axios from 'axios';
import anecdotes from '../../redux-anecdotes/src/services/anecdotes';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addAnecdote = async anecdote => {
  const response = await axios.post(baseUrl, anecdote);
  return response.data;
};

export const updateAnecdote = async anecdote => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote);
  return response.data;
};
