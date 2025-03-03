import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import insta1 from "../assets/instaF/insta1.svg";
import insta2 from "../assets/instaF/insta2.svg";
import insta3 from "../assets/instaF/insta3.svg";
import insta4 from "../assets/instaF/insta4.svg";
import instagram from "../assets/instaF/instagram.svg";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const Instagram = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [insta1, insta2, insta3, insta4];

  // Обработчик клика правой кнопкой мыши
  const handleRightClick = (index, e) => {
    e.preventDefault(); // Отключаем стандартное меню браузера
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Переключаемся на слайд
    }
  };

  return (
    <div className="w-full h-[964px] justify-center bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD] mt-[350px] relative">
      <div className="flex flex-col items-start text-center ml-[50px]">
        <div className="w-[840px] ml-[300px] mt-[80px]">
          <h2 className="text-[#000] font-inter text-[48px] font-semibold tracking-[-1.92px] mb-[24px] whitespace-nowrap">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-[rgba(0,0,0,0.60)] font-inter text-[16px] leading-[28px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[800px] mx-auto mt-[60px]">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`px-4 transition-all duration-500 ${
                index === currentSlide
                  ? "scale-110 blur-0" // Активный слайд
                  : "scale-90 blur-sm" // Неактивные слайды
              }`}
              onContextMenu={(e) => handleRightClick(index, e)}
            >
              <img
                src={img}
                alt={`Insta${index + 1}`}
                className="w-[290px] h-[500px] rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <a
        href="https://www.instagram.com/erbltamn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="cursor-pointer flex-shrink-0 w-[229px] h-[60px] rounded-[16px] bg-[#000] ml-[650px] mt-[30px] flex items-center">
          <span className="w-[126px] h-[17px] text-[#FFF] font-inter text-[14px] font-semibold tracking-[-0.28px] ml-[32px]">
            Visit Our Instagram
          </span>
          <img
            src={instagram}
            alt="Instagram"
            className="w-[22px] h-[22px] ml-[17px]"
          />
        </div>
      </a>
    </div>
  );
};

export default Instagram;
