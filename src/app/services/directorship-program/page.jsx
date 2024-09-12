'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import DPPage from "@/components/services/DPPage";
import ServiceCTA from "@/components/serviceCTA";
import Head from "@/app/head";

export default function DP() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
        <Head title={"Directorship Program Modul | MBC"} />
        <DPPage />
        <ServiceCTA/>
        </>
    )
}