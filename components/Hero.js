import styles from '../styles/Hero.module.css';

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          
          {ctaText && ctaLink && (
            <a href={ctaLink} className={`btn ${styles.ctaButton}`}>
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
