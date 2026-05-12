import React from 'react';
import { motion } from 'framer-motion';
import { IoHeart, IoShare, IoBookmark } from 'react-icons/io5';
import './GalleryCard.css';

const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div
      className="gallery-card-item"
      whileHover={{ y: -8 }}
      onClick={() => onClick(item)}
    >
      <div className="gallery-card-image">
        <img src={item.image} alt={item.title} />
        <div className="gallery-card-actions">
          <button className="action-btn">
            <IoHeart />
          </button>
          <button className="action-btn">
            <IoBookmark />
          </button>
          <button className="action-btn">
            <IoShare />
          </button>
        </div>
      </div>
      
      <div className="gallery-card-info">
        <div className="gallery-card-category">{item.category}</div>
        <h3 className="gallery-card-title">{item.title}</h3>
        <div className="gallery-card-meta">
          <span className="designer">{item.designer}</span>
          <span className="likes">
            <IoHeart /> {item.likes}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;