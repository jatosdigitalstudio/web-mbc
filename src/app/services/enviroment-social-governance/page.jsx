'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import ESGPage from "@/components/services/ESGPage";
import ServiceCTA from "@/components/serviceCTA";

export default function GCG() {
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
       <ESGPage />
       <ServiceCTA/>
       </>
    )
}