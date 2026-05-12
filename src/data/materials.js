export const materials = {
  wood: {
    name: 'Wood',
    types: [
      { id: 'oak', name: 'Oak', color: '#b8956a', roughness: 0.8 },
      { id: 'walnut', name: 'Walnut', color: '#5c4033', roughness: 0.7 },
      { id: 'maple', name: 'Maple', color: '#d4b896', roughness: 0.75 },
      { id: 'cherry', name: 'Cherry', color: '#9c4d3f', roughness: 0.7 },
      { id: 'pine', name: 'Pine', color: '#e4d5b7', roughness: 0.85 }
    ]
  },
  metal: {
    name: 'Metal',
    types: [
      { id: 'steel', name: 'Steel', color: '#8a8a8a', roughness: 0.3, metalness: 0.9 },
      { id: 'brass', name: 'Brass', color: '#d4af37', roughness: 0.4, metalness: 0.8 },
      { id: 'copper', name: 'Copper', color: '#b87333', roughness: 0.5, metalness: 0.8 },
      { id: 'aluminum', name: 'Aluminum', color: '#c0c0c0', roughness: 0.3, metalness: 0.9 },
      { id: 'iron', name: 'Iron', color: '#3d3d3d', roughness: 0.6, metalness: 0.7 }
    ]
  },
  fabric: {
    name: 'Fabric',
    types: [
      { id: 'cotton', name: 'Cotton', color: '#f5f5f5', roughness: 0.9 },
      { id: 'linen', name: 'Linen', color: '#e8e8d0', roughness: 0.95 },
      { id: 'velvet', name: 'Velvet', color: '#6366f1', roughness: 0.7 },
      { id: 'leather', name: 'Leather', color: '#8b4513', roughness: 0.6 },
      { id: 'silk', name: 'Silk', color: '#f0f0f0', roughness: 0.3 }
    ]
  },
  glass: {
    name: 'Glass',
    types: [
      { id: 'clear', name: 'Clear Glass', color: '#ffffff', roughness: 0.1, transmission: 1 },
      { id: 'frosted', name: 'Frosted Glass', color: '#f0f0f0', roughness: 0.4, transmission: 0.7 },
      { id: 'tinted', name: 'Tinted Glass', color: '#6366f1', roughness: 0.2, transmission: 0.8 }
    ]
  },
  stone: {
    name: 'Stone',
    types: [
      { id: 'marble', name: 'Marble', color: '#f0f0f0', roughness: 0.4 },
      { id: 'granite', name: 'Granite', color: '#3d3d3d', roughness: 0.5 },
      { id: 'limestone', name: 'Limestone', color: '#d4d4d4', roughness: 0.6 },
      { id: 'slate', name: 'Slate', color: '#2d2d2d', roughness: 0.7 }
    ]
  }
};

export const colorPalettes = {
  modern: {
    name: 'Modern',
    colors: ['#ffffff', '#f5f5f5', '#e0e0e0', '#6366f1', '#8b5cf6', '#1a1a24']
  },
  luxury: {
    name: 'Luxury',
    colors: ['#ffffff', '#f5f5dc', '#d4af37', '#8b4513', '#2c1810', '#1a1a24']
  },
  minimalist: {
    name: 'Minimalist',
    colors: ['#ffffff', '#f5f5f5', '#e0e0e0', '#9e9e9e', '#616161', '#212121']
  },
  warm: {
    name: 'Warm',
    colors: ['#fff8dc', '#ffe4b5', '#deb887', '#d2691e', '#a0522d', '#8b4513']
  },
  cool: {
    name: 'Cool',
    colors: ['#f0f8ff', '#e6f2ff', '#b3d9ff', '#6495ed', '#4169e1', '#191970']
  },
  vibrant: {
    name: 'Vibrant',
    colors: ['#ff6b6b', '#f59e0b', '#10b981', '#6366f1', '#8b5cf6', '#ec4899']
  }
};

export const getMaterial = (category, type) => {
  return materials[category]?.types.find(t => t.id === type);
};

export const getAllMaterials = () => {
  return Object.values(materials).flatMap(cat => cat.types);
};

export default materials;