import React from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, children, className }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
