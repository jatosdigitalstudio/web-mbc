'use client'
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import Logo from '../../../public/images/mbc-logo-tp.png'
import {RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill} from 'react-icons/ri'
import { MENU } from "@/constant/routes";

export default function Header() {
  const path = usePathname();

  const Navbarlist =() => {
      return MENU.map((link, i) => (
        <li key={i}>
          {
            link.sub ? (
              <details>
                <summary className="flex text-black text-[14px] font-[400] py-3 gap-4 rounded-sm cursor-pointer items-center hover:bg-primary hover:text-white hover:rounded-sm">
                    {link.name}
                </summary>
                <ul className="w-80 rounded-sm bg-white backdrop-filter backdrop-blur-lg bg-opacity-95">
                  {link.sub.map((s, i) => (
                    <li key={i} >
                      <Link href={s.path} key={i} className={`${s.path === path ? "bg-primary text-white rounded-sm" : ""} flex rounded-sm text-black text-[14px] font-[400] py-2 gap-4 cursor-pointer items-center hover:bg-primary hover:text-white hover:rounded-sm`}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link href={link.path} key={i} className={`${link.path === path ? "bg-primary text-white rounded-sm" : ""} flex rounded-sm text-black text-[14px] font-[400] py-3 gap-4 cursor-pointer items-center hover:bg-primary hover:text-white hover:rounded-sm`}>
                {link.name}
              </Link>
            )
          }
        </li>
    )) 
  }

  return (
      <nav className="navbar sticky bg-white backdrop-filter backdrop-blur-lg bg-opacity-45 px-4 h-[80px] lg:px-20 3xl:px-0 z-30">
        <div className="navbar-start">
            <Link href='/' className='flex justify-center items-center font-bold text-xl tracking-[-6px] text-black tracking-tighter'>
                <Image src={Logo} width={150} height={100} alt="Logo MBC" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 scroll-smooth">
            <Navbarlist />
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <ul className="flex justify-start gap-4">
                <li>
                    <Link href="https://www.linkedin.com/in/pt-mitra-bhadra-consulting-60055793/?originalSubdomain=id" target="_blank">
                        <RiLinkedinBoxFill
                            fontSize={22}
                            className="text-black transition hover:text-primary"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/mitrabhadraconsulting/" target="_blank">
                        <RiFacebookBoxFill
                            fontSize={22}
                            className="text-black transition hover:text-primary"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/mitra_bhadra/?hl=id" target="_blank">
                        <RiInstagramFill
                            fontSize={22}
                            className="text-black transition hover:text-primary"
                        />
                    </Link>
                </li>
            </ul>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 gap-4 shadow bg-white rounded-box w-[350px] z-[30]">
                    <Navbarlist/>
                </ul>
            </div>
        </div>
    </nav>
  )
}