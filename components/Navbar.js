'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <div className={styles.logo}>
              <svg className={styles.logoSvg} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 20L30 20L20 10L10 20L0 20L20 0Z" fill="#e65100"/>
                <path d="M10 25H30V40H10V25Z" fill="#e65100"/>
              </svg>
              <span>Edil CSM</span>
            </div>
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={pathname === '/' ? styles.active : ''}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={pathname === '/services' ? styles.active : ''}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.contactInfo}>
          <a href="tel:1234567890" className={styles.phoneNumber}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>(123) 456-7890</span>
          </a>
        </div>
        
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
