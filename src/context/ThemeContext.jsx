import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('#6366f1');
  const [fontSize, setFontSize] = useState('base');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load theme preferences from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedAccent = localStorage.getItem('accentColor') || '#6366f1';
    const savedFontSize = localStorage.getItem('fontSize') || 'base';
    const savedMotion = localStorage.getItem('reducedMotion') === 'true';

    setTheme(savedTheme);
    setAccentColor(savedAccent);
    setFontSize(savedFontSize);
    setReducedMotion(savedMotion);

    // Apply to document
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.style.setProperty('--color-accent-primary', savedAccent);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const updateAccentColor = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
    document.documentElement.style.setProperty('--color-accent-primary', color);
  };

  const updateFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', newValue.toString());
    document.documentElement.setAttribute('data-reduced-motion', newValue.toString());
  };

  const value = {
    theme,
    accentColor,
    fontSize,
    reducedMotion,
    toggleTheme,
    updateAccentColor,
    updateFontSize,
    toggleReducedMotion
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;