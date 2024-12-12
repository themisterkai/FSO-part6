import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../reducers/notificationReducer';
import { useEffect } from 'react';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);
  const isVisible = notification !== '';

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 5000); // Automatically hide after 5 seconds
      return () => clearTimeout(timer); // Clean up timer on component unmount
    }
  }, [isVisible, dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return isVisible && <div style={style}>{notification}</div>;
};

export default Notification;
