import React from "react";
import ovosh from "../assets/inboxF/ovosh.svg";
import arugula from "../assets/inboxF/arugula.svg";

const Inbox = () => {
  return (
    <div className="flex-shrink-0 w-[1340px] h-[442px] rounded-[60px] bg-[#E7F9FD] mx-[85px] mt-[195px] flex relative overflow-hidden">
      <img
        src={ovosh}
        alt="Ovosh"
        className="w-[409.5px] h-[400.1px] flex-shrink-0 bg-cover bg-no-repeat bg-center mt-[43px]"
      />

      <div className="flex flex-col w-[620px] h-[282px] items-center text-center relative ml-[-20px] mt-[80px]">
        <h2 className="w-[589px] h-[58px] text-[#000] font-inter text-[48px] font-semibold tracking-[-1.92px]">
          Deliciousness to your inbox
        </h2>
        <p className="w-[620px] h-[56px] text-[rgba(0,0,0,0.60)] text-center text-[16px] font-regular leading-[28px] mt-[24px] ">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor <br /> incididunt ut labore et dolore magna aliqut enim ad
          minim
        </p>

        <div className="w-[480px] h-[80px] rounded-[24px] flex-shrink-0 bg-[#FFF] mt-[64px] ml-[47px] flex items-center justify-between">
          <span className="text-[rgba(0,0,0,0.40)] font-inter text-[14px] font-medium tracking-[0.28px] ml-[32px]">
            Your email address...
          </span>
          <div className=" cursor-pointer w-[160px] h-[60px] rounded-[16px] flex-shrink-0 bg-[#000] flex items-center justify-center mr-[32px]">
            <span className="text-[#FFF] font-inter text-[14px] font-semibold tracking-[-0.28px]">
              Subscribe
            </span>
          </div>
        </div>
      </div>

      <img
        src={arugula}
        alt="Arugula"
        className="flex-shrink-0 w-[470px] h-[355.6] mt-[216px] ml-[-72px]"
      />
    </div>
  );
};

export default Inbox;
