import React from "react";
import { Button } from "../common";

export const Design = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-28 py-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/images/pana.png" className="w-full md:w-3/4" alt="Design" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 mt-6 md:mt-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-7 md:leading-10 text-Secondary">
            How to design your site footer like<br className="hidden md:block" /> we did
          </h1>
          <p className="text-sm md:text-base font-normal text-Grey leading-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt <br className="hidden md:block" /> molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at<br className="hidden md:block" /> libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br className="hidden md:block" /> nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
            urna tincidunt. Integer<br className="hidden md:block" /> in nisi eget nulla commodo faucibus efficitur
            quis massa. Praesent felis est, finibus et nisi <br className="hidden md:block" /> ac, hendrerit
            venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
        </div>
        <div>
          <Button label={"Learn More"} className={"w-full md:w-36 h-12"} />
        </div>
      </div>
    </div>
  );
};
