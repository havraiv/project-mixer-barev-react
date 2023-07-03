import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './components/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState('');
  const [greenValue, setGreenValue] = useState('');
  const [blueValue, setBlueValue] = useState('');
  const setColorValue = (value) => {
    console.log(value);
  };
  console.log(redValue, greenValue, blueValue);
  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          colorName={'Červená'}
          baseColor={'red'}
          onValueChange={setColorValue}
        />
        <ColorSlider
          colorName={'Zelená'}
          baseColor={'green'}
          onValueChange={setColorValue}
        />
        <ColorSlider
          colorName={'Modrá'}
          baseColor={'blue'}
          onValueChange={setColorValue}
        />
      </div>
      <div
        className="color-box"
        id="color-box"
        style={{ background: { color } }}
      ></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
