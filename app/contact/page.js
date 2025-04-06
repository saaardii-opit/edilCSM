import ContactForm from '../../components/ContactForm';
import styles from '../../styles/Contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <h1>Contact Us</h1>
            <ContactForm />
        </div>
    );
}