'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import CMPage from "@/components/services/CMPage";
import ServiceCTA from "@/components/serviceCTA";
import Head from "@/app/head";

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
        <Head title={"Capital Market | MBC"} />
        <CMPage />
        <ServiceCTA/>
        </>
    )
}