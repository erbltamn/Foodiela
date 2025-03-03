import React from "react";
import fruit from "../assets/optionsF/fruit.svg";
import like from "../assets/choiceF/like.svg";
import Timer from "../assets/choiceF/Timer.svg";
import ForkKnife from "../assets/choiceF/ForkKnife.svg";
import steak from "../assets/optionsF/steak.svg";
import nLike from "../assets/choiceF/nLike.svg";
import rice from "../assets/optionsF/rice.svg";
import taco from "../assets/optionsF/taco.svg";
import mustard from "../assets/optionsF/mustard.svg";
import snack from "../assets/optionsF/snack.svg";
import wraps from "../assets/optionsF/wraps.svg";
import soup from "../assets/optionsF/soup.svg";

const Options = () => {
  return (
    <div className="flex-shrink-0 w-[1280px] h-[868px] mx-[85px] mt-[150px]">
      <h2 className="w-[507px] h-[116px] text-[#000] font-inter text-[48px] font-semibold tracking-[-1.92px]">
        Try this delicious recipe to make your day
      </h2>
      <p className="w-[620px] h-[56px] text-[rgba(0,0,0,0.60)] font-inter text-[16px] font-regular leading-[28px] ml-[740px] -mt-[60px]">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </p>

      <div className="grid grid-cols-4 gap-[120px] mt-[80px]">
        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={fruit}
            alt="Fruit"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Mixed Tropical Fruit Salad with Superfood Boosts{" "}
          </h4>

          <div className="flex items-center mt-[24px]">
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

        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={steak}
            alt="Steak"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={nLike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Big and Juicy Wagyu Beef Cheeseburger
          </h4>

          <div className="flex items-center mt-[24px]">
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
                Western
              </span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={rice}
            alt="Rice"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Healthy Japanese Fried Rice with Asparagus
          </h4>

          <div className="flex items-center mt-[24px]">
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

        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={taco}
            alt="Taco"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={nLike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Cauliflower Walnut Vegetarian Taco Meat
          </h4>

          <div className="flex items-center mt-[24px]">
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
      </div>

      <div className="grid grid-cols-4 gap-[120px] mt-[80px]">
        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={mustard}
            alt="Mustard"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Rainbow Chicken Salad with Almond Honey Mustard Dressing
          </h4>

          <div className="flex items-center mt-[24px]">
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

        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={snack}
            alt="Snack"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={nLike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Rainbow Chicken Salad with Almond Honey Mustard Dressing
          </h4>

          <div className="flex items-center mt-[24px]">
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

        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={wraps}
            alt="Wraps"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={nLike}
            alt="NLike"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Firecracker Vegan Lettuce Wraps - Spicy!
          </h4>

          <div className="flex items-center mt-[24px]">
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
                Seafood
              </span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-[290px] h-[316px] relative rounded-[20px] transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl">
          <img
            src={soup}
            alt="Soip"
            className="flex-shrink-0 w-[290px] h-[200px]"
          />
          <img
            src={like}
            alt="Like"
            className="absolute flex-shrink-0 w-[48px] h-[48px] top-[16px] right-[16px]"
          />
          <h4 className="w-[290px] h-[52px] text-[#000] font-inter text-[18px] font-semibold leading-[26px] tracking-[-0.72px] mt-[16px]">
            Chicken Ramen Soup with Mushroom
          </h4>

          <div className="flex items-center mt-[24px]">
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
                Japanese
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
