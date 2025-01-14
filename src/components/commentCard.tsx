import { StartIcon } from "./icons"

const CardComment = () => {
    return (
        <div className=" border-2 border-black flex flex-col p-4 text-balance">
            <div className="flex h-1/2 items-center">
                <div className="w-20 h-20 bg-black rounded-full mr-3"></div>
                <div>
                <p className="text-[#3B4504] uppercase">Nombre Del Cliente</p>
                <div className="inline-flex">

                {Array.from({length: 5}).map((_,index) => (
                    <StartIcon key={index} />
                ))}
                </div>
                </div>
            </div>
            <div className="pt-2 pl-2 text-black">
                <p>Emira Group es una empresa inmobiliaria dedicada a ofrecer soluciones excepcionales en la compra, venta y alquiler de propiedades. </p>
            </div>

        </div>
    )
}

export default CardComment