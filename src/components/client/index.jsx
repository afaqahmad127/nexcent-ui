import React from "react";

export const Clients = () =>{
    return(
        <div className="w-full  pt-7">
          <div className="px-28">
          <h2 className="text-Secondary font-semibold text-4xl leading-10 text-center">Our Clients</h2> 
          <p className="text-gray-600 text-base font-normal leading-6 text-center">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="flex  flex-wrap gap-2 justify-between px-24 mt-3">

          <img src="/images/logo1.png" alt="logo1" />
          <img src="/images/logo2.png" alt="logo2" />
          <img src="/images/logo3.png" alt="logo3" />
          <img src="/images/logo4.png" alt="logo" />
          <img src="/images/logo5.png" alt="logo" />
          <img src="/images/logo6.png" alt="logo" />
          <img src="/images/logo7.png" alt="logo"/>
          </div>
        </div>
    )
}