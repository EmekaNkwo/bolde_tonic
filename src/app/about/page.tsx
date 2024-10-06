import AboutHeader from "@/components/About/AboutHeader";
import Footer from "@/components/About/Footer";
import OurBlog from "@/components/About/OurBlog";
import OurNumbers from "@/components/About/OurNumbers";
import OurStory from "@/components/About/OurStory";
import OurTeam from "@/components/About/OurTeam";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <AboutHeader />
      <OurNumbers />
      <OurStory />
      <OurTeam />
      <OurBlog />
      <Footer />
    </div>
  );
};

export default page;
