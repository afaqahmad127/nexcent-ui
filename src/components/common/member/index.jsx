import React from 'react';

export const FlexComponent = ({ iconUrl, number, text }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <img src={iconUrl} alt="icon" className="w-10 h-10" />
      </div>
      
      <div>
        <div className="font-bold text-xl leading-9 text-grey">{number}</div>
        <div className='text-Secondary'>{text}</div>
      </div>
    </div>
  );
};
