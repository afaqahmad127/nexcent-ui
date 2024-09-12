import React from "react";

export const 
Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-black py-9 pb-11 px-6 md:px-12 lg:px-28">
      
      <div className="col-span-2 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Nexcent Logo" />
          <div className="text-white text-xl md:text-2xl font-bold">Nexcent</div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-normal text-xs md:text-sm leading-5 text-Silver">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="font-normal text-xs md:text-sm leading-5 text-Silver">
            All rights reserved
          </p>
        </div>
        <div className="flex gap-2">
          <img src="/images/Social Icons1.png" alt="Social Icon 1" />
          <img src="/images/Social Icons2.png" alt="Social Icon 2" />
          <img src="/images/Social Icons3.png" alt="Social Icon 3" />
          <img src="/images/Social Icons.png" alt="Social Icon 4" />
        </div>
      </div>

      
      <div className="col-span-1 flex flex-col gap-2">
        <h4 className="font-bold text-base leading-7 text-white">Company</h4>
        <ul className="flex flex-col gap-1">
          <li className="text-sm font-normal leading-5 text-white">About us</li>
          <li className="text-sm font-normal leading-5 text-white">Blog</li>
          <li className="text-sm font-normal leading-5 text-white">Contact us</li>
          <li className="text-sm font-normal leading-5 text-white">Pricing</li>
          <li className="text-sm font-normal leading-5 text-white">Testimonials</li>
        </ul>
      </div>

      
      <div className="col-span-1 flex flex-col gap-2">
        <h4 className="font-bold text-base leading-7 text-white">Support</h4>
        <ul className="flex flex-col gap-1">
          <li className="text-sm font-normal leading-5 text-white">Help center</li>
          <li className="text-sm font-normal leading-5 text-white">Terms of service</li>
          <li className="text-sm font-normal leading-5 text-white">Legal</li>
          <li className="text-sm font-normal leading-5 text-white">Privacy policy</li>
          <li className="text-sm font-normal leading-5 text-white">Status</li>
        </ul>
      </div>

      
      <div className="col-span-2 flex flex-col gap-3">
        <h4 className="font-bold text-base leading-7 text-white">Stay up to date</h4>
        <div className="rounded-lg bg-slate-600 w-full md:w-52 h-10 text-center py-2 flex justify-between px-2 items-center">
          <p className="text-white text-sm">Your email address</p>
          <img src="/images/send.png" alt="Send" />
        </div>
      </div>
    </div>
  );
};
