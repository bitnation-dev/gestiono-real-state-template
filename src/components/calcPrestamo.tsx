import { Button1 } from "./button";

const CalcPrestamo = () => {
    return (
        <div className="">
        <h1 className="font-bold text-2xl text-black uppercase">
            Calculadora de Préstamo
        </h1>
        <div className="flex text-black space-x-8 pb-8">
            <div className="flex flex-col ">
                <label htmlFor="tasaInteres">Tasa de Interés:</label>
                <input id="tasaInteres" name="tasaInteres" className="bg-[#F5F5F2] px-2" placeholder="17.0%"/>
            </div>
            <div className="flex flex-col  ">
                <label htmlFor="inicial">Inicial:</label>
                <input id="inicial" name="inicial" className="bg-[#F5F5F2] px-2" placeholder="$18,000.00"/>
            </div>
        </div>
        <div className="flex text-black space-x-8">
            <div className="flex flex-col">
                <label htmlFor="tiempo">Tiempo:</label>
                <select id="tiempo" name="tiempo" className="w-48 h-6 bg-[#F5F5F2] px-2">
                    <option value="1">1 año</option>
                    <option value="2">2 años</option>
                    <option value="3">3 años</option>
                    <option value="4">4 años</option>
                    <option value="5">5 años</option>
                    <option value="6">6 años</option>
                    <option value="7">7 años</option>
                    <option value="8">8 años</option>
                    <option value="9">9 años</option>
                    <option value="10">10 años</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="precioVivienda">Precio de Vivienda:</label>
                <input id="precioVivienda" name="precioVivienda" className="bg-[#F5F5F2] px-2" placeholder="$120.000.00"/>
            </div>
            </div>
            <div className="flex flex-col pt-8">
                    <p className="text-black">Mensualidad</p>
                    <p className="text-black font-bold text-2xl">$1,080.00</p>
                <Button1 text="Obtener mas Informacion" icon/>
            </div>
        </div>
    )
}

export default CalcPrestamo;