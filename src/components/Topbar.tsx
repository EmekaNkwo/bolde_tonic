"use client";
import IconLogo from "@/assets/IconLogo";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Topbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between py-2 ">
      <div className="flex items-center gap-2">
        <IconLogo />
        <span className="font-bold font-manrope text-2xl md:text-3xl text-primaryColor">
          Boldo
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-primaryColor font-semibold">
        <Link href="/products" className="hover:text-secondaryColor">
          Products
        </Link>
        <Link href="/services" className="hover:text-secondaryColor">
          Services
        </Link>
        <Link href="/about" className="hover:text-secondaryColor">
          About
        </Link>
        <Link
          href="/login"
          className="border-2 border-primaryColor p-2 w-[128px] rounded-full font-bold text-center hover:bg-primaryColor hover:text-white"
        >
          Log in
        </Link>
      </div>
      {/* Mobile Menu Button */}

      <div
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-[10px] bg-white shadow-md p-2 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col">
          <Link
            href="#"
            className="py-2 px-4 text-center text-primaryColor hover:bg-gray-100"
          >
            Products
          </Link>
          <Link
            href="#"
            className="py-2 px-4 text-center text-primaryColor hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="#"
            className="py-2 px-4 text-center text-primaryColor hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primaryColor text-center rounded-[10px] text-white hover:bg-red border-t mt-2"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
