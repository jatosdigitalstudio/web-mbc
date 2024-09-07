'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import IGRCPage from "@/components/services/IGRCPage";
import ServiceCTA from "@/components/serviceCTA";

export default function IGRC() {
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
            <IGRCPage />
            <ServiceCTA/>
        </>
    )
}