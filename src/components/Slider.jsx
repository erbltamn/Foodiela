import React from "react";
import scroll from "../assets/slidfot/scroll.svg";
import Timer from "../assets/slidfot/Timer.svg";
import ForkKnife from "../assets/slidfot/ForkKnife.svg";
import Ellipse2 from "../assets/slidfot/Ellipse2.svg";
import MaskGroup from "../assets/slidfot/MaskGroup.svg";
import Badge from "../assets/slidfot/Badge.svg";
import PlayCircle from "../assets/slidfot/PlayCircle.svg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="flex relative">
      <div className="flex-shrink-0 w-[40px] h-[600px] bg-[#E7FAFE] rounded-r-[30px] mt-[60px]"></div>

      <div className="relative flex-shrink-0 w-[1280px] h-[640px] bg-[#E7FAFE] rounded-[50px] mt-[40px] p-[50px] flex justify-between items-center mx-[55px]">
        <img
          src={Badge}
          alt="Badge"
          className="absolute w-[150px] h-[150px] top-[50px] left-[620px] right-[560px] bottom-[440px]"
        />

        <div className="flex flex-col w-[1280px] h-[640px]">
          <div className="w-[156px] h-[45px] rounded-[30px] bg-[#FFF] p-[11px_20px_10px_20px] flex items-center ml-[50px] mt-[50px]">
            <img src={scroll} alt="Scroll" className="w-[24px] h-[24px]" />
            <span className="w-[79px] h-[17px] ml-[13px] pt-[4px] pb-[3px] text-black font-inter text-[14px] font-semibold tracking-[-0.28px] flex items-center">
              Hot Recipes
            </span>
          </div>
          <h1 className="w-[520px] h-[154] ml-[50px] mt-[25px] text-black font-inter text-[64px] tracking-[-2.56px] font-semibold">
            Spicy delicious chicken wings
          </h1>

          <p className="w-[520px] h-[56px] ml-[50px] pt-[20px] text-[rgba(0,0,0,0.60)] font-inter text-[16px] font-regular leading-[28px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>

          <div className="ml-[50px] pt-[30px] mt-[20px] flex gap-[16px]">
            <div className="w-[139px] h-[40px] bg-[rgba(0,0,0,0.05)] rounded-[30px] px-[16px] flex items-center">
              <img
                src={Timer}
                alt="Timer"
                className="flex-shrink-0 w-[24px] h-[24px] "
              />
              <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
                30 Minutes
              </span>
            </div>

            <div className="w-[119px] h-[40px] bg-[rgba(0,0,0,0.05)] rounded-[30px] px-[16px] flex items-center">
              <img
                src={ForkKnife}
                alt="ForkKnife"
                className="flex-shrink-0 w-[24px] h-[24px]"
              />
              <span className="w-[53px] h-[17px] ml-[10px]  text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
                Chicken
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 w-[163px] h-[50px] ml-[50px] pt-[104px] mb-[55px] flex items-center gap-[16px]">
            <img
              src={Ellipse2}
              alt="Ellipse2"
              className="flex-shrink-0 w-[50px] h-[50px] rounded-[50px]"
            />

            <div className="flex flex-col">
              <h5 className="w-[86px] h-[19px] text-[#000] font-inter font-bold tracking-[-0.32px]">
                John Smith
              </h5>
              <p className="w-[97px] h-[17px] mt-[8px] text-[rgba(0,0,0,0.60)] font-inter tracking-[-0.28px] font-medium whitespace-nowrap">
                15 March 2022
              </p>
            </div>

            <Link to="/recipes">
              <div className="cursor-pointer flex-shrink-0 w-[190px] h-[60px] bg-[#000] rounded-[20px] flex items-center justify-center ml-[157px] pr-[36px] mr-[50px]">
                <span className="text-[#FFF] font-inter text-[14px] font-semibold tracking-[-0.28px] ml-[25px] ">
                  View Recipes
                </span>
                <img
                  src={PlayCircle}
                  alt="PlayCircle"
                  className="flex-shrink-0 w-[24px] h-[24px] ml-[15px]"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 w-[660px] h-[640px] flex items-center justify-center ml-[50px]">
          <img src={MaskGroup} alt="MaskGroup" />
        </div>
      </div>

      <div className="flex-shrink-0 w-[40px] h-[600px] bg-[#E7FAFE] rounded-l-[30px] mt-[60px] ml-auto"></div>
    </div>
  );
};

export default Slider;
