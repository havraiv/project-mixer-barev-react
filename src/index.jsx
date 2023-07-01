import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './components/ColorSlider';
// Opět uvnitř komponenty App vytvořte tři stavy redValue, greenValue, blueValue. Každý reprezentuje hodnotu jedné z barevných složek. Použijte tyto hodnoty k vytvoření finální barvy uvnitř prvku .color-box
const App = () => {
  const [redValue, setRedValue] = useState('');
  const [greenValue, setGreenValue] = useState('');
  const [blueValue, setBlueValue] = useState('');
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
