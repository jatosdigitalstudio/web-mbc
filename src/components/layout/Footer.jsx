'use client'
import Link from "next/link"
import Image from "next/image"
import React from "react"
import {
    RiFacebookCircleFill,
    RiYoutubeFill,
    RiTiktokFill,
    RiMapPinLine,
    RiMessage2Line,
    RiPhoneLine,
    RiInstagramFill
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
                                <Image src={Logo} width={140}  height={100} alt="Logo INA" />
                            </Link>
                        </div>

                        <p className="mt-6 max-w-md text-left leading-relaxed text-gray-100 text-[10px] sm:max-w-xs ">
                            Di Mitra Bhadra Consulting, kami ingin berbagi pengalaman kami kepada Perusahaan dalam
                            menjalankan dan mengembangkan bisnis dengan didasari dengan Prinsip GCG yang solid serta
                            dapat menciptakan keuntungan dan nilai dalam rangka peningkatan daya saing 
                        </p>

                        <ul className="mt-4 md:mt-6 flex justify-start gap-4 md:gap-6">
                            <li>
                                <Link href="https://www.facebook.com/profile.php?id=100090210174530&mibextid=ZbWKwL">
                                    <RiFacebookCircleFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/channel/UClXAuxKJq7L8z5X11bpSQLA">
                                    <RiYoutubeFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/lpkindonesianippon/">
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
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#tentang">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#program">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#facility">
                                        Teams
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    className="text-gray-100 transition hover:text-gray-100/75" 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSc1DMgDQ5U0mkW_-p1F47imuryzPDkW9M7vhLK02N8UXb3frQ/closedform">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-left">
                            <p className="text-lg font-medium text-white">Contact Us</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiMessage2Line fontSize={18} className="text-gray-100" />

                                        <span className="flex-1 text-gray-100">general@mbconsulting.id</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiPhoneLine fontSize={18} className="text-gray-100" />
                                        <span className="flex-1 text-gray-100">021 27531532</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiPhoneLine fontSize={18} className="text-gray-100" />
                                        <span className="flex-1 text-gray-100">0878 8015 8570</span>
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
            <div className="bg-gray-500 py-3">
                    <div className="text-center">
                        <p className="mt-2 text-sm text-white sm:order-first sm:mt-0">Copyright &copy; 2024 mbconsulting.id</p>
                    </div>
                </div>
        </footer>
    )
}