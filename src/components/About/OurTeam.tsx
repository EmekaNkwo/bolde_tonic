import React from "react";
import ImageCard from "../ImageCard";
import { MichaelImg } from "@/assets";
import { otherTeamMembers } from "@/data";

const OurTeam = () => {
  return (
    <div className="lg:py-32 lg:px-8  py-16 flex flex-col gap-8 items-center justify-center bg-white">
      <div className="max-w-4xl flex flex-col gap-y-4">
        <div className="flex flex-col gap-4 p-7">
          <span className="text-greyColor font-light">Our team</span>
          <p className="font-manrope text-black text-4xl md:text-5xl lg:text-6xl font-light">
            The people behind the work
          </p>
          <p className="text-greyColor font-light leading-7 max-w-3xl">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <ImageCard
            key={index}
            imageUrl={MichaelImg.src}
            columnImg
            title="Michael Scott"
            subTitle="General Manager"
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-[1rem]">
        {otherTeamMembers.map((team, index) => (
          <div
            className="min-w-[250px] md:min-w-[300px] lg:min-w-[410px]"
            key={index}
          >
            <ImageCard
              imageUrl={team.imageUrl}
              title={team.name}
              subTitle={team.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
