import React from "react";
import { Button } from "../common";
import { Login } from "../common";

export const Header = () => {
  return (
    <nav className="bg-Silver w-full px-16 py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="logo" />
            <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-black">Nexcent</span>
          </div>
          
        <div className="hidden w-full md:block md:w-auto">
        <ul className="flex gap-10 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a href="/" className="text-black text-base font-normal leading-6 ">
              Home
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-black text-base font-normal leading-6"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/feature"
              className="text-black text-base font-normal leading-6"
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="/product"
              className="text-black text-base font-normal leading-6"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/testimonia"
              className="text-blacktext-base font-normal leading-6 "
            >
              Testimonia
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="text-black text-base font-normal leading-6 "
            >
              FAQ
            </a>
          </li>
        </ul>
        </div>
        
        <div className="flex justify-center gap-3 items-center">
        <div><Login label={"Login"}/></div>
        <div><Button label={"Sign up"} className={"px-4 py-2"} /></div>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};
