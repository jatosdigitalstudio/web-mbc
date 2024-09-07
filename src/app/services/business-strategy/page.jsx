'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import BSPage from "@/components/services/BSPage";
import ServiceCTA from "@/components/serviceCTA";

export default function BS() {
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
       <BSPage />
       <ServiceCTA/>
       </>
    )
}