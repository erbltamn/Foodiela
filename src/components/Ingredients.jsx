import React, { useState } from "react";
// import { Check } from "lucide-react";

// const ingredients = [
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
// ];

const Ingredients = () => {
  //   const [selected, setSelected] = (useState < number) | (null > null);

  return (
    <div className="flex-shrink-0 w-[840px] h-[561px] ml-[90px] mt-[80px]">
      <h2 className="w-[184px] h-[44px] text-[#000] font-inter text-[36px] font-semibold tracking-[-1.44px]">
        Ingredients
      </h2>
      <h3 className="w-[144px] h-[29px] text-[#000] font-inter text-[24px] font-semibold tracking-[-0.96px] mt-[48px]">
        For main dish
      </h3>
      <h3>Hello</h3>
      {/* 
      <div className="mt-4 space-y-2">
        {ingredients.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setSelected(index)}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border transition ${
                selected === index
                  ? "bg-black border-black text-white"
                  : "border-gray-400"
              }`}
            >
              {selected === index && <Check size={16} />}
            </div>
            <span
              className={`text-lg transition ${
                selected === index ? "text-gray-400 line-through" : "text-black"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Ingredients;
