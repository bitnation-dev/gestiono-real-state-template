import { MainIcon } from "./components/icons";

const Menu = () => {
    return (
        <div className="flex justify-between items-center p-3 bg-black text-white top-0 w-full z-50 h-20">
            <div className="pl-12">
                <MainIcon />
            </div>
            <div className="flex space-x-4 pr-12">
                <a href="#" className="hover:text-[#3B4504]">Home</a>
                <a href="#" className="hover:text-[#3B4504]">Inmuebles</a>
                <a href="#" className="hover:text-[#3B4504]">Nosotros</a>
            </div>
        </div>
    )
}

export default Menu;