import React from "react";

export const Smith = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-Silver items-center px-6 lg:px-24 py-10">
      <div className="mb-6 lg:mb-0">
        <img src="/images/smith.png" alt="Smith" className="w-full max-w-xs lg:max-w-sm" />
      </div>
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <div>
          <p className="font-normal text-xs leading-6 text-Grey">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus <br className="hidden lg:block"/> tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br className="hidden lg:block"/>
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie <br className="hidden lg:block"/> mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br className="hidden lg:block"/>
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, <br className="hidden lg:block"/> vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum <br className="hidden lg:block"/> id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
        </div>
        <div>
          <h4 className="leading-7 font-semibold text-sm text-primary">Tim Smith</h4>
          <p className="text-base leading-6 font-normal text-gray">
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="flex gap-5">
            <img src="/images/Logo (8).png" alt="Logo 1" className="w-12"/>
            <img src="/images/Logo (9).png" alt="Logo 2" className="w-12"/>
            <img src="/images/Logo (10).png" alt="Logo 3" className="w-12"/>
            <img src="/images/Logo (11).png" alt="Logo 4" className="w-12"/>
            <img src="/images/Logo (12).png" alt="Logo 5" className="w-12"/>
            <img src="/images/Logo (13).png" alt="Logo 6" className="w-12"/>
          </div>
          <div>
            <h4 className="leading-7 font-semibold text-sm text-primary">
              Meet all customers
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
