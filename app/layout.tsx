import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '~/components/header';
import Footer from '~/components/footer';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cryptocurrencies prices',
  description: 'Cryptocurrencies prices',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
