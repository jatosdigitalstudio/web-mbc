'use client'
import { BsCheckCircle } from "react-icons/bs";
import { TbUserStar } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { PiHandshake } from "react-icons/pi";
import { PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill } from "react-icons/pi";

export default function DPPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-8">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-2xl lg:!text-4xl lg:max-w-3xl">
                        Directorship Program Module
                    </h1>
                    <div className="mt-8 text-justify">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            Demi tercapainya optimalisasi kinerja Dewan Komisaris/ Pengawas
                            dan Direksi untuk mencapai target perusahaan, maka perlu adanya
                            pemahaman tugas, fungsi, tanggung jawab dan hubungan kerja
                            antara Direksi dan Dewan Komisaris sesuai dengan rujukan regulasi
                            yang berlaku serta bagaimana pengelolaan dan pengawasan
                            strategi bisnis hingga pelaksanaan manajemen risiko oleh Direksi
                            dan Dewan Komisaris.
                            <br/>
                            <br/>
                            Pelatihan ini tentunya bukan hanya membahas bagaimana teori
                            pengelolaan perusahaan yang berlaku di Indonesia tetapi juga
                            membahas hal penting lainnya yang perlu diketahui oleh Board
                            seperti Implementasi & praktik GGC, Risk Management, softskills
                            untuk executive, Strategic Thinking & Business Acumen,
                            Memaksimalkan Management & Financial Reporting (Termasuk
                            data analytics untuk executive) dan aspek hukum yang penting
                            untuk diketahui. Didalam pelatihan akan membedah kasuk-kasus
                            terkait sebagai pembelajaran untuk peningkatan kompetensi dan
                            kapabilitas peserta dalam Perusahaan.
                            <br/>
                            <br/>
                            Diharapkan setelah adanya pelatihan ini, Dewan Komisaris/
                            Pengawas dan Direksi maupun calon Direksi memiliki keharmonisan
                            kerja untuk mendukung Visi/misi Perusahaan dan meningkatkan
                            kemampuan strategis, pengelolaan manajemen, pengambilan
                            keputusan dan meningkatkan kompetensi untuk menunjang
                            pelaksanaan fungsi pengawasan Dewan Komisaris. Selain itu,
                            praktik GCG dan ethical business juga dapat diaplikasikan oleh
                            Dewan Komisaris/Pengawas serta Direksi yang akan menjadi garda
                            depan dan role model di Perusahaannya. 
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6 bg-gradient-to-br from-[#ec0104] to-secondary rounded-sm px-8 py-10 text-white">
                        <h4 className="font-bold !text-xl lg:!text-3xl">
                            Tujuan dan Manfaat Pelatihan
                        </h4>
                        <p className="mx-auto text-md leading-relaxed w-full">
                            Tujuan dan manfaat yang akan dicapai dalam pelatihan ini adalah:
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <TbUserStar size={36} className="text-white shrink-0"/>
                            <p className="text-sm lg:text-md">
                                Memahami pelaksanaan GCG saat ini dengan praktik terbaik yang diatur oleh
                                regulator baik pada level nasional dan internasional untuk mengoptimalkan
                                peran dan fungsi Direksi, Dewan Komisaris dan Dewan pengawas Syariah.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row  gap-4">
                            <BiNetworkChart size={36} className="text-white shrink-0"/>
                            <p className="text-sm lg:text-md">
                                Membangun komitmen dan sistem GRC perusahaan sesuai dengan acuan
                                praktik terbaik, untuk mendukung peningkatan kinerja.
                            </p>
                        </div>
                    
                        <div className="flex flex-col lg:flex-row  gap-4">
                            <GrGroup size={36} className="text-white shrink-0"/>
                            <p className="text-sm lg:text-md">
                                Membangun awareness GRC sebagai pendukung peranan strategis Direksi,
                                Dewan Komisaris dan Dewan pengawas untuk kemudian disosialisasi dan
                                diedukasikan kepada seluruh Karyawan.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row  gap-4">
                            <PiHandshake size={36} className="text-white shrink-0"/>
                            <p className="text-sm lg:text-md">
                                Meningkatkan kolaborasi Top Management agar terus selaras dalam
                                upaya pencapaian tujuan (business sustainability).
                            </p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-6 py-10">
                        <h4 className="font-bold text-gray-700 !text-2xl lg:!text-3xl mb-2">
                            Target Peserta & Metode Program
                        </h4>
                        <p className="mx-auto text-md leading-relaxed w-full">
                            Target peserta dalam pelatihan ini adalah para calon 
                            <span className="font-bold"> Direksi</span> yang akan menjadi 
                            <span className="font-bold"> leader dan role model perusahaan</span>.
                        </p>
                        <div className="flex flex-row items-center gap-4 bg-primary rounded-lg py-2 px-4">
                            <PiNumberSquareOneFill size={60} className="text-white shrink-0"/>
                            <p className="text-lg text-white">Pemaparan Konsep</p>
                        </div>
                        <div className="flex flex-row items-center gap-4 bg-primary rounded-lg py-2 px-4">
                            <PiNumberSquareTwoFill size={60} className="text-white shrink-0"/>
                            <p className="text-lg text-white">Study Kasus</p>
                        </div>
                        <div className="flex flex-row items-center gap-4 bg-primary rounded-lg py-2 px-4">
                            <PiNumberSquareThreeFill size={60} className="text-white shrink-0"/>
                            <p className="text-lg text-white">Focus Group Discussion</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}