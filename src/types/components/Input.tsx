import React from "react";
import { useField } from "formik";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  assistiveText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  assistiveText,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} placeholder={placeholder} {...field} />
      {assistiveText && <div className="assistive-text">{assistiveText}</div>}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
