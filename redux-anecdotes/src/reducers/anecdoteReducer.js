import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from '../services/anecdotes';
import anecdotes from '../services/anecdotes';

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = anecdote => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const anecdotesReducer = (state = initialState, action) => {
//   console.log('state now: ', state);
//   console.log('action', action);
//   switch (action.type) {
//     case 'VOTE': {
//       const id = action.data.id;
//       const anecdoteToChange = state.find(a => a.id === id);
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1,
//       };
//       return state
//         .map(a => (a.id === id ? changedAnecdote : a))
//         .sort((a, b) => b.votes - a.votes);
//     }
//     case 'ADD': {
//       const newAnecdote = asObject(action.data.anecdote);
//       return [...state, newAnecdote];
//     }
//     default:
//       return state;
//   }
// };

// export const voteForAnecdote = id => ({
//   type: 'VOTE',
//   data: { id },
// });

// export const addAnecdote = anecdote => ({
//   type: 'ADD',
//   data: { anecdote },
// });

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteForAnecdote(state, action) {
      return state
        .map(a => (a.id === action.payload.id ? action.payload : a))
        .sort((a, b) => b.votes - a.votes);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnedotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteForAnecdote, appendAnecdote, setAnedotes } =
  anecdoteSlice.actions;

export const getAllAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnedotes(anecdotes));
  };
};

export const addAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(anecdote);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const vote = anecdote => {
  return async dispatch => {
    const changedAnecdote = await anecdotesService.update({
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    console.log(changedAnecdote);
    dispatch(voteForAnecdote(changedAnecdote));
  };
};


export default anecdoteSlice.reducer;
