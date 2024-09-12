import { MENU } from "@/constant/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function ServiceCTA() {
    const path = usePathname();
    return (
        <div className="bg-[url('/images/bg-pattern.jpg')] bg-cover lg:w-[78rem] mb-[4rem] px-6 lg:px-0 mx-auto rounded-md">
            <div className="bg-primary/85 py-10 px-6 lg:px-12">
                <h4 className="text-xl font-bold text-white text-center">Layanan MBC lainnya</h4>
                <div className="border rounded-md w-10 bg-secondary p-0.5 mt-4 mb-8 mx-auto" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        MENU[2].sub.map((data,idx) => (
                            <Link key={idx} href={data.path} className={`${data.path === path ? "bg-secondary text-white rounded-sm" : ""}bg-white hover:bg-secondary hover:text-white text-primary rounded-sm p-4`}>
                                {data.name}
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}