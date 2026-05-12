import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../ui/GlassCard';
import { IoAdd } from 'react-icons/io5';
import './FurniturePanel.css';

const FurniturePanel = ({ onAddFurniture }) => {
  const furnitureCategories = [
    {
      name: 'Seating',
      items: [
        { id: 'sofa-1', name: 'Modern Sofa', icon: '🛋️', size: { width: 2, height: 1, depth: 1 } },
        { id: 'chair-1', name: 'Accent Chair', icon: '🪑', size: { width: 1, height: 1, depth: 1 } },
        { id: 'bench-1', name: 'Bench', icon: '🪑', size: { width: 1.5, height: 0.5, depth: 0.5 } }
      ]
    },
    {
      name: 'Tables',
      items: [
        { id: 'table-1', name: 'Coffee Table', icon: '🪑', size: { width: 1.5, height: 0.5, depth: 1 } },
        { id: 'desk-1', name: 'Desk', icon: '🪑', size: { width: 2, height: 0.8, depth: 1 } },
        { id: 'side-1', name: 'Side Table', icon: '🪑', size: { width: 0.5, height: 0.6, depth: 0.5 } }
      ]
    },
    {
      name: 'Storage',
      items: [
        { id: 'shelf-1', name: 'Bookshelf', icon: '📚', size: { width: 1.5, height: 2, depth: 0.4 } },
        { id: 'cabinet-1', name: 'Cabinet', icon: '🗄️', size: { width: 1, height: 1.5, depth: 0.5 } },
        { id: 'drawer-1', name: 'Drawers', icon: '🗄️', size: { width: 1, height: 1, depth: 0.6 } }
      ]
    }
  ];

  return (
    <div className="furniture-panel">
      <h3 className="panel-title">Furniture Library</h3>
      
      {furnitureCategories.map((category, index) => (
        <div key={category.name} className="furniture-category">
          <h4 className="category-title">{category.name}</h4>
          <div className="furniture-items">
            {category.items.map((item) => (
              <motion.div
                key={item.id}
                className="furniture-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAddFurniture(item)}
              >
                <span className="furniture-icon">{item.icon}</span>
                <span className="furniture-name">{item.name}</span>
                <IoAdd className="add-icon" />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurniturePanel;