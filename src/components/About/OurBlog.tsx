import React from "react";

const OurBlog = () => {
  return (
    <div className="lg:py-[10rem] py-[6rem] px-[4rem] flex flex-col gap-[2rem] items-center justify-center bg-primaryColor">
      <div className="lg:w-[70%] w-full flex flex-col gap-y-[1rem] ">
        <span className="text-white text-center font-[300]">Our Blog</span>
        <p className="font-manrope text-white  lg:text-[48px] text-[30px] text-center font-[300]">
          Value proposition accelerator product management venture
        </p>
        <hr />
        <div className="grid grid-cols-1 gap-16 py-[4rem] text-white">
          <div className="flex lg:justify-between lg:items-start items-center flex-col lg:flex-row">
            <span className="flex-[1] font-manrope font-[300] lg:text-[48px] text-[28px]">
              We are <span className="text-greenColor">committed</span>
            </span>
            <p className="flex-[1] font-[300] text-[#f1f1f1] text-center lg:text-left mt-[0.5rem]">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </p>
          </div>
          <div className="flex lg:justify-between lg:items-start items-center flex-col lg:flex-row">
            <span className="flex-[1] font-manrope font-[300] lg:text-[44px] text-[28px]">
              We are <span className="text-greenColor">responsible</span>
            </span>
            <p className="flex-[1] font-[300] text-[#f1f1f1] text-center lg:text-left mt-[0.5rem]">
              Mass market iPhone buzz conversion analytics stock iteration
              responsive web design user experience business plan handshake.
              Return on investment seed round MVP backing supply chain.
            </p>
          </div>
          <div className="lex lg:justify-between lg:items-start items-center flex-col lg:flex-row">
            <span className="flex-[1] font-manrope font-[300] lg:text-[44px] text-[28px]">
              We aim for <span className="text-greenColor">progress</span>
            </span>
            <p className="flex-[1] font-[300] text-[#f1f1f1] text-center lg:text-left mt-[0.5rem]">
              Bootstrapping rockstar first mover advantage business model canvas
              alpha deployment launch party beta facebook metrics gamification
              growth hacking customer focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OurBlog);
