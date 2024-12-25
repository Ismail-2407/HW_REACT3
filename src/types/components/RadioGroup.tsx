import React from "react";
import { useField } from "formik";

interface RadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options }) => {
  const [field] = useField(name);
  return (
    <div className="radio-group">
      <div className="radio-label">{label}</div>
      {options.map((option) => (
        <div key={option.value} className="radio-option">
          <input type="radio" id={`${name}-${option.value}`} {...field} />
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
