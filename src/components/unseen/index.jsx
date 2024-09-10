import React from "react";
import { Button } from "../common";

export const Spending = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-36 pt-5 content-center items-center">
      <div className="flex justify-center">
        <img src="/images/Frame 35.png" alt="Spending at Pixelgrade" className=" max-w-md" />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-Secondary text-2xl md:text-3xl font-semibold leading-8 md:leading-10 text-left">
            The unseen of spending three<br className="hidden md:block" /> years at Pixelgrade
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-normal leading-5 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum.  <br className="hidden md:block" />Sed accumsan quam vitae est varius
            fringilla. Pellentesque placerat vestibulum <br className="hidden md:block" /> lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet
            risus <br className="hidden md:block" />pretium auctor. Etiam quis massa pulvinar, aliquam
            quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
        </div>
        <div>
          <Button label={"Learn More"} className={" w-36 md:w-40 h-12"} />
        </div>
      </div>
    </div>
  );
};
