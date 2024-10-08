'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import GCGPage from "@/components/services/GCGPage";
import ServiceCTA from "@/components/serviceCTA";
import Head from "@/app/head";
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
            <Head title={"Good Corporate Governance | MBC"} />
            <GCGPage />
            <ServiceCTA/>
        </>
    )
}