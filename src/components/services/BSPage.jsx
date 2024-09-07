'use client'
import { BsCheckCircle } from "react-icons/bs";

export default function BSPage() {
    return (
        <section className="pt-[3rem] pb-[8rem] px-6">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-center">
                <div className="mb-[4rem]">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-2xl lg:!text-4xl lg:max-w-4xl">
                        BUSINESS STRATEGY
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:px-12 text-left lg:max-w-2xl">
                        <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                            Persaingan bisnis di era globalisasi akan semakin tajam dan keras. Hanya perusahaan yang kuat, sehat dan kompetitif
                            yang akan dapat bertahan. Diperlukan perubahan-perubahan fundamental agar perusahaan tetap eksis. Untuk
                            memenangi persiangan diperlukan sebuah transformasi bisnis agar dapat menghadapi tantangan bisnis di masa depan.
                            <br/>
                            <br/>
                            Transformasi bisnis merupakan keseluruhan proses perubahan oleh suatu korporasi untuk memposisikan diri agar lebih
                            baik dalam menyikapi dan menjawab tantangan bisnis dan perubahan lingkungan usaha yang bergerak secara cepat.
                            Transformasi juga diperlukan dalam merespon tantangan & harapan baru yang muncul dari dalam perusahaan.
                            <br/>
                            <br/>
                            Perubahan perlu dilakukan secara menyeluruh dan berkesinambungan terhadap pola pikir, pola pandang dan pola tindak
                            perusahaan, strategi bisnis, budaya perusahaan maupun perilaku dan kemampuan organisasi.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-gray-700 text-3xl mb-2">
                            Layanan MBC Dalam Strategi Bisnis Dan Transformasi Bisnis
                        </h4>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">
                                Vision, Mision, & Strategic Development & management
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Portfolio Management </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Branding Strategy</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Sustainable Marketing</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Integrated Human Resources Strategy</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Organization Transformation</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Medium and Long Term Business Strategy</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <BsCheckCircle size={30} className="text-secondary shrink-0"/>
                            <p className="text-lg">Implementation Strategy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}