import { createContext, useReducer, useContext } from 'react';

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY': {
      console.log('action: ', action);
      return action.message;
    }
    case 'HIDE':
      return '';
    default:
      return '';
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = props => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  );

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[0];
};

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[1];
};

export default NotificationContext;
