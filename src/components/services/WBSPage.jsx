'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function WBSPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-6">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-2xl lg:!text-4xl lg:max-w-4xl">
                        WHISTLE BLOWING SYSTEM (WBS)
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:px-12 text-left lg:max-w-2xl">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            <span className="font-bold">Sistem Pengaduan Pelanggaran/Whistle Blowing System (WBS) </span> yang efektif akan mendorong partisipasi
                            masyarakat dan karyawan perusahaan untuk lebih berani bertindak untuk mencegah terjadinya kecurangan
                            dan korupsi dengan melaporkannya ke pihak yang dapat menanganinya.
                            <br/>
                            <br/>
                            Dengan sistem WBS yang baik, perusahaan akan mengubah budaya “Diam” kearah budaya yang lebih transparan
                            dan menjunjung integritas. Mengurangi tindakan kecurangan serta kerugian-kerugian perusahaan dari aktivitas
                            yang tidak baik. 
                            <br/>
                            <br/>
                            <span className="font-bold">MBC</span> siap membantu perusahaan untuk membangun sistem internal WBS, maupun menjadi rekan tetap dalam
                            menjalankan sistem pelaporan tersebut sehingga menjadi sistem pelaporan yang lebih independent dan
                            meningkatkan kepercayaan pelapor dalam penggunaannya.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">
                            Tahapan & Jasa Pengembangan dan Layanan WBS Oleh MBC
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Persiapan Infrastruktur, kebijakan,
                            SOP, serta Sumber Daya Manusia</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Peluncuran Program WBS</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Pelatihan dan Sosialisasi</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Implementasi WBS</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Monitoring dan Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}