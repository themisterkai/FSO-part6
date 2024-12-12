import { createSlice } from '@reduxjs/toolkit';

// const filterReducer = (state = '', action) => {
//   console.log('ACTION: ', action);
//   switch (action.type) {
//     case 'SET_FILTER':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const filterChange = filter => {
//   return {
//     type: 'SET_FILTER',
//     payload: filter,
//   };
// };

const filterSlice = createSlice({
  name: 'filer',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

export default filterSlice.reducer;
