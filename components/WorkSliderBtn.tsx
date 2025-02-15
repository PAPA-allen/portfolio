"use client";
import React, { FC } from 'react';
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type Props = {
  containerStyles: string;
  btnStyles: string;
  iconStyles?: string;
};

const WorkSliderBtn: FC<Props> = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();

  // Ensure swiper functions are called correctly
  const handlePrev = () => swiper.slidePrev();
  const handleNext = () => swiper.slideNext();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrev}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={handleNext}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
