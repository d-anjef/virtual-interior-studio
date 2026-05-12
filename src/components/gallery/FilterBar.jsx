import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { IoFilter, IoClose } from 'react-icons/io5';
import './FilterBar.css';

const FilterBar = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'All',
    'Living Room',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Office',
    'Dining Room'
  ];

  const styles = ['Modern', 'Minimalist', 'Industrial', 'Scandinavian', 'Luxury'];

  const handleCategoryChange = (category) => {
    const value = category.toLowerCase().replace(' ', '-');
    setActiveCategory(value);
    onFilterChange({ category: value });
  };

  return (
    <div className="filter-bar">
      <div className="filter-categories">
        {categories.map((category) => {
          const value = category.toLowerCase().replace(' ', '-');
          return (
            <motion.button
              key={category}
              className={`filter-btn ${activeCategory === value ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          );
        })}
      </div>

      <Button
        variant="secondary"
        icon={showFilters ? <IoClose /> : <IoFilter />}
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Close' : 'Filters'}
      </Button>

      {showFilters && (
        <motion.div
          className="filter-panel"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="filter-group">
            <h4>Style</h4>
            <div className="filter-options">
              {styles.map((style) => (
                <label key={style} className="filter-checkbox">
                  <input type="checkbox" />
                  <span>{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="filter-range">
              <input type="range" min="0" max="10000" />
              <div className="range-labels">
                <span>$0</span>
                <span>$10,000</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FilterBar;