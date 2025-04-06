// Importing necessary modules and components
import dynamic from 'next/dynamic';
import { services } from '../../lib/services';
import styles from '../../styles/Services.module.css';

// Dynamically importing the ServiceCard component with a loading fallback
const ServiceCard = dynamic(() => import('../../components/ServiceCard'), {
  loading: () => (
    <div className={styles.serviceCardSkeleton}>
      <div className={styles.iconPlaceholder} />
      <div className={styles.contentPlaceholder}>
        <div className={styles.titlePlaceholder} />
        <div className={styles.descriptionPlaceholder} />
      </div>
    </div>
  )
});

// Metadata for the Services page
export const metadata = {
  title: 'Servizi di Costruzione e Restauro', // Page title
  description: 'Esplora la nostra gamma completa di servizi di costruzione e restauro.', // Page description
  viewport: {
    themeColor: '#e65100',
  },
};

// Main Services component rendering the page content
export default function Services() {
  return (
    <>
      {/* Hero section for the Services page */}
      <section className={styles.servicesHero}>
        <div className="container">
          <h1>I Nostri Servizi</h1>
          <p>Soluzioni complete di costruzione e restauro su misura per le tue esigenze</p>
        </div>
      </section>
      
      {/* Introduction section for the Services page */}
      <section className={styles.servicesIntro}>
        <div className="container">
          <div className={styles.introContent}>
            <h2>Cosa Offriamo</h2>
            <p>
              In Edil CSM, offriamo una vasta gamma di servizi di costruzione e restauro 
              realizzati da professionisti esperti impegnati nella qualità e nella soddisfazione 
              del cliente. Che tu stia cercando di costruire qualcosa di nuovo, rinnovare una 
              struttura esistente o restaurare un edificio storico, abbiamo l'esperienza per 
              dare vita alla tua visione.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main services section displaying the list of services */}
      <section className={styles.mainServices}>
        <div className="container">
          <h2 className={styles.sectionTitle}>I Nostri Servizi Principali</h2>
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
      
      {/* Process section explaining the workflow */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Il Nostro Processo</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Consulenza</h3>
              <p>
                Iniziamo con una consulenza approfondita per comprendere le tue esigenze, 
                la tua visione e il tuo budget. Il nostro team valuta la fattibilità e 
                fornisce indicazioni iniziali.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Pianificazione e Design</h3>
              <p>
                I nostri esperti sviluppano piani dettagliati e progetti, inclusa la selezione 
                dei materiali, la tempistica e le stime dei costi per la tua approvazione.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implementazione</h3>
              <p>
                Il nostro team qualificato esegue il progetto con precisione, seguendo i piani 
                approvati e mantenendo una comunicazione regolare con te.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Controllo Qualità</h3>
              <p>
                Conduciamo rigorosi controlli di qualità durante tutto il progetto per garantire 
                che tutto soddisfi i nostri elevati standard e le tue aspettative.
              </p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Consegna Finale</h3>
              <p>
                Al completamento, facciamo un sopralluogo del progetto finito, affrontiamo 
                eventuali preoccupazioni e forniamo linee guida per la manutenzione se necessario.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials section showcasing client feedback */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Cosa Dicono i Nostri Clienti</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>
                  "Edil CSM ha trasformato il nostro vecchio edificio per uffici in uno spazio 
                  di lavoro moderno. La loro attenzione ai dettagli e professionalità hanno 
                  superato le nostre aspettative."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>Roberto Bianchi</h4>
                <p>Proprietario</p>
              </div>
            </div>
            
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>
                  "Il team di Edil CSM ha realizzato il nostro progetto di costruzione nei 
                  tempi e nel budget previsti. La loro comunicazione e trasparenza durante 
                  tutto il processo sono state eccezionali."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <h4>Marco Verdi</h4>
                <p>Sviluppatore Immobiliare</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-action section encouraging contact */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto per Iniziare il Tuo Progetto?</h2>
            <p>Contattaci oggi per una consulenza e un preventivo gratuiti.</p>
            <a href="/contact" className="btn">Contattaci</a>
          </div>
        </div>
      </section>
    </>
  );
}
