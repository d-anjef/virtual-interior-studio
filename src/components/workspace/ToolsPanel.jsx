import React from 'react';
import { motion } from 'framer-motion';
import Tooltip from '../../ui/Tooltip';
import { 
  IoMove, 
  IoResize, 
  IoSync, 
  IoCopy,
  IoTrash 
} from 'react-icons/io5';
import './ToolsPanel.css';

const ToolsPanel = ({ activeTool, onToolChange }) => {
  const tools = [
    { id: 'select', icon: <IoMove />, label: 'Move' },
    { id: 'resize', icon: <IoResize />, label: 'Resize' },
    { id: 'rotate', icon: <IoSync />, label: 'Rotate' },
    { id: 'duplicate', icon: <IoCopy />, label: 'Duplicate' },
    { id: 'delete', icon: <IoTrash />, label: 'Delete' }
  ];

  return (
    <div className="tools-panel">
      {tools.map((tool) => (
        <Tooltip key={tool.id} content={tool.label} position="right">
          <motion.button
            className={`tool-btn ${activeTool === tool.id ? 'active' : ''}`}
            onClick={() => onToolChange(tool.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tool.icon}
          </motion.button>
        </Tooltip>
      ))}
    </div>
  );
};

export default ToolsPanel;