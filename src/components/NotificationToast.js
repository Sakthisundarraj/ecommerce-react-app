import React from 'react';
import { FaTimes, FaCheck, FaExclamationTriangle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';
import './NotificationToast.css';

const NotificationToast = ({ notification, onRemove }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <FaCheck />;
      case 'error':
        return <FaExclamationCircle />;
      case 'warning':
        return <FaExclamationTriangle />;
      case 'info':
        return <FaInfoCircle />;
      default:
        return notification.icon || <FaInfoCircle />;
    }
  };

  const getClassName = () => {
    return `notification-toast notification-${notification.type}`;
  };

  return (
    <div className={getClassName()}>
      <div className="notification-icon">
        {getIcon()}
      </div>
      <div className="notification-content">
        <p className="notification-message">{notification.message}</p>
      </div>
      <button 
        className="notification-close" 
        onClick={() => onRemove(notification.id)}
        aria-label="Close notification"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default NotificationToast; 