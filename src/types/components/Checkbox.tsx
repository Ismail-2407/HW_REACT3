import React from "react";
import { useField } from "formik";

interface CheckboxProps {
  label: string;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name }) => {
  const [field] = useField({ name, type: "checkbox" });

  return (
    <div className="checkbox-group">
      <input type="checkbox" {...field} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
