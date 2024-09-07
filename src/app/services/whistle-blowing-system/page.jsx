'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import WBSPage from "@/components/services/WBSPage";
import ServiceCTA from "@/components/serviceCTA";

export default function WBS() {
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
            <WBSPage />
            <ServiceCTA />
        </>
    )
}