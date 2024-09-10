'use client'
import Link from "next/link"
import Image from "next/image"
import React from "react"
import {
    RiMapPinLine,
    RiMessage2Line,
    RiPhoneLine,
    RiInstagramFill,
    RiFacebookBoxFill,
    RiLinkedinBoxFill
} from "react-icons/ri"

import Logo from '../../../public/images/mbc-logo.jpg'

export default function Footer() {
    return (
        <footer className="bg-primary" id="kontak">
            <div className="max-w-[78rem] mx-auto px-8 py-12 lg:pt-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start text-left ">
                            <Link href={"/"} className="bg-white px-4 py-2 rounded-sm">
                                <Image src={Logo} width={200}  height={100} alt="Logo INA" />
                            </Link>
                        </div>


                        <ul className="mt-4 md:mt-6 flex justify-start gap-4">
                            <li>
                                <Link href="https://www.linkedin.com/in/pt-mitra-bhadra-consulting-60055793/?originalSubdomain=id">
                                    <RiLinkedinBoxFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/mitrabhadraconsulting/">
                                    <RiFacebookBoxFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/mitra_bhadra/?hl=id">
                                    <RiInstagramFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="text-left">
                            <p className="text-lg font-medium text-white">Menu</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-md">
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#about">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#service">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/teams">
                                        Teams
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    className="text-gray-100 transition hover:text-gray-100/75" 
                                        href="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-left">
                            <p className="text-lg font-medium text-white">More Information</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiMessage2Line fontSize={18} className="text-gray-100" />

                                        <span className="flex-1 text-gray-100">general@mitrabhadraconsulting.com</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiPhoneLine fontSize={18} className="text-gray-100" />
                                        <span className="flex-1 text-gray-100">0821-1077-8860</span>
                                    </Link>
                                </li>

                                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <RiMapPinLine fontSize={18} className="text-gray-100"/>

                                    <address className="-mt-0.5 flex-1 not-italic text-gray-100">
                                    PT Mitra Bhadra Consulting <br/>
                                    Gedung Tifa Arum Realty Lt. 3, Ruang 304,
                                    Jl. Kuningan Barat No.26, Jakarta Selatan,
                                    12170. Indonesia
                                    </address>
                                </li>
                            </ul>
                        </div>
                </div>

                {/* <div className="mt-10 border-t border-gray-300 pt-6">
                    <div className="text-center ">
                        <p className="mt-2 text-sm text-gray-200 sm:order-first sm:mt-0">Copyright &copy; 2024 mbconsulting.id</p>
                    </div>
                </div> */}
            </div>
            <div className="bg-black py-3">
                    <div className="text-center">
                        <p className="mt-2 text-sm text-white sm:order-first sm:mt-0">Copyright &copy; 2024 mbconsulting.id</p>
                    </div>
                </div>
        </footer>
    )
}