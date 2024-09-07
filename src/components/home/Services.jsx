'use client'
import Link from "next/link";
import { SERVICE } from "@/constant/data";

export default function Services() {
    return (
        <section className="mx-auto py-[8rem]" id="layanan">
            <div className="grid grid-cols-1 lg:grid-cols-4 text-white gap-0">
                {
                    SERVICE.map((data, idx) => (
                        <Link 
                            href={data.path} 
                            key={idx} 
                            className={`flex flex-col gap-6 justify-center items-center px-8 lg:px-12 py-16 hover: ${data.style}`}
                        >
                            {data.icons}
                            <h1 className="text-center font-bold text-2xl mb-4">{data.title}</h1>
                            <p className="text-justify text-md">{data.text}</p>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}