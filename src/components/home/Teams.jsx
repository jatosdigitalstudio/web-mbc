'use client'
import Image from "next/image"

export default function Teams() {
    return (
        <section className="lg:max-w-[90rem] mx-auto pb-[8rem] px-6" id="tentang" >
            <div className="flex flex-col mx-auto justify-center items-center">
                <div className="mb-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Tenaga Ahli MBC
                        </h1>
                    </div>
                </div>
                <div className="lg:px-12 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/team-1.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Dr. Mas Achmad Daniri, MEc</h1>
                            <p className="text-gray-600 text-justify text-sm"> Mas Achmad Daniri menjabat sebagai Ketua Komite Nasional Kebijakan Governance (KNKG).
                                Beliau ahli di bidang pasar modal (capital market), industri manufaktur, corporate governance
                                dan corporate social responsibility dengan pengalaman lebih dari 30 tahun. Beliau pendiri dan
                                Senior Advisor PT Mitra Bhadra Consulting, serta telah menulis beberapa buku terkait penerapan
                                GCG dan ES-GRC.
                            </p>
                        </div>
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/team-2.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Irwan M. Habsjah, MA</h1>
                            <p className="text-gray-600 text-justify text-sm">Memiliki kompetensi di bidang perbankan, pasar modal, dan corporate governance sebagai hasil
                                dari pengalamannya selama lebih dari 30 tahun pada sektor perbankan korporasi. Sejak tahun
                                2009 beliau terlibat aktif dalam kegiatan financial inclusion di Indonesia.
                            </p>
                        </div>
                        <div className="flex flex-col w-full p-6 gap-6">
                            <Image src="/images/team-3.png" width={200} height={200} alt="Mas Achmad Daniri" />
                            <h1 className="font-bold text-xl">Syahnan Poerba, S.E., MEc</h1>
                            <p className="text-gray-600 text-justify text-sm">Memiliki pengalaman sebagai Direktur selama 30 tahun di perusahaan jasa keuangan maupun
                                non keuangan. Praktisi dalam penerapan sukses Good Governance, Enterprise Risk Management,
                                Corporate Social Responsibility didukung dengan pengalaman lainnya dalam organization
                                development serta membawa perusahaan melakukan Initial Public Offering (IPO).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}