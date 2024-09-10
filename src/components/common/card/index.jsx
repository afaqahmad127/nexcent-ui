import React from "react";

export const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white  p-6 text-center w-64 mx-auto">
<div className="mb-4">
        <img src={imgSrc} alt="icon" width={100} height={100} className="mx-auto" />
      </div>

      <div className="text-Secondary text-xl font-extrabold mb-2">{title}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
};

