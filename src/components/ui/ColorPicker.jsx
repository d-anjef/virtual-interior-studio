import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import './ColorPicker.css';

const ColorPicker = ({ value, onChange, label }) => {
  const [showPicker, setShowPicker] = useState(false);

  const presetColors = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b',
    '#10b981', '#14b8a6', '#ef4444', '#3b82f6'
  ];

  return (
    <div className="color-picker">
      {label && <label className="color-picker-label">{label}</label>}
      
      <div className="color-picker-preview" onClick={() => setShowPicker(!showPicker)}>
        <div className="color-swatch" style={{ background: value }} />
        <span className="color-value">{value}</span>
      </div>

      {showPicker && (
        <div className="color-picker-popover">
          <div className="color-picker-overlay" onClick={() => setShowPicker(false)} />
          <div className="color-picker-content">
            <HexColorPicker color={value} onChange={onChange} />
            
            <div className="preset-colors">
              {presetColors.map((color) => (
                <button
                  key={color}
                  className="preset-color"
                  style={{ background: color }}
                  onClick={() => {
                    onChange(color);
                    setShowPicker(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;