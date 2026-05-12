import React from 'react';
import Slider from '../../ui/Slider';
import ColorPicker from '../../ui/ColorPicker';
import './PropertiesPanel.css';

const PropertiesPanel = ({ selectedItem, onUpdate }) => {
  if (!selectedItem) {
    return (
      <div className="properties-panel">
        <div className="empty-state">
          <p>Select an item to edit properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="properties-panel">
      <h3 className="panel-title">Properties</h3>
      
      <div className="property-section">
        <h4>Transform</h4>
        <Slider
          label="X Position"
          value={selectedItem.position?.x || 0}
          onChange={(val) => onUpdate({ ...selectedItem, position: { ...selectedItem.position, x: val } })}
          min={-10}
          max={10}
          step={0.1}
          unit="m"
        />
        <Slider
          label="Y Position"
          value={selectedItem.position?.y || 0}
          onChange={(val) => onUpdate({ ...selectedItem, position: { ...selectedItem.position, y: val } })}
          min={0}
          max={5}
          step={0.1}
          unit="m"
        />
        <Slider
          label="Z Position"
          value={selectedItem.position?.z || 0}
          onChange={(val) => onUpdate({ ...selectedItem, position: { ...selectedItem.position, z: val } })}
          min={-10}
          max={10}
          step={0.1}
          unit="m"
        />
      </div>

      <div className="property-section">
        <h4>Appearance</h4>
        <ColorPicker
          label="Color"
          value={selectedItem.color || '#6366f1'}
          onChange={(color) => onUpdate({ ...selectedItem, color })}
        />
      </div>

      <div className="property-section">
        <h4>Dimensions</h4>
        <Slider
          label="Width"
          value={selectedItem.size?.width || 1}
          onChange={(val) => onUpdate({ ...selectedItem, size: { ...selectedItem.size, width: val } })}
          min={0.5}
          max={5}
          step={0.1}
          unit="m"
        />
        <Slider
          label="Height"
          value={selectedItem.size?.height || 1}
          onChange={(val) => onUpdate({ ...selectedItem, size: { ...selectedItem.size, height: val } })}
          min={0.5}
          max={5}
          step={0.1}
          unit="m"
        />
        <Slider
          label="Depth"
          value={selectedItem.size?.depth || 1}
          onChange={(val) => onUpdate({ ...selectedItem, size: { ...selectedItem.size, depth: val } })}
          min={0.5}
          max={5}
          step={0.1}
          unit="m"
        />
      </div>
    </div>
  );
};

export default PropertiesPanel;