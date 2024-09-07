'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function ESGPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-8">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-2xl lg:!text-4xl lg:max-w-3xl">
                        Environment, Social, Governance (ESG) </h1>
                    <div className="mt-8 text-left">
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
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 !text-xl lg:text-3xl mb-2">
                            Penyusunan Strategi Environment Social Governance
                            (ESG) bertujuan untuk:
                        </h4>
                        <div className="flex gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Memberikan arahan jangka panjang atas program pelaksanaan ESG.</p>
                        </div>
                        <div className="flex gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Meningkatkan efisiensi dan efektifitas program ESG.</p>
                        </div>
                        <div className="flex gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Memberikan panduan bagi seluruh insan perusahaan dalam menjalankan bisnis berlandaskan ESG.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Memudahkan bagi manajemen dalam membuat prioritas, tahapan pelaksanaan program, pembagian
                            sumber daya dan alokasi waktu</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Penyelarasan program dengan pencapaian visi, misi dan nilai perusahaan.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Mengintegrasikan ESG dengan aktivitas bisnis lainnya (operasi, manajemen risiko, compliance, dll).</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Meningkatkan nilai tambah bagi perusahaan dan stakeholder.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 !text-2xl lg:text-3xl mb-2">
                            Layanan MBC Dalam Implementasi ESG
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Penyusunan kebijakan ESG sebagai komitmen Perusahaan sebagai tanggung jawab
                            dan mitigasi risiko keberlanjutan.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Penyusunan KPI secara kuantitatif yang digunakan untuk melakukan monitoring
                            dan evaluasi kinerja implementasi ESG.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Menyusun Road Map Penerapan ESG yang selaras dengan KPI dan Rencana Strategis
                            perusahaan.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Menyusun program-program unggulan ESG yang sesuai dengan kebutuhan perusahaan
                            jangka pendek dan jangka panjang.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Menyusun Action Plan Jangka Panjang dengan tahapan yang jelas untuk membantu
                            manajemen dalam mengarahkan pelaksanaan program ESG</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Melakukan strategic advisory dalam implementasi ESG secara sistematik dan berkelanjutan
                            sampai dengan Roadmap selesai disusun.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}