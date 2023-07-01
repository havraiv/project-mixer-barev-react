import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './components/ColorSlider';

const App = () => {
  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider colorName={'Červená'} baseColor={'red'} />
        <ColorSlider colorName={'Zelená'} baseColor={'green'} />
        <ColorSlider colorName={'Modrá'} baseColor={'blue'} />
      </div>
      <div className="color-box" id="color-box"></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
