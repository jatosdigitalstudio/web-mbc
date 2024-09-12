'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function IGRCPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-6">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-2xl lg:!text-4xl lg:max-w-4xl">
                        INTEGRATED GOVERNANCE, RISK & COMPLIANCE                    
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:px-12 text-left lg:max-w-2xl">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            Tekanan regulasi terus meningkat terhadap perusahaan. Di lingkungan bisnis, manajemen eksekutif dan pimpinan
                            perusahaan perlu memiliki pemahaman yang lebih dalam tentang risiko bisnis utama mereka, bagaimana risiko ini
                            dikelola dalam bisnis dan termasuk bagaimana mengelola risiko untuk menciptakan keuntungan terbesar.
                            <br/>
                            <br/>
                            Banyak organisasi mengelola prakarsa Tata Kelola, Risiko dan Kepatuhan secara terpisah (silo). Sebenarnya beberapa
                            inisiatif risiko dan kepatuhan saling terkait. Jika ketiga hal tersebut dilakukan secara silo, maka akan mengakibatkan
                            duplikasi proses dan dokumentasi, bahkan bisa kontradiktif yang pada akhirnya dapat mengakibatkan meningkatnya
                            risiko bisnis.
                            <br/>
                            <br/>
                            Solusi GRC memberikan proses yang jelas dan tidak ambigu untuk Governance, Risk Management and Compliance, 
                            memberikan satu titik acuan untuk organisasi dan menghilangkan duplikasi dan pekerjaan yang berlebihan
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">
                            Layanan MBC Dalam GRC Terintegrasi
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Mendesain, Implementasi dan Pemeliharaan Infrastruktur GRC</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">GRC Roadmap</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}