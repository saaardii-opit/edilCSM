'use client';

import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const INITIAL_ERRORS = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState('idle');
  const [notification, setNotification] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification('Please correct the errors in the form', 'error');
      return;
    }

    setStatus('submitting');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormData(INITIAL_STATE);
      setStatus('success');
      showNotification('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      setStatus('error');
      showNotification('An error occurred. Please try again later.', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.error : ''}`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          disabled={status === 'submitting'}
        />
        {errors.name && (
          <span id="name-error" className={styles.errorMessage} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          disabled={status === 'submitting'}
        />
        {errors.email && (
          <span id="email-error" className={styles.errorMessage} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`${styles.input} ${errors.phone ? styles.error : ''}`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          disabled={status === 'submitting'}
        />
        {errors.phone && (
          <span id="phone-error" className={styles.errorMessage} role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
          disabled={status === 'submitting'}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          disabled={status === 'submitting'}
        />
        {errors.message && (
          <span id="message-error" className={styles.errorMessage} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`${styles.submitButton} btn`}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : 'Send Message'}
      </button>

      {notification && (
        <div
          className={`${styles.notification} ${styles[notification.type]}`}
          role="alert"
        >
          {notification.message}
        </div>
      )}
    </form>
  );
}
