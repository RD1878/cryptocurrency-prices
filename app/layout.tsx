import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '~/Components/Header';
import Footer from '~/Components/Footer';

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
