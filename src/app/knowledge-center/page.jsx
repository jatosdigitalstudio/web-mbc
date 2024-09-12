'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import Loading from "../loading";

export default function KCPage() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <section className="lg:max-w-[90rem] mx-auto py-[4rem] px-8" >
            <div className="flex flex-col mx-auto justify-center items-center">
                <div className="mb-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-2xl lg:max-w-4xl lg:!text-5xl">
                            Pusat Pengetahuan
                        </h1>
                    </div>
                </div>
                <div className="h-[30vh]"></div>
            </div>
        </section>
    )
}