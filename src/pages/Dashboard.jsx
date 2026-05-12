import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { 
  IoAdd, 
  IoTrendingUp, 
  IoFolder, 
  IoHeart,
  IoEye 
} from 'react-icons/io5';
import './Dashboard.css';
import Footer from '../components/layout/Footer';

const Dashboard = () => {
  const stats = [
    { label: 'Total Projects', value: '24', icon: <IoFolder />, color: '#6366f1' },
    { label: 'Total Views', value: '1.2K', icon: <IoEye />, color: '#8b5cf6' },
    { label: 'Total Likes', value: '856', icon: <IoHeart />, color: '#ec4899' },
    { label: 'Growth', value: '+23%', icon: <IoTrendingUp />, color: '#10b981' }
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'Modern Living Room',
      date: '2024-01-15',
      status: 'Completed',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400'
    },
    {
      id: 2,
      name: 'Minimalist Bedroom',
      date: '2024-01-14',
      status: 'In Progress',
      thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400'
    },
    {
      id: 3,
      name: 'Contemporary Kitchen',
      date: '2024-01-13',
      status: 'Draft',
      thumbnail: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400'
    }
  ];

  return (
    <div className="dashboard-page">
      <motion.div 
        className="dashboard-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your design overview</p>
        </div>
        <Button variant="primary" icon={<IoAdd />}>New Project</Button>
      </motion.div>

      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard hover>
              <div className="stat-card">
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="dashboard-content">
        <GlassCard className="projects-section">
          <div className="section-header">
            <h2>Recent Projects</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="projects-list">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.date}</p>
                </div>
                <div className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;