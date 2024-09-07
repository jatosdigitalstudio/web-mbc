'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function CSRPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-6">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary uppercase rounded-md px-8 py-4 text-white font-semibold !leading-snug !text-2xl lg:!text-4xl lg:max-w-4xl">
                        Corporate Social Responsibility <br/>
                        (CSR) ISO 26000
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:px-12 text-left lg:max-w-2xl">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            <span className="font-bold">Social Responsibility </span> menurut ISO 26000; Guidance on Social Responsibility, adalah tanggung jawab suatu
                            organisasi terhadap dampak yang diakibatkan oleh kebijakan, dan kegiatannya (proses, produk/jasa)
                            terhadap masyarakat & lingkungan melalui perilaku yang transparan dan beretika.
                            <br/>
                            <br/>
                            <span className="font-bold">MBC </span>mempunyai keahlian dalam membuat struktur dan aktivitas CSR yang sejalan dengan proses dan tujuan bisnis.
                            Program CSR/PKBL yang sukses akan mendukung pertumbuhan profit secara berkesinambungan
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">Layanan MBC Dalam CSR Strategis</h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Blueprint CSR Berbasis ISO 26000</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Perencanaan Strategis CSR Pendampingan Implementasi CSR</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Penyusunan Sustainability Report Berbasis GRI G4</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Stakeholder Engagement Berbasis AA1000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}