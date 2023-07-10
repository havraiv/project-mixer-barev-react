import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './components/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          colorName={'Červená'}
          baseColor={'red'}
          onValueChange={(value) => {
            setRedValue(value);
          }}
        />
        <ColorSlider
          colorName={'Zelená'}
          baseColor={'green'}
          onValueChange={(value) => {
            setGreenValue(value);
          }}
        />
        <ColorSlider
          colorName={'Modrá'}
          baseColor={'blue'}
          onValueChange={(value) => {
            setBlueValue(value);
          }}
        />
      </div>
      <div
        className="color-box"
        id="color-box"
        style={{
          backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
        }}
      ></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
