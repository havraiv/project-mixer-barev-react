import React, { useState } from 'react';
import './style.css';

export const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (e) => {
    onValueChange(e.target.value);
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
