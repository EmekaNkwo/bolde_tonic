import IconLogo from "@/assets/IconLogo";
import React, { ReactNode } from "react";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: ReactNode[];
}) => (
  <div className="flex flex-col gap-4">
    <span className="text-black font-[600]">{title}</span>
    {links.map((link, index) => (
      <span key={index} className="text-greyColor font-[300]">
        {link}
      </span>
    ))}
  </div>
);
const Footer = () => {
  return (
    <div className="lg:p-[9rem] p-[2rem] flex flex-col gap-[2rem] items-center justify-center bg-white">
      <div className="lg:w-[80%] w-full lg:p-[4.8rem] p-[2rem] rounded-[12px] flex justify-center items-center flex-col bg-primaryColor gap-4 relative overflow-hidden">
        <div className="hidden lg:block absolute -top-[160%] -right-[20%] w-[780px] h-[780px]  bg-[#1C3D5B] rounded-full transform rotate-45"></div>
        <h2 className="lg:text-[48px] text-[24px]  text-white text-center w-full lg:w-[70%] z-40">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mt-[2rem]">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-full text-[14px] text-black text-center md:text-left focus:outline-none w-[250px] md:w-[300px]  md:flex-grow"
          />
          <button className="bg-[#66daab] text-[14px] text-[#0c2b47] font-[600] py-3 px-6 rounded-full hover:bg-[#5ac498] transition-colors duration-300">
            Start now
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2rem] mt-[4rem]">
        <div className="flex flex-col gap-[2rem]">
          <div className="flex items-center gap-3">
            <IconLogo />
            <span className="font-manrope font-[300] text-[48px] text-primaryColor">
              Boldo
            </span>
          </div>
          <p className="lg:w-[50%] leading-[2rem] text-greyColor font-[300]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <span className="text-greyColor font-[300]">
            All rights reserved.
          </span>
        </div>
        <hr className="lg:hidden " />
        <div className="flex justify-between flex-wrap gap-[1.5rem]">
          <FooterColumn
            title="Landings"
            links={["Home", "Products", "Services"]}
          />
          <FooterColumn
            title="Company"
            links={[
              "Home",
              <>
                Careers{" "}
                <span className="py-1 px-2 text-[13px] bg-greenColor text-primaryColor font-[500] rounded-full">
                  Hiring!
                </span>
              </>,
              "Services",
            ]}
          />
          <FooterColumn
            title="Resources"
            links={["Blog", "Products", "Services"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
