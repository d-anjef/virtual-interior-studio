export const furnitureCategories = {
  seating: {
    name: 'Seating',
    items: [
      {
        id: 'sofa-modern-1',
        name: 'Modern Sofa',
        category: 'seating',
        icon: '🛋️',
        size: { width: 2.2, height: 0.8, depth: 0.9 },
        color: '#6366f1',
        price: 1299,
        description: 'Contemporary 3-seater sofa with clean lines',
        materials: ['fabric', 'wood'],
        styles: ['modern', 'minimalist']
      },
      {
        id: 'chair-accent-1',
        name: 'Accent Chair',
        category: 'seating',
        icon: '🪑',
        size: { width: 0.8, height: 0.9, depth: 0.8 },
        color: '#8b5cf6',
        price: 499,
        description: 'Elegant accent chair with curved backrest',
        materials: ['velvet', 'metal'],
        styles: ['modern', 'luxury']
      },
      {
        id: 'sofa-sectional-1',
        name: 'Sectional Sofa',
        category: 'seating',
        icon: '🛋️',
        size: { width: 3.2, height: 0.8, depth: 1.6 },
        color: '#ec4899',
        price: 2499,
        description: 'L-shaped sectional for spacious living',
        materials: ['leather', 'wood'],
        styles: ['contemporary', 'luxury']
      },
      {
        id: 'armchair-lounge-1',
        name: 'Lounge Armchair',
        category: 'seating',
        icon: '🪑',
        size: { width: 0.9, height: 0.85, depth: 0.9 },
        color: '#14b8a6',
        price: 699,
        description: 'Comfortable lounge chair with ottoman',
        materials: ['fabric', 'wood'],
        styles: ['mid-century', 'modern']
      },
      {
        id: 'bench-entryway-1',
        name: 'Entryway Bench',
        category: 'seating',
        icon: '🪑',
        size: { width: 1.2, height: 0.5, depth: 0.4 },
        color: '#f59e0b',
        price: 299,
        description: 'Minimalist bench with storage',
        materials: ['wood', 'metal'],
        styles: ['minimalist', 'industrial']
      }
    ]
  },
  tables: {
    name: 'Tables',
    items: [
      {
        id: 'table-coffee-1',
        name: 'Coffee Table',
        category: 'tables',
        icon: '⬜',
        size: { width: 1.2, height: 0.4, depth: 0.6 },
        color: '#6366f1',
        price: 399,
        description: 'Modern glass-top coffee table',
        materials: ['glass', 'metal'],
        styles: ['modern', 'minimalist']
      },
      {
        id: 'desk-office-1',
        name: 'Office Desk',
        category: 'tables',
        icon: '🪑',
        size: { width: 1.5, height: 0.75, depth: 0.7 },
        color: '#8b5cf6',
        price: 799,
        description: 'Spacious desk with cable management',
        materials: ['wood', 'metal'],
        styles: ['modern', 'professional']
      },
      {
        id: 'table-dining-1',
        name: 'Dining Table',
        category: 'tables',
        icon: '⬜',
        size: { width: 2, height: 0.75, depth: 1 },
        color: '#ec4899',
        price: 1199,
        description: 'Elegant 6-seater dining table',
        materials: ['wood'],
        styles: ['traditional', 'modern']
      },
      {
        id: 'table-side-1',
        name: 'Side Table',
        category: 'tables',
        icon: '⬜',
        size: { width: 0.5, height: 0.6, depth: 0.5 },
        color: '#10b981',
        price: 149,
        description: 'Compact bedside table',
        materials: ['wood', 'metal'],
        styles: ['minimalist', 'modern']
      },
      {
        id: 'table-console-1',
        name: 'Console Table',
        category: 'tables',
        icon: '⬜',
        size: { width: 1.2, height: 0.8, depth: 0.35 },
        color: '#f59e0b',
        price: 499,
        description: 'Narrow console for hallways',
        materials: ['wood', 'marble'],
        styles: ['contemporary', 'luxury']
      }
    ]
  },
  storage: {
    name: 'Storage',
    items: [
      {
        id: 'shelf-bookcase-1',
        name: 'Bookshelf',
        category: 'storage',
        icon: '📚',
        size: { width: 1.2, height: 2, depth: 0.35 },
        color: '#6366f1',
        price: 599,
        description: 'Modern open bookshelf with 5 shelves',
        materials: ['wood', 'metal'],
        styles: ['modern', 'industrial']
      },
      {
        id: 'cabinet-storage-1',
        name: 'Storage Cabinet',
        category: 'storage',
        icon: '🗄️',
        size: { width: 0.9, height: 1.5, depth: 0.45 },
        color: '#8b5cf6',
        price: 699,
        description: 'Multi-purpose cabinet with doors',
        materials: ['wood'],
        styles: ['scandinavian', 'modern']
      },
      {
        id: 'dresser-bedroom-1',
        name: 'Bedroom Dresser',
        category: 'storage',
        icon: '🗄️',
        size: { width: 1.5, height: 0.9, depth: 0.5 },
        color: '#ec4899',
        price: 899,
        description: 'Spacious 6-drawer dresser',
        materials: ['wood'],
        styles: ['traditional', 'modern']
      },
      {
        id: 'wardrobe-1',
        name: 'Wardrobe',
        category: 'storage',
        icon: '🚪',
        size: { width: 2, height: 2.2, depth: 0.6 },
        color: '#14b8a6',
        price: 1499,
        description: 'Large wardrobe with mirror doors',
        materials: ['wood', 'mirror'],
        styles: ['contemporary', 'minimalist']
      },
      {
        id: 'shelf-floating-1',
        name: 'Floating Shelf',
        category: 'storage',
        icon: '📚',
        size: { width: 1, height: 0.05, depth: 0.25 },
        color: '#f59e0b',
        price: 79,
        description: 'Wall-mounted floating shelf',
        materials: ['wood'],
        styles: ['minimalist', 'modern']
      }
    ]
  },
  lighting: {
    name: 'Lighting',
    items: [
      {
        id: 'lamp-floor-1',
        name: 'Floor Lamp',
        category: 'lighting',
        icon: '💡',
        size: { width: 0.3, height: 1.7, depth: 0.3 },
        color: '#6366f1',
        price: 249,
        description: 'Modern arc floor lamp',
        materials: ['metal', 'fabric'],
        styles: ['modern', 'minimalist']
      },
      {
        id: 'lamp-table-1',
        name: 'Table Lamp',
        category: 'lighting',
        icon: '💡',
        size: { width: 0.2, height: 0.5, depth: 0.2 },
        color: '#8b5cf6',
        price: 129,
        description: 'Ceramic base table lamp',
        materials: ['ceramic', 'fabric'],
        styles: ['traditional', 'modern']
      },
      {
        id: 'chandelier-1',
        name: 'Chandelier',
        category: 'lighting',
        icon: '💡',
        size: { width: 0.8, height: 0.6, depth: 0.8 },
        color: '#d4af37',
        price: 799,
        description: 'Crystal chandelier',
        materials: ['crystal', 'metal'],
        styles: ['luxury', 'traditional']
      }
    ]
  },
  decor: {
    name: 'Decor',
    items: [
      {
        id: 'plant-large-1',
        name: 'Indoor Plant',
        category: 'decor',
        icon: '🪴',
        size: { width: 0.4, height: 1.2, depth: 0.4 },
        color: '#10b981',
        price: 89,
        description: 'Large potted plant',
        materials: ['ceramic'],
        styles: ['natural', 'modern']
      },
      {
        id: 'rug-area-1',
        name: 'Area Rug',
        category: 'decor',
        icon: '🧣',
        size: { width: 2.5, height: 0.02, depth: 2 },
        color: '#ec4899',
        price: 399,
        description: 'Hand-woven area rug',
        materials: ['wool'],
        styles: ['bohemian', 'modern']
      },
      {
        id: 'mirror-wall-1',
        name: 'Wall Mirror',
        category: 'decor',
        icon: '🪞',
        size: { width: 0.8, height: 1.2, depth: 0.05 },
        color: '#d4af37',
        price: 249,
        description: 'Full-length wall mirror',
        materials: ['mirror', 'metal'],
        styles: ['modern', 'minimalist']
      },
      {
        id: 'artwork-canvas-1',
        name: 'Canvas Artwork',
        category: 'decor',
        icon: '🖼️',
        size: { width: 1, height: 0.8, depth: 0.05 },
        color: '#6366f1',
        price: 199,
        description: 'Abstract canvas print',
        materials: ['canvas'],
        styles: ['modern', 'abstract']
      }
    ]
  }
};

export const getAllFurniture = () => {
  return Object.values(furnitureCategories).flatMap(cat => cat.items);
};

export const getFurnitureByCategory = (category) => {
  return furnitureCategories[category]?.items || [];
};

export const getFurnitureById = (id) => {
  return getAllFurniture().find(item => item.id === id);
};

export default furnitureCategories;