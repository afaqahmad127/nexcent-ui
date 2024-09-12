import React from "react";
import { Card } from "../common";

export const Manage = ({ servicesRef }) => {
  return (
    <div ref={servicesRef} className="w-full mt-5">
      <div>
        <h2 className="text-Secondary text-3xl font-semibold leading-[44px] text-center">
          Manage your entire community<br></br> in a single system
        </h2>
        <p className=" text-grey text-base font-normal leading-6 text-center pt-2">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-wrap">
        <Card
          imgSrc="/images/Icon.png"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments."
        />
        <Card
          imgSrc="/images/Icon1.png"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          imgSrc="/images/Icon2.png"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments."
        />
      </div>
    </div>
  );
};
