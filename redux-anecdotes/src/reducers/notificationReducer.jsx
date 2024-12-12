import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      console.log('set Notification, ', action);
      return action.payload;
    },
    hideNotification(state, action) {
      return '';
    },
  },
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
