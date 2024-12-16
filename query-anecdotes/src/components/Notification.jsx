import { useContext } from 'react';
import NotificationContext, {
  useNotificationValue,
} from '../NotificationContext';
import { useEffect } from 'react';

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'HIDE' });
    }, 5000);
    return () => clearTimeout(timer);
  }, [notification, dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (notification === '') return null;

  return <div style={style}>{notification}</div>;
};

export default Notification;
