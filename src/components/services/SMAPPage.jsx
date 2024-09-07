'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function SMAPPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-6">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary uppercase rounded-md px-8 py-4 text-white font-semibold !leading-snug !text-2xl lg:!text-4xl lg:max-w-4xl">
                        SISTEM MANAJEMEN ANTI
                        PENYUAPAN (SMAP) ISO 37001
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">
                            Manfaat Pelaksanaan SMAP Bagi Perusahaan
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-md">Menunjukkan komitmen kepatuhan terhadap peraturan <br/>
                                perundang-undangan 
                                terutama terkait praktik bisnis yang bersih.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-md">Memperkuat keamanan eksternal organisasi dengan <br/> mengefektifkan 
                                kebijakan dan prosedur anti penyuapan.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-md">Memperkuat kerjasama dengan pemangku kepentingan <br/> untuk memantau dan 
                                mengelola risiko pada rentang kendali perusahaan.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-md">
                                Memastikan pemasok, kontraktor, dan mitra bisnis lain ikut menerapkan SMAP.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-md">
                                Meningkatkan kinerja perusahaan dan meningkatkan kepercayaan stakeholders.
                            </p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">
                            Layanan MBC Dalam Pelaksanaan SMAP
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">
                                Pendampingan penyusunan kebijakan dan kelengkapan struktur pelaksanaan SMAP
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Penyusunan Annual Report (Berbasis ARA)</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">
                                Pembangunan sistem pelaporan berbasis WBS
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">
                                Pendampingan proses implementasi SMAP
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">
                                Melakukan pendampingan Audit untuk sertifikasi ISO 37001
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">
                                Melakukan penilaian internal dalam rangka proses sertifikasi ISO 37001
                            </p>
                        </div>
                        <div className="flex mt-4">
                            <p className="text-md text-secondary">
                                MBC memberikan solusi menyeluruh bagi perusahaan Swasta dan BUMN
                                yang ingin menjalankan SMAP yang tersertifikasi menggunakan ISO 37001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}