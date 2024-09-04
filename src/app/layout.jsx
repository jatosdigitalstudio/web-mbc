'use client'
import { useEffect,useState } from 'react';
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import Head from './head';
import Loading from "./loading";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { capitalizeFirstLetter } from '@/utils/custom';
const inter = Inter({ 
  weight: ['100','200','300','400','500','600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});

export default  function RootLayout({children}) {
  const [loading,setLoading] = useState(true)
  const path = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="id">
      <Head title={`${path === '/' ? '' : capitalizeFirstLetter(path.substring(1)) +' | ' } Mitra Bhadra Consulting`} description={"Mitra Bhadra Consulting diprakarsai oleh para profesional di berbagai bidang"}/>
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
