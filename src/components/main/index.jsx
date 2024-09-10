import React from "react";
import { Button } from "../common";

export const Banner = () => {
  return (
    <div className="bg-Silver py-16 px-6 sm:px-12 md:px-20 lg:px-44 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="py-8 sm:py-12 md:py-16">
        <h1 className="text-Secondary text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight lg:leading-[76px]">
          Lessons and insights
        </h1>
        <h1 className="text-primary text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight lg:leading-[76px]">
          from 8 years
        </h1>
        <p className="text-Grey leading-6 text-base font-normal mb-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button label={"Register"} className={"w-32 h-11"} />
      </div>
      <div className="flex justify-center md:justify-end">
        <img src="/images/photo.png" className="pl-0 md:pl-12 lg:pl-24 max-w-full" alt="Banner" />
      </div>
    </div>
  );
};
