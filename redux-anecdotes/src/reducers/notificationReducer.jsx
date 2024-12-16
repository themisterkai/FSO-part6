import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    hideNotification(state, action) {
      return '';
    },
  },
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export const displayNotification = ({ content, timeout }) => {
  return async dispatch => {
    dispatch(setNotification(content));
    setTimeout(() => {
      dispatch(hideNotification());
    }, timeout * 1000); // timeout in ms
  };
};

export default notificationSlice.reducer;
