import React from "react";
import { FlexComponent } from "../common";

export const Business = () => {
  return (
    <div className="w-full bg-Silver flex flex-col lg:flex-row justify-between items-center px-6 lg:px-36 py-10">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2 className="font-semibold text-2xl lg:text-3xl leading-8 lg:leading-10 text-Secondary">
          Helping a local
        </h2>
        <h2 className="font-semibold text-2xl lg:text-3xl leading-8 lg:leading-10 text-primary">
          business reinvent itself
        </h2>
        <p className="leading-5 lg:leading-6 font-normal text-sm lg:text-base">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex   gap-6 lg:gap-10 mt-6 lg:mt-0">
        <div className="flex flex-col  gap-6 lg:gap-10">
          <FlexComponent
            iconUrl="/images/member.png"
            number="2,245,341"
            text="Members"
          />
          <FlexComponent
            iconUrl="/images/clubs.png"
            number="46,328"
            text="Clubs"
          />
        </div>
        <div className="flex flex-col  gap-6 lg:gap-10">
          <FlexComponent
            iconUrl="/images/event.png"
            number="828,867"
            text="Event Bookings"
          />
          <FlexComponent
            iconUrl="/images/payment.png"
            number="1,926,436"
            text="Payments"
          />
        </div>
      </div>
    </div>
  );
};
