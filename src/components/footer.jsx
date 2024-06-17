import React from "react";
import SocialNav from "./SocialNav";

const Footer = () => {
  return (
    <div>
      <div className="pb-6 flex flex-col md:flex-row items-center gap-5 md:justify-between">
      <p>
        Thank you for visiting my portfolio
      </p>
        <SocialNav />
        <p className="text-font-sub-color">
          © 2024 saeed dev.all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
