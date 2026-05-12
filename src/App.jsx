import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import { WorkspaceProvider } from './context/WorkspaceContext';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Workspace from './pages/Workspace';
import Gallery from './pages/Gallery';
import Dashboard from './pages/Dashboard';
import LoadingScreen from './components/ui/LoadingScreen';
import './styles/global.css';
import './styles/variables.css';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <AppProvider>
      <ThemeProvider>
        <WorkspaceProvider>
          <Router>
            <div className="app">
              <Header />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/workspace" element={<Workspace />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </AnimatePresence>
              <Toaster 
                position="bottom-right"
                toastOptions={{
                  style: {
                    background: 'var(--glass-bg)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(20px)'
                  }
                }}
              />
            </div>
          </Router>
        </WorkspaceProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;