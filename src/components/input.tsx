import React from 'react';
import { ButtonMail, ButtonWhatsapp } from '@/components/button';

type InfoProps = {
    width?: number
    hidden?: boolean
}

const InfoInput = ({ width, hidden }: InfoProps) => {
    return (
        <div className={`flex flex-col space-y-4 h-96 `}>
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black">Nombre</h2>
                <input
                    type="text"
                    placeholder="Josue"
                    className="w-[90%] px-3 py-2 border rounded-md"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black">Email</h2>
                <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-[90%] px-3 py-2 border rounded-md"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold text-black">Mensaje</h2>
                <textarea
                    placeholder="Estoy interesado en este proyecto..."
                    className="w-[90%] px-3 py-2 border rounded-md"
                    rows={4}
                ></textarea>
            </div>
        </div>
    )
}

export default InfoInput;

