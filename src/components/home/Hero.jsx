'use client'
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="wrapper bg-[url('/images/mbc-heroimg.jpg')] bg-cover mt-[-5rem] " id="beranda" >
            <div className="flex flex-col h-[100vh] bg-primary/55 lg:bg-primary/5 justify-center items-end">
                <div className="px-6 text-left mr-10 md:mr-[4em] md:mt-[-4em] md:mt-[-2em]">
                    <h6 className="mx-auto mt-6 uppercase w-full text-white lg:max-w-3xl">
                        achieve business sustainablity by
                    </h6>
                    <h1 className="text-white font-extrabold mt-2 mb-6 w-full !leading-snug !text-5xl lg:!text-[3em]">
                        Creating <br/> Shared Value
                    </h1>
                    <button 
                        className="relative rounded-xs px-6 py-2 overflow-hidden  border border-white text-white transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-secondary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80"> 
                        <Link 
                            href={'/'} 
                            class="relative z-10"
                            onClick={(e) => {
                                setTimeout(() => {
                                document.getElementById("tentang") &&
                                    document
                                    .getElementById("tentang")
                                    .scrollIntoView({ behavior: "smooth"});
                                }, 500)
                                }}
                        >
                            About Us
                        </Link>
                    </button>
                </div>
            </div>
            {/* <div className="h-[15vh] bg-white backdrop-filter backdrop-blur-lg bg-opacity-45">
                <div className="flex flex-col justify-center items-center mx-auto p-4">
                    <p className="text-lg">Trusted by</p>
                </div>
            </div> */}
        </section>
    )
}