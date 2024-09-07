'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function CMPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-6">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-2xl lg:!text-4xl lg:max-w-4xl">
                        CAPITAL MARKET
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:px-12 text-left lg:max-w-2xl">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            Perubahan perlu dilakukan secara menyeluruh dan berkesinambungan terhadap pola pikir, pola pandang dan pola tindak
                            perusahaan, strategi bisnis, budaya perusahaan maupun perilaku dan kemampuan organisasi.
                            Sejak awal dekade 80-an, pasar modal di Indonesia sudah menunjukkan perannya dalam menggeliatkan
                            perekonomian di Indonesia. Pada dasarnya kehadiran pasar modal adalah untuk memenuhi kebutuhan pembiayaan
                            usaha bagi perusahaan yang tengah berkembang dan yang terus berekspansi. Pasar modal hadir sebagai alternatif
                            yang murah dari pembiayaan usaha konvensional, terutama perbankan.
                            <br/>
                            <br/>
                            Porsi pembiayaan usaha melalui pasar modal terus mengalami peningkatan seiring dengan semakin majunya
                            industri pasar modal di Indonesia. Untuk dapat memanfaatkan pembiayaan perlu menyiapkan perangkat internal dan
                            infrastruktur yang diperlukan agar optimal, dipercaya dalam menggalang dana publik serta menjadi perusahaan
                            yang berkelanjutan.
                            <br/>
                            <br/>
                            Dengan berbekal pengalaman langsung kami, kami siap untuk mendampingi dan mempersiapkan perusahaan untuk
                            Go-Public.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">
                            Layanan MBC Dalam Capital Market
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Initial Public Offerings</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Follow-on Offerings</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Rights Offerings</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Block Trades</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg"> "At The Market" Offerings</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Share Buybacks</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary"/>
                            <p className="text-lg">Convertible Offerings</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}