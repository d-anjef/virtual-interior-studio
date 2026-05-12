import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RoomCanvas from '../components/workspace/RoomCanvas.jsx';
import FloatingDock from '../components/layout/FloatingDock';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { IoAdd, IoDownload, IoShareSocial } from 'react-icons/io5';
import './Workspace.css';

const Workspace = () => {
  const [activeTab, setActiveTab] = useState('furniture');
  const [roomDimensions, setRoomDimensions] = useState({
    width: 10,
    height: 3,
    depth: 10
  });
  const [furniture, setFurniture] = useState([
    {
      id: 1,
      type: 'sofa',
      position: { x: 0, y: 0.5, z: 0 },
      size: { width: 2, height: 1, depth: 1 },
      color: '#6366f1'
    }
  ]);
  const [lightingConfig, setLightingConfig] = useState({
    intensity: 1,
    color: '#ffffff'
  });

  return (
    <div className="workspace-page">
      <motion.div 
        className="workspace-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="workspace-title">
          <h1>Virtual Design Studio</h1>
          <p>Create your dream space</p>
        </div>
        <div className="workspace-actions">
          <Button variant="ghost" icon={<IoShareSocial />}>Share</Button>
          <Button variant="secondary" icon={<IoDownload />}>Export</Button>
          <Button variant="primary" icon={<IoAdd />}>New Project</Button>
        </div>
      </motion.div>

      <div className="workspace-main">
        <GlassCard className="workspace-canvas-container">
          <RoomCanvas 
            roomDimensions={roomDimensions}
            furniture={furniture}
            lightingConfig={lightingConfig}
          />
        </GlassCard>

        <motion.div 
          className="workspace-panel"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard>
            <h3>Properties</h3>
            <div className="property-group">
              <label>Room Width</label>
              <input 
                type="range" 
                min="5" 
                max="20" 
                value={roomDimensions.width}
                onChange={(e) => setRoomDimensions({...roomDimensions, width: Number(e.target.value)})}
              />
            </div>
            <div className="property-group">
              <label>Light Intensity</label>
              <input 
                type="range" 
                min="0" 
                max="2" 
                step="0.1"
                value={lightingConfig.intensity}
                onChange={(e) => setLightingConfig({...lightingConfig, intensity: Number(e.target.value)})}
              />
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <FloatingDock activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Workspace;