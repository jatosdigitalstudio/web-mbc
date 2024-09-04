'use client'
import { useState,useEffect } from "react"
import Loading from "../loading";

AboutPage.title = 'About | Mitra Bhadra Consulting';
 
export default function AboutPage() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <section className="lg:max-w-[78rem] mx-auto pt-[4rem] pb-[8rem]">
            {/* <div className="flex flex-col lg:flex-row justify-center"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="px-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                        Tentang Kami
                    </h1>
                </div>
                <div className="px-12 text-left lg:max-w-2xl">
                    <p className="mx-auto text-sm leading-relaxed w-full text-grey ">
                        Mitra Bhadra Consulting diprakarsai oleh para profesional di berbagai bidang.
                        <span className="font-bold underline"> Masing-masing profesional memiliki pengalaman sebagai top executive 
                        yang menangani beragam bisnis, jabatan publik, Presiden Direktur Bursa Efek Jakarta, CEO Unilever dan Managing Director & Country 
                        Head Bank ING Indonesia.</span> 
                        <br/>
                        <br/>
                        Meskipun berasal dari latar belakang profesi yang berbeda, kami 
                        memiliki keyakinan yang sama bahwa bisnis hanya dapat berkelanjutan jika dijalankan atas 
                        dasar good corporate governance (GCG) dan corporate social responsibility (CSR) dalam seluruh
                        proses bisnis. 
                        <br/>
                        <br/>
                        Di Mitra Bhadra Consulting, pengalaman kami bagikan untuk memberikan strategic
                        advisory kepada perusahaan dalam mengembangkan dan mengimplementasikan strategi bisnis yang 
                        didasari oleh pelaksanaan Good Corporate Governance yang solid serta melaksanakan CSR dalam 
                        rangka peningkatan daya saing.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-12">
                <div className="flex flex-col mt-[6rem] justify-start">
                    <div className="mb-6">
                        <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                        <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Vision
                        </h1>
                    </div>
                    <div className="px-6 text-left">
                        <p className="mx-auto text-sm leading-relaxed w-full text-grey ">
                            Menjadi konsultan multidisiplin profesional pilihan yang memberikan solusi bisnis 
                            melalui tinjauan bisnis secara menyeluruh yang berpedoman pada good governance dan 
                            social responsibility sesuai praktik terbaik (best practices).
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mt-[6rem] justify-start">
                    <div className="mb-6">
                        <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                        <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Mision
                        </h1>
                    </div>
                    <div className="px-6 text-left">
                        <ul className="list-decimal text-sm gap-4">
                            <li>Didukung dengan pengalaman yang panjang, integritas dan profesionalisme, kami mengungguli pesaing dalam menjawab kebutuhan klien dengan pemahaman yang lebih baik</li>
                            <li>Bekerja dengan komitmen untuk menyeimbangkan pengembangan prinsip GCG dan CSR (Profit, People, Planet) dalam seluruh kegiatan dan menjamin keberlanjutan jangka panjang.</li>
                            <li>Fokus dalam pengembangan hubungan klien menjadi rekan kerja melalui pengembangan strategi bisnis bersama dan mendukung implementasi rencana bisnis</li>
                            <li>Dengan akurat mematuhi sistem, kebijakan, dan peraturan yang sudah disetujui.</li>
                            <li>Memberikan pelayanan prima dengan berkomitmen kuat terhadap kualitas dan urgensi.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col mt-[6rem] justify-start">
                    <div className="mb-6">
                        <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                        <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Value
                        </h1>
                    </div>
                    <div className="px-6 text-left">
                        <ul className="list-decimal text-sm gap-4">
                            <li>Memahami kebutuhan dan kondisi klien pada setiap layanan penyusunan panduan dan layanan strategi bisnis serta dukungan atas implementasi rencana bisnis</li>
                            <li>Berkomunikasi secara terbuka dan jujur kepada klien</li>
                            <li>Pelayanan prima dengan berkomitmen kuat terhadap kualitas dan urgensi</li>
                            <li>Memiliki sense of urgency dalam seluruh kegiatan serta memenuhi tenggat waktu</li>
                            <li>Bertindak dengan integritas, kejujuran, beretika dan memenuhi komitmen.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}