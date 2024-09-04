'use client'
import Image from "next/image"
import Link from "next/link"

export default function Clients() {
    return (
        <section className="bg-base-100 mx-auto py-[6rem]" id="tentang" >
            <div className="flex flex-col lg:max-w-[90rem] mx-auto justify-center items-center">
                <div className="mb-16">
                    <div className="border rounded-md w-20 bg-secondary p-0.5 mb-4" />
                    <div className="bg-primary rounded-md px-8 py-4">
                        <h1 className="text-white font-semibold leading-snug !text-4xl lg:max-w-4xl lg:!text-6xl">
                            Klien Kami
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-7 gap-6">
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                    <Image src="/images/avatar.png" width={100} height={80} alt="Logo Client"/>
                </div>
            </div>
        </section>
    )
}