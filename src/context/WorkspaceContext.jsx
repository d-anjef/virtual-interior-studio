import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const WorkspaceContext = createContext();

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within WorkspaceProvider');
  }
  return context;
};

export const WorkspaceProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [roomDimensions, setRoomDimensions] = useState({
    width: 10,
    height: 3,
    depth: 10
  });
  const [furniture, setFurniture] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightingConfig, setLightingConfig] = useState({
    intensity: 1,
    color: '#ffffff',
    ambientIntensity: 0.3
  });
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [viewMode, setViewMode] = useState('3d'); // '3d', '2d', 'perspective'

  // Create new project
  const createProject = useCallback((name, template = 'empty') => {
    const newProject = {
      id: uuidv4(),
      name,
      template,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      roomDimensions: { width: 10, height: 3, depth: 10 },
      furniture: [],
      lighting: { intensity: 1, color: '#ffffff', ambientIntensity: 0.3 }
    };

    setProjects(prev => [...prev, newProject]);
    setCurrentProject(newProject);
    return newProject;
  }, []);

  // Save current project
  const saveProject = useCallback(() => {
    if (!currentProject) return;

    const updatedProject = {
      ...currentProject,
      roomDimensions,
      furniture,
      lighting: lightingConfig,
      updatedAt: new Date().toISOString()
    };

    setProjects(prev => 
      prev.map(p => p.id === currentProject.id ? updatedProject : p)
    );
    setCurrentProject(updatedProject);

    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [currentProject, roomDimensions, furniture, lightingConfig, projects]);

  // Load project
  const loadProject = useCallback((projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setRoomDimensions(project.roomDimensions);
      setFurniture(project.furniture);
      setLightingConfig(project.lighting);
    }
  }, [projects]);

  // Add furniture item
  const addFurniture = useCallback((item) => {
    const newItem = {
      ...item,
      id: uuidv4(),
      position: item.position || { x: 0, y: item.size?.height / 2 || 0.5, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      color: item.color || '#6366f1',
      visible: true,
      locked: false
    };

    setFurniture(prev => [...prev, newItem]);
    addToHistory('add', newItem);
    return newItem;
  }, []);

  // Update furniture item
  const updateFurniture = useCallback((id, updates) => {
    setFurniture(prev =>
      prev.map(item => item.id === id ? { ...item, ...updates } : item)
    );
    addToHistory('update', { id, updates });
  }, []);

  // Delete furniture item
  const deleteFurniture = useCallback((id) => {
    const item = furniture.find(f => f.id === id);
    setFurniture(prev => prev.filter(f => f.id !== id));
    addToHistory('delete', item);
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  }, [furniture, selectedItem]);

  // Duplicate furniture item
  const duplicateFurniture = useCallback((id) => {
    const item = furniture.find(f => f.id === id);
    if (item) {
      const newItem = {
        ...item,
        id: uuidv4(),
        position: {
          x: item.position.x + 0.5,
          y: item.position.y,
          z: item.position.z + 0.5
        }
      };
      setFurniture(prev => [...prev, newItem]);
      addToHistory('add', newItem);
      return newItem;
    }
  }, [furniture]);

  // Toggle furniture visibility
  const toggleFurnitureVisibility = useCallback((id) => {
    setFurniture(prev =>
      prev.map(item => 
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  }, []);

  // History management
  const addToHistory = useCallback((action, data) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ action, data, timestamp: Date.now() });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      // Apply previous state
      const prevAction = history[historyIndex - 1];
      // Implementation depends on action type
    }
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      // Apply next state
      const nextAction = history[historyIndex + 1];
      // Implementation depends on action type
    }
  }, [historyIndex, history]);

  // Clear workspace
  const clearWorkspace = useCallback(() => {
    setFurniture([]);
    setSelectedItem(null);
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  // Export project data
  const exportProject = useCallback(() => {
    const exportData = {
      project: currentProject,
      roomDimensions,
      furniture,
      lighting: lightingConfig,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(exportData, null, 2);
  }, [currentProject, roomDimensions, furniture, lightingConfig]);

  const value = {
    // State
    projects,
    currentProject,
    roomDimensions,
    furniture,
    selectedItem,
    lightingConfig,
    history,
    historyIndex,
    viewMode,

    // Actions
    setRoomDimensions,
    setSelectedItem,
    setLightingConfig,
    setViewMode,
    createProject,
    saveProject,
    loadProject,
    addFurniture,
    updateFurniture,
    deleteFurniture,
    duplicateFurniture,
    toggleFurnitureVisibility,
    undo,
    redo,
    clearWorkspace,
    exportProject
  };

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkspaceContext;