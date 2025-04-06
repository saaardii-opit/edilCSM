import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

const Portfolio = dynamic(() => import('../components/Portfolio'), {
  loading: () => <div className={styles.loadingPlaceholder}>Caricamento portfolio...</div>
});

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <div className={styles.loadingPlaceholder}>Caricamento testimonianze...</div>
});

export const metadata = {
  title: 'Servizi Professionali di Costruzione e Restauro',
  description: 'Edil CSM offre servizi di costruzione e restauro di qualità. Esplora il nostro portfolio di progetti completati e scopri la nostra maestria.',
  viewport: {
    themeColor: '#e65100',
  },
};

export default function Home() {
  return (
    <>
      <Hero 
        title="Costruiamo Eccellenza, Restauriamo Bellezza" 
        subtitle="Il tuo partner di fiducia per progetti di costruzione e restauro."
        ctaText="Vedi i Nostri Lavori"
        ctaLink="#portfolio"
        backgroundImage="/hero-construction.svg"
      />
      
      <section className={styles.intro} id="about">
        <div className="container">
          <div className={styles.introContent}>
            <h2>Benvenuti in Edil CSM</h2>
            <p>
              Con oltre 15 anni di esperienza nel settore delle costruzioni, Edil CSM si è affermata 
              come leader nei progetti di costruzione e restauro. Il nostro impegno per la qualità, 
              l'attenzione ai dettagli e la soddisfazione del cliente ci distingue dalla concorrenza.
            </p>
            <p>
              Dalle ristrutturazioni residenziali alle costruzioni commerciali, il nostro team di professionisti 
              qualificati offre risultati eccezionali nei tempi e nel budget previsti. Siamo orgogliosi della 
              nostra artigianalità e delle relazioni che costruiamo con i nostri clienti.
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
              <h3>Qualità al Primo Posto</h3>
              <p>Non scendiamo mai a compromessi sulla qualità, utilizzando solo i migliori materiali e tecniche.</p>
            </div>
            
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>Team Professionale</h3>
              <p>I nostri artigiani e project manager portano esperienza in ogni progetto.</p>
            </div>
            
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Consegna Puntuale</h3>
              <p>Comprendiamo l'importanza delle tempistiche e consegniamo i progetti secondo programma.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Suspense fallback={<div className={styles.loadingPlaceholder}>Caricamento testimonianze...</div>}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<div className={styles.loadingPlaceholder}>Caricamento portfolio...</div>}>
        <section id="portfolio" className={styles.portfolioSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Il Nostro Portfolio</h2>
            <p className={styles.sectionDescription}>
              Esplora la nostra vasta gamma di progetti di successo, dalle costruzioni moderne 
              ai delicati restauri storici.
            </p>
            <Portfolio />
          </div>
        </section>
      </Suspense>
      
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
