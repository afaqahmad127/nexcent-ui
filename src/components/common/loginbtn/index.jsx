import React from "react";

export const Login = ({ label, onClick }) => {
  return (
    <button
      className=" text-primary text-sm font-medium leading-5 text-center"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
