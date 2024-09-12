import React from "react";
import { Button } from "../common";
import { Login } from "../common";

export const Header = ({
  onScrollToSection,
  homeRef,
  servicesRef,
  featureRef,
  productRef,
  testimonyRef,
  faqRef,
}) => {
  return (
    <nav className="bg-Silver w-full px-16 py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">
            Nexcent
          </span>
        </div>

        <div className="hidden w-full lg:block lg:w-auto">
          <ul className="flex gap-10 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <span
                className="text-black text-base font-normal leading-6 cursor-pointer"
                onClick={() => onScrollToSection(homeRef)}
              >
                Home
              </span>
            </li>
            <li>
              <span
                className="text-black text-base font-normal leading-6 cursor-pointer"
                onClick={() => {
                  onScrollToSection(servicesRef)
                }}
              >
                Services
              </span>
            </li>
            <li>
              <span
                className="text-black text-base font-normal leading-6 cursor-pointer"
                onClick={() => onScrollToSection(featureRef)}
              >
                Feature
              </span>
            </li>
            <li>
              <span
                className="text-black text-base font-normal leading-6 cursor-pointer"
                onClick={() => onScrollToSection(productRef)}
              >
                Product
              </span>
            </li>
            <li>
              <span
                className="text-black text-base font-normal leading-6 cursor-pointer"
                onClick={() => onScrollToSection(testimonyRef)}
              >
                Testimonia
              </span>
            </li>
            <li>
              <span
                className="text-black text-base font-normal leading-6 cursor-pointer"
                onClick={() => onScrollToSection(faqRef)}
              >
                FAQ
              </span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-3 items-center">
          <div className="hidden w-full lg:block lg:w-auto">
            <Login label={"Login"} />
          </div>
          <div className="hidden w-full lg:block lg:w-auto">
            <Button label={"Sign up"} className={"px-4 py-2"} />
          </div>
        </div>

        <div className="lg:hidden flex items-center">
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
