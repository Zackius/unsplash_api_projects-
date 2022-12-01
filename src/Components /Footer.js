import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-slate-400 w-full h-[50px] ">
          <div className=" flex   py-8  justify-center  text-black font-bold">
          <BiCopyright size={20} />
        <p className="px-8">
          PhotoBooth 
        </p>
      </div>
    </div>
  );
};

export default Footer;
