import React from "react";
import Ellipse2 from "../assets/slidfot/Ellipse2.svg?url";
import Timer from "../assets/slidfot/Timer.svg";
import ForkKnife from "../assets/slidfot/ForkKnife.svg";
import Print from "../assets/nutritF/Print.svg";
import Share from "../assets/nutritF/Share.svg";
import rice2 from "../assets/nutritF/rice2.svg";

const Nutrition = () => {
  return (
    <div className="flex-shrink-0 w-[1340px] h-[1003px] mx-[90px] mt-[80px]">
      <div className="flex-shrink-0 w-[777px] h-[175px]">
        <h1 className="w-[777px] h-[77px] text-[#000] font-inter text-[64px] font-semibold tracking-[-2.56px]">
          Health Japanese Fried Rice
        </h1>

        <div className="flex-shrink-0 w-[699px] h-[50px] mt-[48px] ">
          <div className="flex-shrink-0 w-[163px] h-[50px] flex items-center gap-[16px]">
            <img
              src={Ellipse2}
              alt="Ellipse2"
              className="flex-shrink-0 w-[50px] h-[50px] rounded-[50px]"
            />

            <div className="flex flex-col">
              <h5 className="w-[86px] h-[19px] text-[#000] font-inter font-bold tracking-[-0.32px] text-[16px]">
                John Smith
              </h5>
              <p className="w-[97px] h-[17px] mt-[8px] text-[rgba(0,0,0,0.60)] font-inter tracking-[-0.28px] font-medium whitespace-nowrap text-[14px]">
                15 March 2022
              </p>
            </div>
          </div>

          <div className="h-[50px] border-l border-black/10 ml-[211px] mt-[-50px]"></div>

          <div className="flex-shrink-0 w-[113px] h-[40px] ml-[243px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px] mt-[-35px]"
            />
            <div className="flex flex-col ml-[40px]">
              <h6 className="w-[73px] h-[15px] text-[#000] font-inter text-[12px] font-medium leading-[1.2px] mt-[-25px]">
                PREP TIME
              </h6>
              <p className="w-[71px] h-[17px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px]">
                15 Minutes
              </p>
            </div>
          </div>

          <div className="h-[50px] border-l border-black/10 ml-[388px] mt-[-55px]"></div>

          <div className="flex-shrink-0 w-[118px] h-[40px] ml-[420px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px] mt-[-35px]"
            />
            <div className="flex flex-col ml-[40px]">
              <h6 className="w-[73px] h-[15px] text-[#000] font-inter text-[12px] font-medium leading-[1.2px] mt-[-25px]">
                COOK TIME
              </h6>
              <p className="w-[71px] h-[17px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px]">
                15 Minutes
              </p>
            </div>
          </div>

          <div className="h-[50px] border-l border-black/10 ml-[570px] mt-[-55px]"></div>

          <div className="flex-shrink-0 w-[87px] h-[24px] ml-[602px] flex items-center">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px] mt-[-70px]"
            />
            <span className="w-[53px] h-[17px] text-[#000] font-inter text-[14px] font-medium tracking-[0.28px] ml-[16px] mt-[-70px]">
              Chicken
            </span>
          </div>
        </div>
      </div>

      <img
        src={Print}
        alt="Print"
        className="flex-shrink-0 w-[80px] h-[111px] ml-[1144px] mt-[-130px]"
      />

      <img
        src={Share}
        alt="Share"
        className="flex-shrink-0 w-[80px] h-[111px] ml-[1260px] mt-[-113px]"
      />

      <img
        src={rice2}
        alt="Rice2"
        className="flex-shrink-0 w-[840px] h-[600px] mt-[80px]"
      />

      <div className="flex-shrink-0 w-[400px] h-[600px] rounded-[30px] bg-[#E7FAFE] ml-[940px] mt-[-600px]">
        <h3 className="w-[223px] h-[29px] text-[#000] font-inter text-[24px] font-semibold tracking-[-0.96px] ml-[32px] pt-[32px]">
          Nutrition Information
        </h3>

        <div className="flex-shrink-0 w-[336px] h-[38px] ml-[32px] pt-[24px] mt-[24px]">
          <span className="w-[66px] h-[22px] text-[rgba(0,0,0,0.60)] font-inter text-[18px] font-medium tracking-[0.72px]">
            Calories
          </span>
          <span className="w-[80px] h-[22px] text-[#000] text-right font-inter text-[18px] font-medium tracking-[0.78px] ml-[165px]">
            219.9 kcal
          </span>

          <div className="w-full h-[1px] bg-black/10 mt-[8px]"></div>
        </div>

        <div className="flex-shrink-0 w-[336px] h-[38px] ml-[32px] pt-[24px] mt-[24px]">
          <span className="w-[66px] h-[22px] text-[rgba(0,0,0,0.60)] font-inter text-[18px] font-medium tracking-[0.72px]">
            Total Fat
          </span>
          <span className="w-[80px] h-[22px] text-[#000] text-right font-inter text-[18px] font-medium tracking-[0.78px] ml-[200px]">
            10.7 g
          </span>

          <div className="w-full h-[1px] bg-black/10 mt-[8px]"></div>
        </div>

        <div className="flex-shrink-0 w-[336px] h-[38px] ml-[32px] pt-[24px] mt-[24px]">
          <span className="w-[66px] h-[22px] text-[rgba(0,0,0,0.60)] font-inter text-[18px] font-medium tracking-[0.72px]">
            Protein
          </span>
          <span className="w-[80px] h-[22px] text-[#000] text-right font-inter text-[18px] font-medium tracking-[0.78px] ml-[225px]">
            7.9 g
          </span>

          <div className="w-full h-[1px] bg-black/10 mt-[8px]"></div>
        </div>

        <div className="flex-shrink-0 w-[336px] h-[38px] ml-[32px] pt-[24px] mt-[24px]">
          <span className="w-[66px] h-[22px] text-[rgba(0,0,0,0.60)] font-inter text-[18px] font-medium tracking-[0.72px]">
            Carbohydrate
          </span>
          <span className="w-[80px] h-[22px] text-[#000] text-right font-inter text-[18px] font-medium tracking-[0.78px] ml-[150px]">
            22.3 g
          </span>

          <div className="w-full h-[1px] bg-black/10 mt-[8px]"></div>
        </div>

        <div className="flex-shrink-0 w-[336px] h-[38px] ml-[32px] pt-[24px] mt-[24px]">
          <span className="w-[66px] h-[22px] text-[rgba(0,0,0,0.60)] font-inter text-[18px] font-medium tracking-[0.72px]">
            Cholesterol
          </span>
          <span className="w-[80px] h-[22px] text-[#000] text-right font-inter text-[18px] font-medium tracking-[0.78px] ml-[155px]">
            37.4 mg
          </span>

          <div className="w-full h-[1px] bg-black/10 mt-[8px]"></div>
        </div>

        <p className="w-[336px] h-[56px] text-[rgba(0,0,0,0.60)] text-center font-inter text-[16px] font-regular leading-[28px] mt-[167px] ml-[32px]">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{" "}
        </p>
      </div>

      <p className="w-[1340px] h-[84px] text-[rgba(0,0,0,0.60)] font-inter text-[16px] font-regular leading-[28px] mt-[80px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Nutrition;
