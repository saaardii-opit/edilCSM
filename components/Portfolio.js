'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from '../styles/Portfolio.module.css';
import { projects } from '../lib/projects';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  const categories = ['tutti', ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  return (
    <div className={styles.portfolio}>
      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className={styles.projectsGrid}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <div className={styles.noProjects}>
            <p>Nessun progetto trovato in questa categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
