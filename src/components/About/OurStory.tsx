import React from "react";

const OurStory = () => {
  return (
    <div className="lg:py-[10rem] py-[6rem] lg:px-[4rem] px-[2rem] flex flex-col gap-[2rem] items-center justify-center bg-primaryColor">
      <div className="lg:w-[70%] w-full flex flex-col gap-y-[1rem]">
        <span className="text-white font-[300]">Our story</span>
        <p className="font-manrope text-white text-[30px] lg::text-[48px] lg:w-[90%] w-full font-[300]">
          Handshake infographic mass market crowdfunding iteration.
        </p>
        <p className="text-[#F1F1F1] lg:w-[78%] w-full font-[300] leading-7">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.
        </p>
      </div>
    </div>
  );
};

export default React.memo(OurStory);
