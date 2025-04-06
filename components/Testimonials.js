import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "Edil CSM ha trasformato il nostro vecchio edificio per uffici in uno spazio di lavoro moderno. La loro attenzione ai dettagli e la professionalità hanno superato le nostre aspettative.",
    author: "Roberto Bianchi",
    position: "Proprietario",
    company: "Tech Solutions Italia"
  },
  {
    id: 2,
    text: "Abbiamo assunto Edil CSM per il restauro della nostra casa d'epoca. La loro competenza nel restauro storico è straordinaria. Hanno preservato il carattere dell'edificio modernizzandone le infrastrutture.",
    author: "Maria Rossi",
    position: "Proprietaria",
    company: "Quartiere Storico"
  },
  {
    id: 3,
    text: "Il team di Edil CSM ha consegnato il nostro nuovo progetto di costruzione in tempo e nel rispetto del budget. La loro comunicazione e trasparenza durante tutto il processo sono state eccezionali.",
    author: "Davide Verdi",
    position: "Sviluppatore Immobiliare",
    company: "Gruppo Sviluppo Urbano"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials} aria-label="Testimonianze dei Clienti">
      <div className="container">
        <h2>Cosa Dicono i Nostri Clienti</h2>
        <p className={styles.subtitle}>Scopri le esperienze di chi ha vissuto il nostro impegno per l'eccellenza</p>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <div className={styles.content}>
                <svg className={styles.quoteIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4a1 1 0 00-1-1H6a3 3 0 00-3 3v10a3 3 0 003 3h4a3 3 0 003-3v-2a3 3 0 00-3-3zm11 0h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3a3 3 0 00-3 3v10a3 3 0 003 3h4a3 3 0 003-3v-2a3 3 0 00-3-3z"/>
                </svg>
                <p>{testimonial.text}</p>
              </div>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.position}</span>
                  <span className={styles.company}>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;