'use client'
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import Logo from '../../public/images/mbc-logo-tp.png'
import {RiFacebookBoxFill, RiInstagramFill, RiYoutubeFill, RiLinkedinBoxFill} from 'react-icons/ri'

export default function Header() {
  const pathname = usePathname();

  return (
      <nav className="navbar sticky bg-white backdrop-filter backdrop-blur-lg bg-opacity-45 px-4 h-[80px] lg:px-20 3xl:px-0 z-30">
        <div className="navbar-start">
            <Link href='/' className='flex justify-center items-center font-bold text-xl tracking-[-6px] text-black tracking-tighter'>
                <Image src={Logo} width={150} height={100} alt="Logo MBC" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 scroll-smooth">
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/'} >About</Link></li>
            <li><Link href={'/'} >Services</Link></li>
            <li><Link href={'/'} >Teams</Link></li>
            <li><Link href={'/'} >Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <ul className="flex justify-start gap-4">
                <li>
                    <Link href="https://www.tiktok.com/@lpk.kizuna" target="_blank">
                        <RiLinkedinBoxFill
                            fontSize={22}
                            className="text-black transition hover:text-black/75"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/lpkkizunanippon/" target="_blank">
                        <RiFacebookBoxFill
                            fontSize={22}
                            className="text-black transition hover:text-black/75"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/@LPKKizunaNippon" target="_blank">
                        <RiYoutubeFill
                            fontSize={22}
                            className="text-black transition hover:text-black/75"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/lpkkizunanippon/" target="_blank">
                        <RiInstagramFill
                            fontSize={22}
                            className="text-black transition hover:text-black/75"
                        />
                    </Link>
                </li>
            </ul>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 gap-4 shadow bg-black rounded-box w-[350px] z-[30]">
                    <li><Link href={'/'} >Home</Link></li>
                    <li><Link href={'/'} >About</Link></li>
                    <li><Link href={'/'} >Services</Link></li>
                    <li><Link href={'/'} >Teams</Link></li>
                    <li><Link href={'/'} >Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}