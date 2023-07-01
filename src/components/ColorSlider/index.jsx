import React from 'react';
import './style.css';
//  Vytvořte nejprve komponentu ColorSlider zobrazující jeden posuvník. Přesuňte do složky s komponentou správné CSS styly. Komponenta ColorSlider bude mít dvě props: baseColor a colorName. Prop baseColor udává, jakou posuvník ovládá barvu, tedy red, green nebo blue. Prop colorName udává zobrazený název barvy.

export const ColorSlider = ({ baseColor, colorName }) => {
  return (
    <>
      <label for="blue">{colorName}</label>
      <input
        type="range"
        class="slider slider--blue"
        id="blueSlider"
        min="0"
        max="255"
        value="0"
      />
    </>
  );
};
