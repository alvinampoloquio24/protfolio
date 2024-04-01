/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { JSX } from "react/jsx-runtime";
import GitHubIcon from "@mui/icons-material/GitHub";

interface SlideProps {
  img: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: SlideProps[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className=" w-56 h-86 flex flex-col items-center justify-between rounded-md shadow-md">
              <img src={slide.img} alt="" className=" h-48 rounded-tl-3xl" />
              <div
                className="flex flex-col p-3 relative -top-6 rounded-tr-3xl shadow-md"
                style={{ backgroundColor: "#00606E" }}
              >
                {" "}
                <p className=" text-xl p-1" style={{ color: "#FFF" }}>
                  {slide.title}
                </p>
                <p
                  className=" text-sm  font-thin flex mb-4 h-20 overflow-y-auto"
                  style={{ color: "#FFF" }}
                >
                  {slide.description}
                </p>
                <button
                  className=" py-2 flex gap-2  items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#00DFC3" }}
                >
                  <GitHubIcon sx={{ fontSize: 24, color: "#29384F" }} />
                  <p
                    className=""
                    style={{ color: "#29384F", textDecoration: "underline" }}
                  >
                    View Code
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
