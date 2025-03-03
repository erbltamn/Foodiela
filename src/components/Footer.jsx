import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/socials/facebook.svg";
import twitterIcon from "../assets/socials/twitter.svg";
import instagramIcon from "../assets/socials/instagram.svg";

const Footer = () => {
  return (
    <div className="flex-shrink-0 w-[1340px] h-[193px] mx-[90px] mt-[160px] mb-[80px]">
      <div className="flex-shrink-0 w-[400px] h-[74px]">
        <h3 className="w-[110px] h-[30px] font-lobster text-[24px] leading-normal">
          Foodieland<span className="text-[#FF7426]">.</span>
        </h3>
        <p className="w-[400px] h-[28px] text-[rgba(0,0,0,0.60)] font-inter text-[16px] font-regular leading-[28px] mt-[16px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
        </p>
      </div>

      <div className="slex-shrink-0 w-[400px] h-[19px] mt-[-60px] ml-[1047px]">
        <ul className="flex gap-6">
          <li>
            <Link
              to="/recipes"
              className="w-[59px] h-[19px] text-black font-inter text-base font-inter-500 leading-none tracking-[-0.32px] hover:text-[#FF7426]"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="w-[34px] h-[19px]  text-black font-inter text-base font-inter-500 leading-none tracking-[-0.32px] hover:text-[#FF7426]"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="w-[60px] h-[19px] text-black font-inter text-base font-inter-500 leading-none tracking-[-0.32px] hover:text-[#FF7426]"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="w-[67px] h-[19px] text-black font-inter text-base font-inter-500 leading-none tracking-[-0.32px] hover:text-[#FF7426]"
            >
              About us
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="w-[1340px] h-[0px] flex-shrink-0 border-b border-[rgba(0,0,0,0.10)] mt-[100px]"
        style={{ strokeWidth: "1px" }}
      ></div>

      <div className="w-[336px] h-[23px] font3 text-[18px] tracking-[-0.36px] ml-[552px] mt-[48px]">
        © 2020 Flowbase. Powered by{" "}
        <span className="text-[#FF7967]">Webflow</span>
      </div>

      <div className="flex items-center gap-4 ml-[1250px] mt-[-20px]">
        <a href="#">
          <img
            src={facebookIcon}
            alt="Facebook"
            className="w-[9.9px] h-[19.8px] flex-shrink-0 hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="#">
          <img
            src={twitterIcon}
            alt="Twitter"
            className="w-[22px] h-[17.9px] flex-shrink-0 hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="#">
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-[22px] h-[22px] flex-shrink-0 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
