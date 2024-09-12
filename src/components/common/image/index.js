import React from "react";

export const ImageWithCard = ({ imageUrl, paragraphText, cardTitle }) => {
  return (
    <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
      <div className="w-full h-auto">
        <img
          src={imageUrl}
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute left-[5%] top-[70%] w-[90%] bg-Silver rounded-[5px] p-4 mb-24">
        <h4 className="font-semibold text-sm md:text-sm leading-7 text-center text-Grey px-5 py-3 ">
          {paragraphText}
        </h4>

        <div className="flex justify-center items-center gap-3">
          <h4 className="font-semibold text-sm md:text-base leading-7 text-primary">
            {cardTitle}
          </h4>
          <img src="/images/Right.png" width={25} height={25} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
