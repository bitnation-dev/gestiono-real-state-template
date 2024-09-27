import { ArrowRightMiniIcon, MailIcon, WhatsappIcon } from "./icons"

interface ButtonProps {
    text?: string;
    icon?: boolean;
    onClick?: () => void;
    width?: number
}

export const Button1 = ({ text, icon, onClick }: ButtonProps) => {
    return (
        <div className="flex py-4">
        <div className="bg-[#3B4504] text-white px-4 py-2 flex items-center cursor-pointer" onClick={onClick}>
            <p className="mr-2">{text}</p>
            {icon && <ArrowRightMiniIcon />}
        </div>
    </div>
    )
}


export const ButtonMail = ({ text, onClick, width }: ButtonProps) => {
    return (
        <button className={`bg-[#3B4504] text-white px-4 py-2 flex items-center cursor-pointer ${width ? `w-${width}` : `w-52`} space-x-4 h-12 justify-center`}  onClick={onClick}>
            <MailIcon /> 
            <p>{text}</p>
        </button>
    )
}

export const ButtonWhatsapp = ({ text, onClick, width }: ButtonProps) => {
    return (
        <div className={`bg-[#60D669] text-white px-4 py-2 flex items-center cursor-pointer ${width ? `w-${width}` : `w-52`} space-x-4 h-12 justify-center`}  onClick={onClick}> 
            <WhatsappIcon />
            <p>{text}</p>
        </div>       
    )
}

