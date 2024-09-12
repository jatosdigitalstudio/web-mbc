'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import { HiEnvelope, HiPhone, HiMiniBuildingOffice  } from "react-icons/hi2";

export default function ContactPage() {
    const [loading,setLoading] = useState(true)
    const [formValues,setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);
    
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({ [name]: value});
    }
    async function handleSubmit(event) {
        event.preventDefault()
        try {
        const response = await fetch("/api/sendMessage", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
            "Content-Type": "application/json",
            },
        })
        
        if (response.ok) {
            setLoading(false);
            setIndex(1)
        } else {
            setLoading(false);
        }
        } catch (error) {
            setLoading(false);
            console.error("Network Error:", error);
        }
    }

    if (loading) return <Loading />
    return ( 
        <section className="pt-[3rem] pb-[8rem] px-8">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-start">
                <div className="mb-[3rem] lg:px-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl">
                        Hubungi Kami
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-12">
                    <form onSubmit={handleSubmit} className="bg-primary lg:w-[36rem] px-10 py-8 rounded-md">
                        <div className="mb-4">
                            <label className="mb-2 text-left text-white ">Nama</label>
                            <input
                                type="text"
                                className="w-full rounded-sm bg-gray p-2 rounded-sm"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left text-white">Alamat Email</label>
                            <input
                                type="email"
                                className="w-full rounded-sm bg-gray p-2 rounded-sm" 
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left text-white">Nomor Handphone</label>
                            <input
                                type="number"
                                className="w-full rounded-sm bg-gray p-2 rounded-sm"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 text-left text-white">Pesan</label>
                            <textarea
                                className="w-full rounded-sm bg-gray p-2 rounded-sm"
                                value={formValues.message}
                                onChange={handleChange}
                            />
                        </div>
                        {loading ? (
                            <button
                            disabled
                            type="button"
                            className="w-full text-white text-xs bg-secondary justify-center font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
                            >
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white justify-center animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                                />
                                <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                                />
                            </svg>
                            Mohon Tunggu...
                            </button>
                        ) : (
                            <button
                            type="submit"
                            className="w-full text-white bg-secondary font-medium rounded-md text-sm px-5 py-2.5 text-center"
                            >
                            Kirim
                            </button>
                        )}
                    </form>
                    <div className="flex flex-col gap-6 lg:ml-8">
                        <h4 className="font-bold text-gray-700 text-2xl mb-2">Informasi Selengkapnya</h4>
                        <div className="flex flex-row gap-4">
                            <HiMiniBuildingOffice size={28} className="text-primary"/>
                            <h4 className="text-md">
                                <span className="font-bold">PT Mitra Bhadra Consulting</span> <br/>
                                Gedung Tifa Arum Realty Lt. 3, Ruang 304, <br/>
                                Jl. Kuningan Barat No.26, Jakarta Selatan, <br/>
                                12170. Indonesia
                            </h4>
                        </div>
                        <div className="flex flex-row gap-4">
                            <HiPhone  size={28} className="text-primary"/>
                            <div className="flex flex-col">
                                <p className="text-md">0821 1077 8860</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <HiEnvelope size={28} className="text-primary"/>
                            <h4 className="text-md">
                                general@mitrabhadraconsulting.com
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}