import React from 'react';
import { motion } from 'framer-motion';
import { IoEllipsisVertical, IoHeart, IoEye, IoTrash, IoCreate } from 'react-icons/io5';
import './ProjectCard.css';

const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-card-image">
        <img src={project.thumbnail} alt={project.name} />
        <div className="project-card-overlay">
          <button className="btn-icon" onClick={() => onEdit(project)}>
            <IoCreate />
          </button>
          <button className="btn-icon btn-danger" onClick={() => onDelete(project)}>
            <IoTrash />
          </button>
        </div>
        <div className="project-card-badge">{project.status}</div>
      </div>
      
      <div className="project-card-content">
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-date">{project.date}</p>
        
        <div className="project-card-stats">
          <span className="stat-item">
            <IoEye /> {project.views || 0}
          </span>
          <span className="stat-item">
            <IoHeart /> {project.likes || 0}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;