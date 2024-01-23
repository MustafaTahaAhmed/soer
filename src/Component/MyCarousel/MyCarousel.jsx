import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./MyCarousel.css";
import image from "../../assest/Images/MicrosoftTeams-image (1).png";

const MyCarousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="imageslider">
      <img src={image} alt="image" className="imagecar" />
      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`slide ${slide === idx ? "" : "slide-hidden"}`}
            >
              <div className="textcontent">{item.title}</div>
            </div>
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </div>
  );
};

export default MyCarousel;
