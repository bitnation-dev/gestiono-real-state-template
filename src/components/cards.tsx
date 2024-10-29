'use client'
import { useState } from "react";
import { formatted } from "./formatted";
import { HeartIcon, BathIcon, BedIcon, ParkingIcon } from "./icons";
import Image from "next/image";
type CardProps = {
    type?: "venta" | "renta";
    TP?: "Apartamento" | "Casa" | "Condominio" | "EcoAmigable";
    id?: number;
    price: number;
    bathrooms: number;
    bedrooms: number;
    parking: number;
    operation: string;
    image: string;
    location: string;
    meters: number;
    onClick?: () => void;
}
const Card = ({  image, price, location, bedrooms, bathrooms, parking, meters, onClick }: CardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    }

    return (

        <div className="flex flex-col mt-4 p-1 cursor-pointer" >
            <div className="w-full h-full relative">
            <Image onClick={onClick} width={1000} height={1000} src={image} alt="" className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2" onClick={toggleFavorite}>
                    <HeartIcon color={isFavorite} />
                </button>

            </div>
            <div className=" flex space-x-4 py-4" >
                <h1 className="text-2xl text-[#3B4504] font-bold ">{"US$" + formatted(price)}</h1>
                <p className="text-sm text-black pt-2"> {meters + " m2"} </p>
            </div>
            <div className=" flex flex-grow space-x-2 ">
                <div className="flex items-center space-x-2">
                    <BathIcon />
                    <p className="text-sm text-gray-500">{bathrooms + " Baths"} </p>
                </div>
                <div className="flex items-center space-x-2">
                    <BedIcon />
                    <p className="text-sm text-gray-500 ">{bedrooms + " Beds"}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <ParkingIcon />
                    <p className="text-sm text-gray-500">{parking + " Parking"}</p>
                </div>
            </div>
            <p className="text-sm text-[#3B4504] pt-2 flex flex-col justify-end">{location}</p>
        </div>
    )
}

export default Card;