'use client'
import Image from "next/image"
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { SERVICE } from "@/constant/data";

export default function Services() {
    return (
        <section className="mx-auto py-[8rem]" id="layanan">
            <div className="grid grid-cols-1 lg:grid-cols-4 text-white gap-0">
                {
                    SERVICE.map((data, idx) => (
                        <div key={idx} className={`flex flex-col gap-6 justify-center items-center px-12 py-16 ${data.style}`}>
                            {data.icons}
                            <h1 className="text-center font-bold text-2xl mb-4">{data.title}</h1>
                            <p className="text-justify text-md">{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}