'use client'
import { useEffect,useState } from 'react';
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import Head from './head';
import Loading from "./loading";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  weight: ['100','200','300','400','500','600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});

export default  function RootLayout({children}) {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="id">
      <Head/>
      <body className={inter.className}>
        {loading ? <Loading/> : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
