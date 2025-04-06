'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  const scrollToElement = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      handleLinkClick();
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" onClick={handleLinkClick}>
            <div className={styles.logo} role="img" aria-label="Logo Edil CSM">
              <svg className={styles.logoSvg} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 0L40 20L30 20L20 10L10 20L0 20L20 0Z" fill="#e65100"/>
                <path d="M10 25H30V40H10V25Z" fill="#e65100"/>
              </svg>
              <span>Edil CSM</span>
            </div>
          </Link>
        </div>
        
        <nav 
          className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}
          role="navigation"
          aria-label="Navigazione principale"
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                href="/" 
                className={pathname === '/' ? styles.active : ''}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                href="/services" 
                className={pathname === '/services' ? styles.active : ''}
                onClick={handleLinkClick}
              >
                Servizi
              </Link>
            </li>
            {pathname === '/' && (
              <li className={styles.navItem}>
                <a 
                  href="#portfolio" 
                  onClick={(e) => scrollToElement(e, '#portfolio')}
                  className={styles.smoothScroll}
                >
                  Lavori svolti
                </a>
              </li>
            )}
            <li className={styles.navItem}>
              <Link 
                href="/contact" 
                className={pathname === '/contact' ? styles.active : ''}
                onClick={handleLinkClick}
              >
                Contatti
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.contactInfo}>
          <a 
            href="tel:+39 3396882872" 
            className={styles.phoneNumber}
            aria-label="Chiamaci al +39 3396882872"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+39 3396882872</span>
          </a>
        </div>
        
        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
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
