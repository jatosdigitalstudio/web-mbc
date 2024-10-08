'use client'
import Link from "next/link"

export default function Hero() {
    return (
        <section className="wrapper bg-[url('/images/mbc-hero-mobile.png')] md:bg-[url('/images/mbc-hero.png')] bg-no-repeat bg-cover mt-[-5rem] " id="beranda" >
            <div className="flex flex-col h-[100vh] lg:bg-primary/5 justify-center items-end">
                <div className="px-6 text-left mt-[-16rem] md:mt-0 mr-10 md:mr-[12em] ">
                    <h6 className="mx-auto mt-6 uppercase w-full text-white !text-lg lg:max-w-3xl">
                        achieve business sustainablity by
                    </h6>
                    <h1 className="text-white font-extrabold mt-2 mb-6 w-full !leading-snug !text-4xl lg:!text-[3em]">
                        Creating <br/> Shared Value
                    </h1>
                    <button 
                        className="relative rounded-sm px-6 py-2 overflow-hidden bg-primary md:bg-transparent border border-white text-white transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-primary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80"> 
                        <Link 
                            href={'/'} 
                            class="relative z-10"
                            onClick={(e) => {
                                setTimeout(() => {
                                document.getElementById("about") &&
                                    document
                                    .getElementById("about")
                                    .scrollIntoView({ behavior: "smooth"});
                                }, 500)
                                }}
                        >
                            Tentang Kami
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