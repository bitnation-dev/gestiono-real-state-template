'use client'

import { MainIcon } from "./components/icons";
import { Container } from "@bitnation-dev/components";


const Header = () => {
    {/*const pathname = usePathname();*/}
    return (
        <Container>      
            {/*flex justify-between items-center bg-gradient-to-b from-black via-black to-transparent text-white z-50 h-20 w-full !p-0*/ }     
            <div className="flex justify-between items-center bg-black text-white z-50 h-20 w-full !p-0">
                <div className="pl-12">
                <MainIcon />
            </div>
            <div className="flex space-x-4 pr-12">
                <a href="/" className="hover:text-[#3B4504]">Home</a>
                <a href="/proyects" className="hover:text-[#3B4504]">Inmuebles</a>
                <a href="/aboutus" className="hover:text-[#3B4504]">Nosotros</a>
                </div>
            </div>
        </Container>
    )
}

export default Header;