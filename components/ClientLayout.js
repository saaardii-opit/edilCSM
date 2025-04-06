'use client';

import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Track last online time
    if (navigator.onLine) {
      localStorage.setItem('last-online', Date.now().toString());
    }
  }, []);

  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: var(--primary-color);
          color: white;
          padding: 8px;
          z-index: 1001;
          transition: top 0.2s;
        }

        .skip-link:focus {
          top: 0;
        }

        main:focus {
          outline: none;
        }
      `}</style>
    </ErrorBoundary>
  );
}