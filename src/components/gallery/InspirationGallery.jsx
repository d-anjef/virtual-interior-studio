import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryCard from './GalleryCard';
import FilterBar from './FilterBar';
import Modal from '../ui/Modal';
import './InspirationGallery.css';

const InspirationGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filters, setFilters] = useState({ category: 'all' });

  const galleryItems = [
    {
      id: 1,
      title: 'Luxury Modern Living',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      designer: 'Elite Design Studio',
      likes: 342
    },
    {
      id: 2,
      title: 'Minimalist Sanctuary',
      category: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      designer: 'Zen Interiors',
      likes: 289
    },
    {
      id: 3,
      title: 'Chef\'s Paradise',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      designer: 'Culinary Spaces',
      likes: 567
    }
  ];

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="inspiration-gallery">
      <FilterBar onFilterChange={handleFilterChange} />
      
      <div className="gallery-grid-container">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GalleryCard item={item} onClick={setSelectedItem} />
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
        size="lg"
      >
        {selectedItem && (
          <div className="gallery-modal-content">
            <img src={selectedItem.image} alt={selectedItem.title} />
            <div className="modal-details">
              <p><strong>Category:</strong> {selectedItem.category}</p>
              <p><strong>Designer:</strong> {selectedItem.designer}</p>
              <p><strong>Likes:</strong> {selectedItem.likes}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InspirationGallery;