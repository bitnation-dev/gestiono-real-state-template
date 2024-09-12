import { ArrowRightMiniIcon, MailIcon, WhatsappIcon } from "./icons"

interface ButtonProps {
    text: string;
    icon?: boolean;
    onClick?: () => void;
}

export const Button1 = ({ text, icon, onClick }: ButtonProps) => {
    return (
        <div className="flex justify-end py-4">
        <div className="bg-[#3B4504] text-white px-4 py-2 flex items-center cursor-pointer" onClick={onClick}>
            <p className="mr-2">{text}</p>
            {icon && <ArrowRightMiniIcon />}
        </div>
    </div>
    )
}

export const ButtonMail = ({ onClick }: ButtonProps) => {
    return (
        <button className="bg-[#3B4504] text-white px-4 py-2 flex items-center cursor-pointer w-52 space-x-4 h-12" onClick={onClick}>
            <MailIcon /> 
            <p>Contactanos</p>
        </button>
    )
}

export const ButtonWhatsapp = () => {
    return (
        <div className="bg-[#60D669] text-white px-4 py-2 flex items-center cursor-pointer w-52 space-x-4 h-12" > 
            <WhatsappIcon />
            <p>Contactanos</p>
        </div>       
    )
}

