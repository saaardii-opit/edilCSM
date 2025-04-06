'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/Offline.module.css';

export default function OfflinePage() {
  const [isRetrying, setIsRetrying] = useState(false);
  const [cachedPages, setCachedPages] = useState([]);
  const [lastOnline, setLastOnline] = useState(null);

  useEffect(() => {
    // Get last online timestamp from localStorage
    const timestamp = localStorage.getItem('last-online');
    if (timestamp) {
      setLastOnline(new Date(parseInt(timestamp)));
    }

    // Get list of cached pages
    if ('caches' in window) {
      caches.open('pages-v1').then(cache => {
        cache.keys().then(keys => {
          const pages = keys
            .map(key => {
              const url = new URL(key.url);
              return {
                path: url.pathname,
                title: url.pathname === '/' ? 'Home' : url.pathname.split('/').pop()
              };
            })
            .filter(page => !page.path.includes('.') && page.path !== '/offline');
          setCachedPages(pages);
        });
      });
    }
  }, []);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      const response = await fetch('/api/health');
      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Network still unavailable');
      }
    } catch (error) {
      setIsRetrying(false);
    }
  };

  return (
    <div className={styles.offlineContainer}>
      <div className={styles.offlineContent}>
        <div className={styles.offlineIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12" y2="20"></line>
          </svg>
        </div>

        <h1>You're Offline</h1>
        <p>Please check your internet connection and try again.</p>

        {lastOnline && (
          <p className={styles.lastOnline}>
            Last online: {lastOnline.toLocaleString()}
          </p>
        )}

        <button 
          onClick={handleRetry} 
          className={`btn ${styles.retryButton}`}
          disabled={isRetrying}
        >
          {isRetrying ? 'Checking Connection...' : 'Try Again'}
        </button>

        {cachedPages.length > 0 && (
          <div className={styles.cachedContent}>
            <h2>Available Offline</h2>
            <ul className={styles.cachedPages}>
              {cachedPages.map(page => (
                <li key={page.path}>
                  <a href={page.path}>
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}