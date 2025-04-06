import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  title: {
    default: 'Edil CSM | Professional Construction & Restoration',
    template: '%s | Edil CSM',
  },
  description: 'Edil CSM provides high-quality construction and restoration services. View our portfolio and services.',
  keywords: ['construction', 'restoration', 'building', 'renovation', 'construction company', 'Edil CSM'],
  metadataBase: new URL('https://edilcsm.com'),
  openGraph: {
    title: 'Edil CSM | Professional Construction & Restoration',
    description: 'Edil CSM provides high-quality construction and restoration services. View our portfolio and services.',
    url: 'https://edilcsm.com',
    siteName: 'Edil CSM',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  viewport: {
    themeColor: '#e65100',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/hero-bg-placeholder.svg"
          as="image"
          type="image/svg+xml"
        />
        <meta name="theme-color" content="#e65100" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
