import React from "react";
import Topbar from "../Topbar";

const AboutHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 bg-greenColor p-6 md:px-16">
      <Topbar />
      <div className="flex flex-col gap-2 my-12">
        <span className="font-light">About</span>
        <div className="flex flex-col md:flex-row items-start justify-between mt-3">
          <p className="font-manrope text-primaryColor text-3xl md:text-5xl md:max-w-[50%] flex-[1] w-full">
            We love to make great things, things that matter.
          </p>
          <p className="text-sm md:text-base font-light w-full md:max-w-[50%] mt-4 md:mt-0 flex-[1] lg:px-2 ">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutHeader);
