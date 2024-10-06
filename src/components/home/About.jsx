'use client'
export default function About() {
    return (
        <section className="lg:max-w-[90rem] mx-auto pt-[8rem] pb-[2rem] px-6" id="about" >
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="lg:mr-12 mb-8">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Tentang Kami
                        </h1>
                    </div>
                </div>
                <div className="lg:px-12 text-justify lg:max-w-2xl">
                    <p className="mx-auto text-md leading-relaxed w-full text-grey ">
                        Mitra Bhadra Consulting diprakarsai oleh para profesional di berbagai bidang.
                        <span className="font-bold underline"> Masing-masing profesional memiliki pengalaman sebagai top executive 
                        yang menangani beragam bisnis, jabatan publik, Presiden Direktur Bursa Efek Jakarta, CEO Unilever dan Managing Director & Country 
                        Head Bank ING Indonesia.</span> 
                        <br/>
                        <br/>
                        Dengan beragam latar belakang profesi, kami memiliki visi yang sama, yaitu menciptakan proses bisnis yang 
                        berkelanjutan. Fokus utama kami adalah pada implementasi ESG (Environmental, Social, and Governance) serta 
                        GRC (Governance, Risk, and Compliance) untuk memastikan keberlanjutan jangka panjang dan tanggung jawab di 
                        seluruh aspek bisnis
                        <br/>
                        <br/>
                        Di Mitra Bhadra Consulting, pengalaman kami bagikan untuk memberikan strategic
                        advisory kepada perusahaan dalam mengembangkan dan mengimplementasikan strategi bisnis yang 
                        didasari oleh pelaksanaan Good Corporate Governance yang solid serta melaksanakan CSR dalam 
                        rangka peningkatan daya saing.
                    </p>
                </div>
            </div>
        </section>
    )
}