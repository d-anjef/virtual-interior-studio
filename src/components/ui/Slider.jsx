import React from 'react';
import './Slider.css';

const Slider = ({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  unit = '',
  showValue = true 
}) => {
  return (
    <div className="custom-slider">
      <div className="slider-header">
        {label && <label className="slider-label">{label}</label>}
        {showValue && (
          <span className="slider-value">
            {value}{unit}
          </span>
        )}
      </div>
      
      <input
        type="range"
        className="slider-input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      
      <div className="slider-track">
        <div 
          className="slider-fill" 
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;