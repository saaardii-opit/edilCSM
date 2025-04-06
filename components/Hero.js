import styles from '../styles/Hero.module.css';

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.heroBg} role="img" aria-label="Hero background image">
        <div className={styles.overlay}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          
          {ctaText && ctaLink && (
            <a href={ctaLink} className={`btn ${styles.ctaButton}`} role="button" aria-label={ctaText}>
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
