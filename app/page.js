import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import styles from '../styles/Home.module.css';

export const metadata = {
  title: 'Professional Construction & Restoration Services',
  description: 'Edil CSM delivers quality construction and restoration services. Explore our portfolio of completed projects and see our craftsmanship.',
};

export default function Home() {
  return (
    <>
      <Hero 
        title="Building Excellence, Restoring Beauty" 
        subtitle="Your trusted partner for construction and restoration projects."
        ctaText="View Our Work"
        ctaLink="#portfolio"
        backgroundImage="/hero-construction.svg"
      />
      
      <section className={styles.intro} id="about">
        <div className="container">
          <div className={styles.introContent}>
            <h2>Welcome to Edil CSM</h2>
            <p>
              With over 15 years of experience in the construction industry, Edil CSM has established 
              itself as a leader in construction and restoration projects. Our commitment to quality, 
              attention to detail, and customer satisfaction sets us apart from the competition.
            </p>
            <p>
              From residential renovations to commercial construction, our team of skilled professionals 
              delivers exceptional results on time and within budget. We take pride in our craftsmanship 
              and the relationships we build with our clients.
            </p>
          </div>
        </div>
      </section>
      
      <section className={styles.highlights}>
        <div className="container">
          <div className={styles.highlightsGrid}>
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>We never compromise on quality, using only the best materials and techniques.</p>
            </div>
            
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>Professional Team</h3>
              <p>Our skilled craftsmen and project managers bring expertise to every project.</p>
            </div>
            
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>On-Time Delivery</h3>
              <p>We understand the importance of timelines and deliver projects on schedule.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="portfolio" className={styles.portfolioSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Portfolio</h2>
          <p className={styles.sectionDescription}>
            Explore our diverse range of successful projects, from modern constructions to 
            delicate historical restorations.
          </p>
          <Portfolio />
        </div>
      </section>
      
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <a href="/contact" className="btn">Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  );
}
