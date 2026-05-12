// App Configuration
export const APP_NAME = 'Virtual Interior Studio';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Create stunning interior designs with immersive 3D visualization';

// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
export const API_TIMEOUT = 30000;

// Storage Keys
export const STORAGE_KEYS = {
  USER: 'user',
  THEME: 'theme',
  PROJECTS: 'projects',
  CURRENT_PROJECT: 'currentProject',
  SETTINGS: 'settings',
  TOKEN: 'authToken'
};

// Routes
export const ROUTES = {
  HOME: '/',
  WORKSPACE: '/workspace',
  GALLERY: '/gallery',
  DASHBOARD: '/dashboard',
  PROJECTS: '/projects',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  LOGIN: '/login',
  REGISTER: '/register'
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 200,
  BASE: 300,
  SLOW: 500,
  SMOOTH: 600,
  VERY_SLOW: 1000
};

// Breakpoints
export const BREAKPOINTS = {
  XS: 480,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};

// Room Presets
export const ROOM_PRESETS = {
  SMALL: { width: 8, height: 3, depth: 8 },
  MEDIUM: { width: 10, height: 3, depth: 10 },
  LARGE: { width: 12, height: 3, depth: 12 },
  EXTRA_LARGE: { width: 15, height: 3.5, depth: 15 }
};

// Camera Presets
export const CAMERA_PRESETS = {
  TOP: { position: [0, 15, 0], rotation: [-Math.PI / 2, 0, 0] },
  FRONT: { position: [0, 2, 10], rotation: [0, 0, 0] },
  SIDE: { position: [10, 2, 0], rotation: [0, Math.PI / 2, 0] },
  ISOMETRIC: { position: [10, 10, 10], rotation: [-Math.PI / 4, Math.PI / 4, 0] }
};

// Lighting Presets
export const LIGHTING_PRESETS = {
  DAY: {
    intensity: 1.2,
    color: '#ffffff',
    ambientIntensity: 0.4
  },
  EVENING: {
    intensity: 0.8,
    color: '#ffd700',
    ambientIntensity: 0.3
  },
  NIGHT: {
    intensity: 0.5,
    color: '#4169e1',
    ambientIntensity: 0.2
  },
  STUDIO: {
    intensity: 1.5,
    color: '#ffffff',
    ambientIntensity: 0.5
  }
};

// Material Quality Presets
export const QUALITY_PRESETS = {
  LOW: {
    antialias: false,
    shadowMapSize: 512,
    pixelRatio: 1
  },
  MEDIUM: {
    antialias: true,
    shadowMapSize: 1024,
    pixelRatio: 1.5
  },
  HIGH: {
    antialias: true,
    shadowMapSize: 2048,
    pixelRatio: 2
  },
  ULTRA: {
    antialias: true,
    shadowMapSize: 4096,
    pixelRatio: window.devicePixelRatio
  }
};

// Export Formats
export const EXPORT_FORMATS = {
  IMAGE: ['png', 'jpg', 'webp'],
  MODEL: ['obj', 'gltf', 'fbx'],
  PROJECT: ['json']
};

// Grid Settings
export const GRID_SETTINGS = {
  SIZE: 20,
  DIVISIONS: 20,
  COLOR_CENTER: '#6366f1',
  COLOR_GRID: '#8b5cf6',
  CELL_SIZE: 0.5,
  SECTION_SIZE: 2
};

// Snapping Settings
export const SNAP_SETTINGS = {
  ENABLED: true,
  GRID_SNAP: 0.5,
  ROTATION_SNAP: 15, // degrees
  SCALE_SNAP: 0.1
};

// Validation Rules
export const VALIDATION = {
  PROJECT_NAME_MIN: 3,
  PROJECT_NAME_MAX: 50,
  MIN_ROOM_SIZE: 3,
  MAX_ROOM_SIZE: 30,
  MIN_FURNITURE_SIZE: 0.1,
  MAX_FURNITURE_SIZE: 10
};

// Default Values
export const DEFAULTS = {
  ROOM_COLOR_FLOOR: '#12121a',
  ROOM_COLOR_WALL: '#1a1a24',
  FURNITURE_COLOR: '#6366f1',
  LIGHTING_INTENSITY: 1,
  CAMERA_FOV: 50,
  CAMERA_NEAR: 0.1,
  CAMERA_FAR: 1000
};

// Feature Flags
export const FEATURES = {
  ENABLE_AR_MODE: false,
  ENABLE_AI_SUGGESTIONS: true,
  ENABLE_COLLABORATION: false,
  ENABLE_CLOUD_SAVE: true,
  ENABLE_ANALYTICS: true
};

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  AUTH_FAILED: 'Authentication failed. Please log in again.',
  PROJECT_LOAD_FAILED: 'Failed to load project.',
  PROJECT_SAVE_FAILED: 'Failed to save project.',
  INVALID_INPUT: 'Invalid input. Please check your data.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  PROJECT_SAVED: 'Project saved successfully!',
  PROJECT_CREATED: 'Project created successfully!',
  PROJECT_DELETED: 'Project deleted successfully!',
  FURNITURE_ADDED: 'Furniture added to scene!',
  SETTINGS_UPDATED: 'Settings updated successfully!'
};

export default {
  APP_NAME,
  APP_VERSION,
  API_BASE_URL,
  STORAGE_KEYS,
  ROUTES,
  ANIMATION_DURATION,
  BREAKPOINTS,
  ROOM_PRESETS,
  CAMERA_PRESETS,
  LIGHTING_PRESETS,
  QUALITY_PRESETS,
  EXPORT_FORMATS,
  GRID_SETTINGS,
  SNAP_SETTINGS,
  VALIDATION,
  DEFAULTS,
  FEATURES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES
};