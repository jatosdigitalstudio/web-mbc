'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import SMAPPage from "@/components/services/SMAPPage";
import ServiceCTA from "@/components/serviceCTA";

export default function SMAP() {
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
       <SMAPPage />
       <ServiceCTA />
       </>
    )
}