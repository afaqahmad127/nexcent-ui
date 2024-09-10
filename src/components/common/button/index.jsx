import React from "react";

export const Button = ({ label, onClick, className, icon=null}) => {
  return (
    <button
      className={`bg-primary text-white font-medium text-sm rounded-[5px] ${className}`}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
};
