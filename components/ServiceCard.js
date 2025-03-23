import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ title, description, icon, features }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconContainer}>
        <div className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      {features && features.length > 0 && (
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
