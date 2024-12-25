import React from "react";
import { useField } from "formik";

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ label, name, options }) => {
  const [field, meta] = useField(name);

  return (
    <div className="select-group">
      <label htmlFor={name}>{label}</label>
      <select {...field}>
        <option value="">Dropdown option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Select;
