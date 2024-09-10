import React from "react";
import { Button } from "../common";

export const Demo = () => {
  return (
    <div className="flex flex-col gap-5 py-5 mt-20 bg-Silver">
     
      <div>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-normal lg:leading-[76px] text-center text-Secondary">
          Pellentesque suscipit <br className="hidden md:block" /> fringilla libero eu.
        </h1>
      </div>

      
      <div className="flex justify-center items-center gap-3">
        <Button
          label={"Get a Demo"}
          className={"rounded   md:w-36 md:h-12 gap-2 md:gap-8 flex justify-center items-center"}
          icon={<img src="/images/Vector.png" alt="icon" width={20} height={20} />}
        />
      </div>
    </div>
  );
};
