import React from 'react';
import Alert from './Alert';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  show: boolean;
  touched: boolean;
  valid: boolean;
  minLength: number;
  errorMsg: string;
  successMsg: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  show,
  touched,
  valid,
  minLength,
  errorMsg,
  successMsg
}) => {
  if (!show) return null;
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        minLength={minLength}
        onChange={e => onChange(e.target.value)}
        autoComplete="off"
        placeholder={label}
        title={label}
        aria-label={label}
      />
      {touched && !valid && (
        <Alert type="error" message={errorMsg} />
      )}
      {touched && valid && (
        <Alert type="success" message={successMsg} />
      )}
    </div>
  );
};

export default InputField;
