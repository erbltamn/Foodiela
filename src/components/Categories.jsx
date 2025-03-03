import React from "react";
import breakfast from "../assets/categoriesF/breakfast.svg";
import breakfastT from "../assets/categoriesF/breakfastT.svg";
import vegan from "../assets/categoriesF/vegan.svg";
import veganT from "../assets/categoriesF/veganT.svg";
import meat from "../assets/categoriesF/meat.svg";
import meatT from "../assets/categoriesF/meatT.svg";
import dessert from "../assets/categoriesF/dessert.svg";
import dessertT from "../assets/categoriesF/dessertT.svg";
import lunch from "../assets/categoriesF/lunch.svg";
import lunchT from "../assets/categoriesF/lunchT.svg";
import chocolate from "../assets/categoriesF/chocolate.svg";
import chocolateT from "../assets/categoriesF/chocolateT.svg";

const Categories = () => {
  return (
    <div className="w-[1280px] h-[342px] mx-[90px] pt-[139px]">
      <div className="flex items-center justify-between">
        <h2 className="w-[238px] h-[58px] text-[#000] font-inter text-[48px] font-semibold tracking-[-1.92px]">
          Categories
        </h2>

        <div className="cursor-pointer flex-shrink-0 w-[200px] h-[60px] bg-[#E7FAFE] rounded-[16px] ml-[900px] mr-[80px] flex items-center justify-center">
          <p className="w-[146px] h-[19px] text-[#000] font-inter text-[16px] font-semibold tracking-[-0.32px]">
            View All Categories
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-[1280px] h-[202px] pt-[80px] flex justify-between group">
        <div className="cursor-pointer flex-shrink-0 w-[180px] h-[202px] relative group-hover:blur-sm group-hover:scale-[0.85] hover:!blur-none hover:!scale-100 transition-all duration-300">
          <img
            src={breakfastT}
            alt="BreakfastT"
            className="absolute flex-shrink-0 top-[40px] right-[20px] w-[100px] h-[100px] object-cover blur-[0.1px] z-0 "
          />
          <img
            src={breakfast}
            alt="Breakfast"
            className="absolute flex-shrink-0 left-[40px] w-[100px] h-[100px] object-cover z-0"
          />
          <div className="absolute flex-shrink-0 top-[70px] left-0 w-[180px] h-[152px] rounded-[30px] bg-gradient-to-b from-[rgba(112,130,70,0)] to-[rgba(112,130,70,0.1)] z-20 flex items-center justify-center">
            <p className="w-[81px] h-[22px] text-[#000] font-inter text-[18px] font-semibold tracking-[-0.36] text-center mt-[50px]">
              Breakfast
            </p>
          </div>
        </div>

        <div className="cursor-pointer flex-shrink-0 w-[180px] h-[202px] ml-[49px] relative group-hover:blur-sm group-hover:scale-[0.85] hover:!blur-none hover:!scale-100 transition-all duration-300">
          <img
            src={veganT}
            alt="VeganT"
            className="absolute flex-shrink-0 top-[10px] right-[25px] w-[100px] h-[100px] object-cover blur-[30px] z-0"
          />
          <img
            src={vegan}
            alt="Vegan"
            className="absolute flex-shrink-0 left-[50px] w-[120px] h-[120px] object-cover z-0 bg-[url('path/to/image')] bg-lightgray bg-center bg-cover bg-no-repeat"
          />

          <div className="absolute flex-shrink-0 top-[70px] left-0 w-[180px] h-[152px] rounded-[30px] bg-gradient-to-b from-[rgba(108,198,63,0] to-[rgba(108,198,63,0.1)] z-20 flex items-center justify-center">
            <p className="w-[81px] h-[22px] text-[#000] font-inter text-[18px] font-semibold tracking-[-0.36] text-center mt-[50px]">
              Vegan
            </p>
          </div>
        </div>

        <div className="cursor-pointer flex-shrink-0 w-[180px] h-[202px] ml-[49px] relative group-hover:blur-sm group-hover:scale-[0.85] hover:!blur-none hover:!scale-100 transition-all duration-300">
          <img
            src={meatT}
            alt="MeatT"
            className="absolute top-[30px] right-[15px] w-[100px] h-[100px] blur-[5px] z-0"
          />
          <img
            src={meat}
            alt="Meat"
            className="absolute flex-shrink-0 left-[40px] w-[100px] h-[100px] object-cover z-0 bg-[url('path/to/image')] bg-lightgray bg-center bg-cover bg-no-repeat"
          />

          <div className="absolute flex-shrink-0 top-[70px] left-0 w-[180px] h-[152px] rounded-[30px] bg-gradient-to-b from-[rgba(204,38,27,0.00] to-[rgba(204,38,27,0.10)] z-20 flex items-center justify-center">
            <p className="w-[81px] h-[22px] text-[#000] font-inter text-[18px] font-semibold tracking-[-0.36] text-center mt-[50px]">
              Meat
            </p>
          </div>
        </div>

        <div className="cursor-pointer flex-shrink-0 w-[180px] h-[202px] ml-[49px] relative group-hover:blur-sm group-hover:scale-[0.85] hover:!blur-none hover:!scale-100 transition-all duration-300">
          <img
            src={dessertT}
            alt="DessertT"
            className="absolute top-[30px] right-[25px] w-[100px] h-[100px] blur-[0.1px] z-0"
          />
          <img
            src={dessert}
            alt="Dessert"
            className="absolute flex-shrink-0 left-[37px] w-[100px] h-[100px] object-cover z-0 bg-[url('path/to/image')] bg-lightgray bg-center bg-cover bg-no-repeat"
          />

          <div className="absolute flex-shrink-0 top-[70px] left-0 w-[180px] h-[152px] rounded-[30px] bg-gradient-to-b from-[rgba(108,198,63,0] to-[rgba(240,158,0,0.10)] z-20 flex items-center justify-center">
            <p className="w-[81px] h-[22px] text-[#000] font-inter text-[18px] font-semibold tracking-[-0.36] text-center mt-[50px]">
              Dessert
            </p>
          </div>
        </div>

        <div className="cursor-pointer flex-shrink-0 w-[180px] h-[202px] ml-[49px] relative group-hover:blur-sm group-hover:scale-[0.85] hover:!blur-none hover:!scale-100 transition-all duration-300">
          <img
            src={lunchT}
            alt="LunchT"
            className="absolute top-[30px] right-[25px] w-[100px] h-[100px] blur-[0.1px] z-0"
          />
          <img
            src={lunch}
            alt="Lunch"
            className="absolute flex-shrink-0 left-[37px] w-[100px] h-[100px] object-cover z-0 bg-[url('path/to/image')] bg-lightgray bg-center bg-cover bg-no-repeat"
          />

          <div className="absolute flex-shrink-0 top-[70px] left-0 w-[180px] h-[152px] rounded-[30px] bg-gradient-to-b from-[rgba(108,198,63,0] to-[rgba(0,0,0,0.05)] z-20 flex items-center justify-center">
            <p className="w-[81px] h-[22px] text-[#000] font-inter text-[18px] font-semibold tracking-[-0.36] text-center mt-[50px]">
              Lunch
            </p>
          </div>
        </div>

        <div className="cursor-pointer flex-shrink-0 w-[180px] h-[202px] ml-[60px] relative group-hover:blur-sm group-hover:scale-[0.85] hover:!blur-none hover:!scale-100 transition-all duration-300">
          <img
            src={chocolateT}
            alt="ChocolateT"
            className="absolute top-[28px] right-[12px] w-[100px] h-[100px] blur-[1px] z-0"
          />
          <img
            src={chocolate}
            alt="Chocolate"
            className="absolute flex-shrink-0 left-[37px] w-[100px] h-[100px] object-cover z-0 bg-[url('path/to/image')] bg-lightgray bg-center bg-cover bg-no-repeat"
          />

          <div className="absolute flex-shrink-0 top-[70px] left-0 w-[180px] h-[152px] rounded-[30px] bg-gradient-to-b from-[rgba(108,198,63,0] to-[rgba(0,0,0,0.05)] z-20 flex items-center justify-center">
            <p className="w-[81px] h-[22px] text-[#000] font-inter text-[18px] font-semibold tracking-[-0.36] text-center mt-[50px]">
              Chocolate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
