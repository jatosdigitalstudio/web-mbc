'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import CSRPage from "@/components/services/CSRPage";
import ServiceCTA from "@/components/serviceCTA";

export default function CSR() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
        <CSRPage />
        <ServiceCTA/>
        </>
    )
}