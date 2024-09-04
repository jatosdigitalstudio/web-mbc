'use client'
import { useEffect,useState } from 'react';
import Loading from './loading';
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Services from "@/components/home/Services"
import Teams from "@/components/home/Teams"
import Clients from "@/components/home/Clients"

export default function Root() {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />
  return (
    <div className="container">
      <Hero />
      <About />
      <Services />
      <Teams />
      <Clients/>
    </div>
  )
}
