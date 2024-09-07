import { MENU } from "@/constant/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function ServiceCTA() {
    const path = usePathname();
    return (
        <div className="bg-[url('/images/bg-pattern.jpg')] bg-cover lg:w-[78rem] mb-[4rem] mx-auto rounded-md">
            <div className="bg-primary/85 py-10 px-12">
                <h4 className="text-xl font-bold text-white mb-6">Another MBC Services</h4>
                <div className="grid grid-cols-4 gap-6">
                    {
                        MENU[2].sub.map((data) => (
                            <Link href={data.path} className={`${data.path === path ? "bg-secondary text-white rounded-sm" : ""}bg-white hover:bg-secondary hover:text-white text-primary rounded-sm p-4`}>
                                {data.name}
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}