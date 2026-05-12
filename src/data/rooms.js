export const roomTemplates = {
  empty: {
    id: 'empty',
    name: 'Empty Room',
    description: 'Start from scratch',
    dimensions: { width: 10, height: 3, depth: 10 },
    furniture: [],
    thumbnail: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400'
  },
  livingRoom: {
    id: 'living-room',
    name: 'Living Room',
    description: 'Cozy living space setup',
    dimensions: { width: 12, height: 3, depth: 10 },
    furniture: [
      { type: 'sofa', position: { x: 0, y: 0.4, z: -3 }, color: '#6366f1' },
      { type: 'coffee-table', position: { x: 0, y: 0.2, z: -1 }, color: '#8b5cf6' },
      { type: 'tv-stand', position: { x: 0, y: 0.3, z: 4.5 }, color: '#1a1a24' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400'
  },
  bedroom: {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Comfortable bedroom layout',
    dimensions: { width: 10, height: 3, depth: 10 },
    furniture: [
      { type: 'bed', position: { x: 0, y: 0.4, z: 0 }, color: '#8b5cf6' },
      { type: 'nightstand', position: { x: -1.5, y: 0.3, z: 0 }, color: '#6366f1' },
      { type: 'dresser', position: { x: 3, y: 0.45, z: -4 }, color: '#ec4899' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400'
  },
  office: {
    id: 'office',
    name: 'Home Office',
    description: 'Productive workspace',
    dimensions: { width: 8, height: 3, depth: 8 },
    furniture: [
      { type: 'desk', position: { x: 0, y: 0.375, z: -2 }, color: '#6366f1' },
      { type: 'office-chair', position: { x: 0, y: 0.45, z: 0 }, color: '#8b5cf6' },
      { type: 'bookshelf', position: { x: -3.5, y: 1, z: 0 }, color: '#1a1a24' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'
  },
  kitchen: {
    id: 'kitchen',
    name: 'Modern Kitchen',
    description: 'Functional kitchen space',
    dimensions: { width: 12, height: 3, depth: 8 },
    furniture: [
      { type: 'island', position: { x: 0, y: 0.45, z: 0 }, color: '#1a1a24' },
      { type: 'dining-table', position: { x: 0, y: 0.375, z: 3 }, color: '#6366f1' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400'
  },
  diningRoom: {
    id: 'dining-room',
    name: 'Dining Room',
    description: 'Elegant dining setup',
    dimensions: { width: 10, height: 3, depth: 10 },
    furniture: [
      { type: 'dining-table', position: { x: 0, y: 0.375, z: 0 }, color: '#8b5cf6' },
      { type: 'buffet', position: { x: 0, y: 0.4, z: -4 }, color: '#6366f1' }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400'
  }
};

export const getRoomTemplate = (id) => {
  return roomTemplates[id];
};

export const getAllRoomTemplates = () => {
  return Object.values(roomTemplates);
};

export default roomTemplates;