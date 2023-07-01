import React, { useState } from 'react';
import './style.css';

export const ColorSlider = ({ baseColor, colorName }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </>
  );
};
