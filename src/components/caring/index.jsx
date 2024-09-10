import React from "react";
import { ImageWithCard } from "../common";

export const Caring = () => {
  return (
    <div className="flex flex-col gap-5 py-6">
      <div>
        <h2 className="leading-10 font-semibold text-center text-2xl md:text-3xl text-Secondary">
          Caring is the new marketing
        </h2>
        <p className="text-sm md:text-base font-normal leading-6 text-center text-Grey">
          The Nexcent blog is the best place to read about the latest membership
          insights,
          <br className="hidden md:inline-block" />
          trends and more. See who's joining the community, read about how our
          community
          <br className="hidden md:inline-block" />
          are increasing their membership income and lot's more.​
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-16 gap-28 content-center">
        <ImageWithCard
          imageUrl="/images/image 18.png"
          paragraphText="Creating Streamlined Safeguarding Processes with OneRen"
          cardTitle="Readmore"
        />
        <ImageWithCard
          imageUrl="/images/image 19.png"
          paragraphText="What are your safeguarding responsibilities and how can you manage them?"
          cardTitle="Readmore"
        />
        <ImageWithCard
          imageUrl="/images/image 20.png"
          paragraphText="Revamping the Membership Model with Triathlon Australia"
          cardTitle="Readmore"
        />
      </div>
    </div>
  );
};
