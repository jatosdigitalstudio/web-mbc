'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import Loading from "../loading";

export default function TeamsPage() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <section className="lg:max-w-[90rem] mx-auto py-[4rem]" >
            <div className="flex flex-col mx-auto justify-center items-center">
                <div className="mb-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Tenaga Ahli MBC
                        </h1>
                    </div>
                </div>
                <div className="px-12 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/avatar.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Dr. Mas Achmad Daniri, MEc</h1>
                            <p className="text-gray-600 text-sm"> Mas Achmad Daniri menjabat sebagai Ketua Komite Nasional Kebijakan Governance (KNKG).
                                Beliau ahli di bidang pasar modal (capital market), industri manufaktur, corporate governance
                                dan corporate social responsibility dengan pengalaman lebih dari 30 tahun. Beliau pendiri dan
                                Senior Advisor PT Mitra Bhadra Consulting, serta telah menulis beberapa buku terkait penerapan
                                GCG dan ES-GRC.
                            </p>
                            <ul className="list-disc text-primary px-4 text-sm">
                                <li><span className="text-gray-700">Komisaris Utama PT Chubb Insurance Indonesia (2016-Present)</span></li>
                                <li><span className="text-gray-700">Komisaris Panasonic Manufacturing Indonesia (2008-Juni 2022)</span></li>
                                <li><span className="text-gray-700">Ketua Komite Nasional Kebijakan Governance (1999 – 2019)</span></li>
                                <li><span className="text-gray-700">Anggota Komite Etik Otoritas Jasa Keuangan (2013 – 2016)</span></li>
                                <li><span className="text-gray-700">Wakil Direktur Utama Panasonic Manufacturing Indonesia (2002 – 2009)</span></li>
                                <li><span className="text-gray-700">Direktur Utrama Bursa Efek Jakarta (1999 – 2002)</span></li>
                                <li><span className="text-gray-700">Direktur Bursa Efek Jakarta (1991 - 1999)</span></li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/avatar.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Irwan M. Habsjah, MA</h1>
                            <p className="text-gray-600 text-sm">Memiliki kompetensi di bidang perbankan, pasar modal, dan corporate governance sebagai hasil
                                dari pengalamannya selama lebih dari 30 tahun pada sektor perbankan korporasi. Sejak tahun
                                2009 beliau terlibat aktif dalam kegiatan financial inclusion di Indonesia.
                            </p>
                            <ul className="list-disc text-primary px-4 text-sm">
                                <li><span className="text-gray-700">Komisaris Independen PT Bank Tabungan Pensiunan Nasional Tbk (2009-Present)</span></li>
                                <li><span className="text-gray-700">Komisaris Utama PT Sriboga Marugame Indonesia</span></li>
                                <li><span className="text-gray-700">Presiden Direktur PT BT Sekurities Indonesia (1996-1999)</span></li>
                                <li><span className="text-gray-700">Komisaris PT Sari Melati Kencana (2011)</span></li>
                                <li><span className="text-gray-700">Anggota Komite Audit PT BAT Indonesia (2008)</span></li>
                                <li><span className="text-gray-700">Presiden Direktur PT ING Indonesia Bank (2000-2004)</span></li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/avatar.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Syahnan Poerba, S.E., MEc</h1>
                            <p className="text-gray-600 text-sm">Memiliki pengalaman sebagai Direktur selama 30 tahun di perusahaan jasa keuangan maupun
                                non keuangan. Praktisi dalam penerapan sukses Good Governance, Enterprise Risk Management,
                                Corporate Social Responsibility didukung dengan pengalaman lainnya dalam organization
                                development serta membawa perusahaan melakukan Initial Public Offering (IPO).
                            </p>
                            <ul className="list-disc text-primary px-4 text-sm">
                                <li><span className="text-gray-700">Senior Partner PT Mitra Bhadra Consulting (2020-Present)</span></li>
                                <li><span className="text-gray-700">Direktur PT UI Corpora (2019-Present)</span></li>
                                <li><span className="text-gray-700">Chief Corporate Support Directors PT ABM Investama Tbk (2009-2019)</span></li>
                                <li><span className="text-gray-700">Country Manager PT D&B (Dun & Bradstreet) Indonesia (2007-2009)</span></li>
                                <li><span className="text-gray-700">Direktur Operasional AXA Mandiri, joint venture AXA France and Bank Mandiri (2004-2007)</span></li>
                                <li><span className="text-gray-700">Direktur Keuangan John Hancoock, US Company (2000-2007)</span></li>
                                <li><span className="text-gray-700">Property and Development PT Bangun Tjipta Pratama, Group of Bangun Tjipta Group (1992-1999)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-[70rem] flex flex-col mx-auto justify-center items-center mt-[6rem]">
                <div className="mb-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Konsultan MBC
                        </h1>
                    </div>
                </div>
                <div className="px-12 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/avatar.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Evelyna Theresa</h1>
                            <p className="text-gray-600 text-sm"> 
                                Memiliki pengalaman selama 12 tahun sebagai konsultan GCG, GRC, ESG dan CSV
                                yang berpengalaman dalam membangun infrastruktur GCG, asesmen GCG,
                                pedoman Tata Kelola, Subsidiary Governance, Laporan Tahunan dan penyusunan
                                kebijakan GCG, Sustainability Report dan implementasi Environment, Social and
                                Governance (ESG) di beberapa BUMN, lembaga milik publik dan perusahaan
                                swasta lainnya.
                            </p>
                            <ul className="list-disc text-primary px-4 text-sm">
                                <li><span className="text-gray-700">BPJS Ketenagakerjaan (2015)</span></li>
                                <li><span className="text-gray-700">BPJS Ketenagakerjaan (2016)</span></li>
                                <li><span className="text-gray-700">PT Jakarta International Container Terminal (2018)</span></li>
                                <li><span className="text-gray-700">PT Humpus Intermoda Transportasi (2018)</span></li>
                                <li><span className="text-gray-700">PT Sarana Multigriya Finansial (2018)</span></li>
                                <li><span className="text-gray-700">PT Sarana Multigriya Finansial (2019)</span></li>
                                <li><span className="text-gray-700">Lembaga Pembiayaan Ekspor Impor Indonesia (2019)</span></li>
                                <li><span className="text-gray-700">Jakarta Propertindo Group (2020)</span></li>
                                <li><span className="text-gray-700">Jakarta Propertindo Group (2019)</span></li>
                                <li><span className="text-gray-700">Lembaga Penjamin Simpanan (2022)</span></li>
                                <li><span className="text-gray-700">PT Pupuk Kalimantan Timur (2022)</span></li>
                                <li><span className="text-gray-700">IFG Life (2022)</span></li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/avatar.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Edoh Permatasari</h1>
                            <p className="text-gray-600 text-sm">
                                Memiliki pengalaman sebagai konsultan GCG dan CSR selama 6 tahun dan
                                menyusun Laporan Keberlanjutan, Stakeholder Mapping berdasarkan AA 1000
                                Standar on Accountability. Edoh memiliki latar belakang pendidikan Magister
                                Manajemen Keberlanjutan (MMCSR) di salah satu universitas swasta di Jakarta.
                                Edoh memiliki sertifikasi Lead Auditor ISO 37001
                            </p>
                            <ul className="list-disc text-primary px-4 text-sm">
                                <li><span className="text-gray-700">BPJS Ketenagakerjaan (2015)</span></li>
                                <li><span className="text-gray-700">BPJS Ketenagakerjaan (2016)</span></li>
                                <li><span className="text-gray-700">PT Jakarta International Container Terminal (2018)</span></li>
                                <li><span className="text-gray-700">PT Humpus Intermoda Transportasi (2018)</span></li>
                                <li><span className="text-gray-700">PT Sarana Multigriya Finansial (2018)</span></li>
                                <li><span className="text-gray-700">PT Sarana Multigriya Finansial (2019)</span></li>
                                <li><span className="text-gray-700">Jakarta Propertindo Group (2020)</span></li>
                                <li><span className="text-gray-700">Jakarta Propertindo Group (2019)</span></li>
                                <li><span className="text-gray-700">Lembaga Penjamin Simpanan (2022)</span></li>
                                <li><span className="text-gray-700">PT Pupuk Kalimantan Timur (2022)</span></li>
                                <li><span className="text-gray-700">IFG Life (2022)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}