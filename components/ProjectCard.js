import { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={styles.projectCard}>
      <div className={styles.imageContainer} role="img" aria-label={`Immagine del progetto: ${project.title}`}>
        <div 
          className={styles.imagePlaceholder} 
          style={{ backgroundColor: project.placeholderColor || '#e0e0e0' }}
          aria-hidden="true"
        >
          <div className={styles.svgContainer}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              role="presentation"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>{project.title}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.category} role="text">{project.category}</p>
        
        <div className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}>
          <p>{project.description}</p>
        </div>
        
        {project.description.length > 150 && (
          <button 
            className={styles.expandBtn} 
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            aria-controls={`desc-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {isExpanded ? 'Mostra meno' : 'Leggi di più'}
          </button>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
