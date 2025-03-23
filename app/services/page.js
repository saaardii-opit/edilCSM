import ServiceCard from '../../components/ServiceCard';
import styles from '../../styles/Services.module.css';
import { services } from '../../lib/services';

export const metadata = {
  title: 'Our Services',
  description: 'Explore the range of construction and restoration services offered by Edil CSM, including new construction, renovations, and historical restoration.',
};

export default function Services() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction and restoration solutions tailored to your needs</p>
        </div>
      </section>
      
      <section className={styles.servicesIntro}>
        <div className="container">
          <div className={styles.introContent}>
            <h2>What We Offer</h2>
            <p>
              At Edil CSM, we provide a wide range of construction and restoration services 
              delivered by experienced professionals committed to quality and customer satisfaction. 
              Whether you're looking to build something new, renovate an existing structure, or 
              restore a historical building, we have the expertise to bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      <section className={styles.mainServices}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Main Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.processSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Consultation</h3>
              <p>
                We start with a thorough consultation to understand your needs, vision, and budget. 
                Our team assesses the feasibility and provides initial insights.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Planning & Design</h3>
              <p>
                Our experts develop detailed plans and designs, including material selection, 
                timeline, and cost estimates for your approval.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implementation</h3>
              <p>
                Our skilled team executes the project with precision, following the approved 
                plans while maintaining regular communication with you.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Quality Assurance</h3>
              <p>
                We conduct rigorous quality checks throughout the project to ensure everything 
                meets our high standards and your expectations.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Final Delivery</h3>
              <p>
                Upon completion, we walk you through the finished project, address any concerns, 
                and provide maintenance guidelines if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>
                  "Edil CSM transformed our outdated office building into a modern workspace. 
                  Their attention to detail and professionalism exceeded our expectations."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>Robert Johnson</h4>
                <p>Business Owner</p>
              </div>
            </div>
            
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>
                  "We hired Edil CSM for the restoration of our heritage home. Their expertise in 
                  historical restoration is remarkable. They preserved the character while modernizing 
                  the infrastructure."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>Maria Thompson</h4>
                <p>Homeowner</p>
              </div>
            </div>
            
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>
                  "The new construction project was completed on time and within budget. The team at 
                  Edil CSM was responsive, transparent, and delivered quality work."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>David Williams</h4>
                <p>Property Developer</p>
              </div>
            </div>
          </div>
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
