'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import WBSPage from "@/components/services/WBSPage";
import ServiceCTA from "@/components/serviceCTA";
import Head from "@/app/head";
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
            <Head title={"Whistle Blowing System | MBC"} />
            <WBSPage />
            <ServiceCTA />
        </>
    )
}