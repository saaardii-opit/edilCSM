import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
