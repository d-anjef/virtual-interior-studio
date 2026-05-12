import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsGrid.css';

const ProjectsGrid = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;