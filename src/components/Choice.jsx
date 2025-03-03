import React from "react";
import burger from "../assets/choiceF/burger.svg";
import like from "../assets/choiceF/like.svg";
import Timer from "../assets/choiceF/Timer.svg";
import ForkKnife from "../assets/choiceF/ForkKnife.svg";
import semga from "../assets/choiceF/semga.svg";
import nlike from "../assets/choiceF/nlike.svg";
import pancake from "../assets/choiceF/pancake.svg";
import salad from "../assets/choiceF/salad.svg";
import meatballs from "../assets/choiceF/meatballs.svg";
import food from "../assets/choiceF/food.svg";
import foto from "../assets/choiceF/foto.svg";
import sweet from "../assets/choiceF/sweet.svg";
import chiken from "../assets/choiceF/chiken.svg";
import pasta from "../assets/choiceF/pasta.svg";

const Choice = () => {
  return (
    <div className="relative flex-shrink-0 w-[1280px] h-[1616px] ml-[20px] pt-[155px]">
      <h2 className="w-[526px] h-[58px] text-[#000] font-inter text-[48px] font-semibold tracking-[-1.92px] ml-[500px] pt-[183px] mb-[24px]">
        Simple and tasty recipes
      </h2>
      <p className="w-[706px] h-[56px] text-[rgba(0,0,0,0.60)] font-inter text-[16px] font-regular leading-[28px] ml-[405px] text-center relative top-[82px] mb-[96px]">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[80px] mt-[76px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={burger}
            alt="Burger"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          Big and Juicy Wagyu Beef Cheeseburger
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Chicken
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[540px] mt-[76px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={semga}
            alt="Semga"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={nlike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          Fresh Lime Roasted Salmon with Ginger Sauce
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Fish
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[1000px] mt-[76px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={pancake}
            alt="Pancake"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={nlike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          Strawberry Oatmeal Pancake with Honey Syrup
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Breakfast
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[80px] mt-[550px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={salad}
            alt="Salad"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          Fresh and Healthy Mixed Mayonnaise Salad
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Healthy
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[540px] mt-[550px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={meatballs}
            alt="Meatballs"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={nlike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          Chicken Meatballs with Cream Cheese
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Meat
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] ml-[1000px] mt-[550px]">
        <div className="relative w-full h-full">
          <img src={food} alt="Food" className="w-full h-full object-cover" />

          <img
            src={foto}
            alt="Foto"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[354px] h-[336px]"
          />

          <h3 className="absolute bottom-[336px] left-[114px] right-[114px] text-[#FFF] text-center font-lobster text-[18px] leading-normal">
            Don’t forget to eat healthy food
          </h3>

          <span className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-[rgba(255,255,255,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] leading-normal">
            www.foodieland.com
          </span>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[80px] mt-[1020px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={sweet}
            alt="Sweet"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          Fruity Pancake with Orange & Blueberry
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Sweet
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[540px] mt-[1020px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={chiken}
            alt="Chiken"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={nlike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          The Best Easy One Pot Chicken and Rice
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Snack
            </span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer absolute flex-shrink-0 w-[400px] h-[434px] rounded-[30px] ml-[1000px] mt-[1020px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] transform hover:bg-blue-200 transition duration-500 hover:scale-110">
        <div className="relative">
          <img
            src={pasta}
            alt="Pasta"
            className="flex-shrink-0 w-[368px] h-[250px] mt-[16px] ml-[16px] mb-[24px]"
          />
          <img
            src={nlike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[20px] right-[35px]"
          />
        </div>

        <h3 className="w-[352px] h-[64px] text-[#000] font-inter text-[24px] font-semibold leading-[28px] tracking-[-0.96px] ml-[24px] mb-[24px]">
          The Creamiest Creamy Chicken and Bacon Pasta
        </h3>

        <div className="flex items-center ml-[24px]">
          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px]">
            <img
              src={Timer}
              alt="Timer"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[73px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              30 Minutes
            </span>
          </div>

          <div className="flex items-center flex-shrink-0 w-[107px] h-[24px] ml-[24px]">
            <img
              src={ForkKnife}
              alt="ForkKnife"
              className="flex-shrink-0 w-[24px] h-[24px]"
            />
            <span className="w-[53px] h-[17px] ml-[10px] text-[rgba(0,0,0,0.60)] font-inter text-[14px] font-medium tracking-[-0.28px] flex items-center justify-center">
              Noodles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
