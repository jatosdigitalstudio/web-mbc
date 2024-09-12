'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import SMAPPage from "@/components/services/SMAPPage";
import ServiceCTA from "@/components/serviceCTA";
import Head from "@/app/head";
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
            <Head title={"Sistem Manajemen Anti Suap | MBC"} />
            <SMAPPage />
            <ServiceCTA />
        </>
    )
}