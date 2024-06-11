import React from 'react';

interface AlertProps {
  message: string;
  isOpen: boolean;
  onDismiss: React.MouseEventHandler;
  show: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="alert-${type}">
      <button
        onClick={onDismiss}
        className="mat-raised-button"
        style={{ color: 'primary' }}
      >
        Кнопка Alert
      </button>
      <div className="AlertMassage">{message}</div>
      <div className="AlertMessage bs-light bs-light-rgb bs-light-border-subtle">
        This is a warning type alert
      </div>

      <div className="alertFalse">
        <div className="AlertMassage" />
      </div>
    </div>
  );
};

export default Alert;
