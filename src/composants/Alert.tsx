import React from 'react';

interface AlertProps {
  type: 'error' | 'success';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}>{message}</div>
  );
};

export default Alert;
