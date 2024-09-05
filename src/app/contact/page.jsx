'use client'
import { useState,useEffect } from "react"
import Loading from "@/app/loading";
import { HiEnvelope, HiPhone, HiMiniBuildingOffice  } from "react-icons/hi2";

export default function ContactPage() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <section className="pt-[3rem] pb-[8rem]">
            <div className="flex flex-col lg:max-w-[78rem] mx-auto justify-center items-start">
                <div className="mb-[3rem] px-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <h1 className="bg-primary rounded-md px-8 py-4 text-white font-semibold leading-snug !text-4xl lg:max-w-4xl">
                        Contact Us
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-12">
                    <form className="bg-primary w-[36rem] px-10 py-8 rounded-md">
                        <div className="mb-4">
                            <label className="mb-2 text-left text-white ">Name</label>
                            <input
                                type="text"
                                placeholder="Type your name" 
                                className="w-full rounded-sm bg-gray p-2 rounded-sm" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left text-white">Email Address</label>
                            <input
                                type="email"
                                placeholder="Type your email address" 
                                className="w-full rounded-sm bg-gray p-2 rounded-sm" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 text-left text-white">Phone Number</label>
                            <input
                                type="number"
                                placeholder="Type your phone number" 
                                className="w-full rounded-sm bg-gray p-2 rounded-sm" 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 text-left text-white">Message</label>
                            <textarea
                                placeholder="Type your message" 
                                className="w-full rounded-sm bg-gray p-2 rounded-sm" 
                            />
                        </div>

                        <button className="w-full bg-secondary text-white p-2 rounded-md" >Send</button>
                    </form>
                    <div className="flex flex-col gap-6 ml-8">
                        <h4 className="font-bold text-gray-700 text-2xl mb-2">More Information</h4>
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
                                <p className="text-md">021 2753 1532</p>
                                <p className="text-md">0878 8015 8570</p>
                                <p className="text-md">0878 2325 8269</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <HiEnvelope size={28} className="text-primary"/>
                            <h4 className="text-md">
                                general@mbconsulting.id
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}