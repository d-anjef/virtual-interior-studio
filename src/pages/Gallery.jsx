import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { IoSearch, IoFilter, IoGrid, IoList } from 'react-icons/io5';
import './Gallery.css';

const Gallery = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      designer: 'Studio Design Co.',
      likes: 234
    },
    {
      id: 2,
      title: 'Minimalist Bedroom',
      category: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      designer: 'Modern Interiors',
      likes: 189
    },
    {
      id: 3,
      title: 'Luxury Kitchen',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      designer: 'Elite Designs',
      likes: 456
    },
    {
      id: 4,
      title: 'Contemporary Office',
      category: 'Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      designer: 'Workspace Pro',
      likes: 312
    },
    {
      id: 5,
      title: 'Elegant Dining',
      category: 'Dining Room',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
      designer: 'Luxury Living',
      likes: 278
    },
    {
      id: 6,
      title: 'Spa Bathroom',
      category: 'Bathroom',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
      designer: 'Zen Interiors',
      likes: 198
    }
  ];

  return (
    <div className="gallery-page">
      <motion.div 
        className="gallery-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="container">
          <h1>Design Gallery</h1>
          <p>Explore stunning interior designs from our community</p>

          <div className="gallery-controls">
            <div className="search-bar">
              <IoSearch />
              <input 
                type="text" 
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="view-controls">
              <Button 
                variant={viewMode === 'grid' ? 'primary' : 'ghost'} 
                icon={<IoGrid />}
                onClick={() => setViewMode('grid')}
              />
              <Button 
                variant={viewMode === 'list' ? 'primary' : 'ghost'} 
                icon={<IoList />}
                onClick={() => setViewMode('list')}
              />
              <Button variant="secondary" icon={<IoFilter />}>Filters</Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container">
        <div className={`gallery-grid ${viewMode === 'list' ? 'gallery-list' : ''}`}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover glow className="gallery-card">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <Button variant="primary">View Details</Button>
                  </div>
                </div>
                <div className="gallery-info">
                  <div className="gallery-category">{item.category}</div>
                  <h3>{item.title}</h3>
                  <div className="gallery-meta">
                    <span className="designer">{item.designer}</span>
                    <span className="likes">❤️ {item.likes}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;