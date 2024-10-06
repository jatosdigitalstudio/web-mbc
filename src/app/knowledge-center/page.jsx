'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import Loading from "../loading";
import {BLOG} from "@/constant/data"
import { HiOutlineUser, HiOutlineClock  } from "react-icons/hi";

export default function KCPage() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />
    return (
        <section className="lg:max-w-[90rem] mx-auto py-[4rem] px-8" >
            <div className="flex flex-col mx-auto justify-center items-center">
                <div className="mb-12">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-2xl lg:max-w-4xl lg:!text-5xl">
                            Pusat Pengetahuan
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-12 mt-6">
                    {
                        BLOG.map((cx,idx) => {
                            return (
                            <div key={idx} className="flex flex-col gap-2 w-80 h-50 bg-primary text-white px-6 py-8 w-30 rounded-md">
                                <h1 className="text-white font-reguler text-md mb-auto">{cx.title}</h1>
                                <div className="flex flex-row items-center gap-2">
                                    <HiOutlineUser size={16} />
                                    <p className="text-xs">{cx.author}</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <HiOutlineClock size={16} />
                                    <p className="text-xs">Selasa, 7 Maret 2020</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="h-[30vh]"></div>
            </div>
        </section>
    )
}