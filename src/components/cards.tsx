'use client'
import { useState } from "react";
import { formatted } from "./formatted";
import { HeartIcon, BathIcon, BedIcon, ParkingIcon } from "./icons";
import Image from "next/image";
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
const Card = ({ image, price, location, bedrooms, bathrooms, parking, meters }: CardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    }

    return (
        <div className=" h-80 flex flex-col mt-4 p-2 ">
            <div className="w-full h-full relative">
                <Image width={1000} height={1000} src={image} alt="" className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2" onClick={toggleFavorite}>
                    <HeartIcon color={isFavorite} />
                </button>
            </div>
            <div className="h-16 flex flex-grow space-x-4 py-4">
                <h1 className="text-2xl font-bold">{"US$" + formatted(price)}</h1>
                <p className="text-sm text-black pt-2"> {meters + " m2"} </p>
            </div>
            <div className="h-16 flex flex-grow space-x-10 ">
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