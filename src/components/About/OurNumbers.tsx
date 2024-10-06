import React from "react";

const Widget = ({ value }: { value: string }) => {
  return (
    <div className="flex flex-col lg:gap-y-[0.2rem] gap-y-[1px] lg:items-start items-center">
      <span className="lg:text-[84px] text-[60px] text-primaryColor  font-manrope font-[400]">
        {value}
      </span>
      <p className="text-primaryColor font-[300]">Cool feature title</p>
    </div>
  );
};
const OurNumbers = () => {
  return (
    <div className="py-[5.5rem] px-[4rem] flex flex-col gap-[2rem] items-center justify-center">
      <span className="text-primaryColor font-[300]">Our numbers</span>
      <p className="font-manrope text-primaryColor  lg:text-[48px] text-[32px] text-center lg:w-[70%] w-full font-[300]">
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:gap-[12rem] gap-[3rem]">
        <Widget value={"120m"} />
        <Widget value={"10.000"} />
        <Widget value={"240"} />
      </div>
    </div>
  );
};

export default React.memo(OurNumbers);
