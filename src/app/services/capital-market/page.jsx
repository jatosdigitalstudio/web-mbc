'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import CMPage from "@/components/services/CMPage";
import ServiceCTA from "@/components/serviceCTA";

export default function CM() {
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
       <CMPage />
       <ServiceCTA/>
       </>
    )
}