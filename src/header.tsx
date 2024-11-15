"use client"

import { useRouter } from "next/navigation";
import { MainIcon } from "./components/icons";
import { Container } from "@bitnation-dev/components"
import { usePathname } from "next/navigation";


const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <Container className=" bg-black !p-0 w-full !m-0"> 
            <div className="flex justify-between items-center text-white h-full w-full !p-0 !m-0">
                <div className="pl-12 cursor-pointer" onClick={() => router.push("/")}>
                <MainIcon />
            </div>
            <div className="flex space-x-4 ">
                <a href="/" className={`hover:text-[#9C9C78] ${pathname === "/" ? "text-[#9C9C78]" : ""}`}>Home</a>
                <a href="/proyects" className={`hover:text-[#9C9C78] ${pathname === "/proyects" ? "text-[#9C9C78]" : ""}`}>Inmuebles</a>
                <a href="/aboutus" className={`hover:text-[#9C9C78] ${pathname === "/aboutus" ? "text-[#9C9C78]" : ""}`}>Nosotros</a>
                </div>
            </div>
        </Container>
    )
}

export default Header;