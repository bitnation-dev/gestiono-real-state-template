import { StartIcon } from "./icons"

const CardComment = () => {
    return (
        <div className="w-1/4 h-48 border-2 border-black flex flex-col p-2">
            <div className="flex h-1/2 items-center">
                <div className="w-[70px] h-[70px] bg-black rounded-full mr-3"></div>
                <div>
                <p className="text-black">Nombre Del Cliente</p>
                <div className="inline-flex">
                {Array.from({length: 5}).map((_,index) => (
                    <StartIcon key={index} />
                ))}
                </div>
                </div>
            </div>
            <div className=" h-1/2 text-black">
                <p>Emira Group es una empresa inmobiliaria dedicada a ofrecer soluciones excepcionales en la compra, venta y alquiler de propiedades. </p>
            </div>

        </div>
    )
}

export default CardComment