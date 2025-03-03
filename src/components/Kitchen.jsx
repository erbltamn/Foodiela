import React from "react";
import kLearn from "../assets/kitchenF/kLearn.svg";

const Kitchen = () => {
  return (
    <div className="flex-shrink-0 w-[1280px] h-[597px] pt-[200px] mt-[280px] mx-[100px]">
      <div className="flex justify-between items-start">
        <div className="flex-shrink-0 w-[526px] h-[356px] mt-[169px]">
          <h2 className="w-[526px] h-[116px] text-[#000] font-inter text-[48px] font-semibold tracking-[-1.92px]">
            Everyone can be a chef in their own kitchen
          </h2>
          <p className="w-[508px] h-[84px] text-[rgba(0,0,0,0.60)] font-inter text-[16px] font-regular leading-[28px] mt-[34px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
          <div className="cursor-pointer flex-shrink-0 w-[180px] h-[60px] mt-[72px] rounded-[16px] bg-[#000] pt-[17px]">
            <span className="w-[75px] h-[17px] text-[#FFF] font-inter text-[14px] font-semibold tracking-[-0.28] ml-[50px]">
              Learn More
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 w-[710px] h-[597px] ml-[90px]">
          <img src={kLearn} alt="kLearn" />
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
