'use client'
import { useState } from "react";
import { formatted } from "./formatted";
type CardProps = {
    title?: string;
    description?: string;
    image: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    meters: number;
}
const Card = ({title, description, image, price, location, bedrooms, bathrooms, parking, meters}: CardProps) => {
    const [color, setColor] = useState('transparent');
    
    const onColor = () => {
        setColor(prevColor => prevColor === 'transparent' ? 'red' : 'transparent');
    }

    return (
        <div className="w-96 h-80 flex flex-col mt-4">
            <div className="w-full h-full relative">
                <img src={image} alt="" className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2" onClick={onColor}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke={color === 'red' ? 'red' : 'white'} />
                    </svg>
                </button>
            </div>
            <div className="h-16 flex flex-grow space-x-4 py-4">
                <h1 className="text-2xl font-bold">{"US$" + formatted(price)}</h1>
                <p className="text-sm text-black pt-2"> {meters + " m2"} </p>
            </div>
            <div className="h-16 flex flex-grow space-x-10 ">
                <p className="text-sm text-gray-500 pt-2 ">{bathrooms + " Baths"} </p>
                <p className="text-sm text-gray-500 pt-2">{bedrooms + " Beds"}</p>
                <p className="text-sm text-gray-500 pt-2">{parking + " Parking"}</p>
            </div>
            <p className="text-sm text-black pt-2 flex flex-col justify-end">{location}</p>
        </div>
    )
}

export default Card;