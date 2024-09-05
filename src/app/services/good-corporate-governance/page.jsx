'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import { BsCheckCircle } from "react-icons/bs";

export default function GCGPage() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <>
        {/* <div className="bg-primary h-[15rem] mt-[-5rem]">
            <div className="flex flex-col lg:max-w-[78rem] pt-[7rem] mx-auto justify-center items-center">
                <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                <h1 className="bg-white rounded-md px-8 py-4 text-primary font-semibold leading-snug !text-4xl lg:max-w-4xl">
                    GOOD CORPORATE GOVERNANCE
                </h1>
            </div>
        </div> */}
        <section className="pt-[3rem] pb-[8rem]">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl">
                        GOOD CORPORATE GOVERNANCE
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="px-12 text-left lg:max-w-2xl">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            Saat ini,  <span className="font-bold">Good Corporate Governance (GCG)</span> dan Corporate Social Responsibility (CSR) diakui sebagai bagian
                            penting untuk menjamin pertumbuhan perusahaan secara berkelanjutan serta membangun kepercayaan
                            dari para pemangku kepentingan (termasuk Lenders, Bank, dan Investor).
                            <br/>
                            <br/>
                            GCG merupakan sistem yang mengatur mekanisme check and balances pengelolaan perusahaan sehingga
                            proses bisnis beroperasi secara efisien, menguntungkan, dan tumbuh secara berkelanjutan (sustainable). 
                            <br/>
                            <br/>
                            Melalui transformasi GCG disinergikan dengan CSR, akhirnya perusahaan hadir sebagai Good Corporate Citizen
                            dengan pendekatan Triple Bottom Line (Profit, People, dan Planet) sebagai sarana pencapaian daya saing
                            berkelanjutan sesuai ekspektasi stakeholders.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">Layanan Produk GCG Oleh MBC</h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">GCG Assesment</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Penyusunan Annual Report (Berbasis ARA)</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Roadmap GCG</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Pendampingan Implementasi GCG</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Good Corporate Citizen</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Monitoring System GCG</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}