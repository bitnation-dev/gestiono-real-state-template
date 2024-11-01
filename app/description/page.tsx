"use client"

import {  ButtonMail, ButtonWhatsapp } from "@/components/button";
import CalcPrestamo from "@/components/calcPrestamo";
import Card from "@/components/cards";
import { formatted } from "@/components/formatted";
import { ArrowButtonLeft, ArrowButtonRight, BathIcon, BedIcon, ParkingIcon } from "@/components/icons";
import InfoInput from "@/components/input";
import { Container  } from "@bitnation-dev/components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Propiedades {
    id: number;
    type: string;
    price: number;
    bathrooms: number;
    description: string;
    bedrooms: number;
    parking: number;
    operation: string;
    image: string;
    location: string;
    meters: number;
    title: string;
  }

const Description: React.FC<Propiedades> = ({ price, location,meters, bathrooms, parking, bedrooms, description })=> {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = 10;
    const router = useRouter();
    const searchParams =new URLSearchParams(useSearchParams());
    const id = searchParams.get('id');
    const [data, setData] = useState<Propiedades[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch('/data/house.json');
                    if (!response.ok) {
                        throw new Error('Error al cargar las propiedades');
                    }
                    const result = await response.json();
                    console.log('Respuesta del API:', result);
                    const selectedProperty = result.properties.find((property: Propiedades) => property.id === Number(id));
                    setData(selectedProperty ? [selectedProperty] : []);
                } catch (error) {
                    setError((error as Error).message);
                }
            };

            fetchData();
        }
    }, [id]);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % totalImages
        );
    };
    if (!data) return <div className="flex justify-center items-center h-screen text-2xl font-bold">Cargando...</div>;
    return (
        <>
        
        <Container>
            <div className="">
                <h1 className="text-[#0E87A2] text-3xl">
                    {data.length > 0 ? data[0].location : "Ubicación no disponible"} 
                </h1>
            </div>
            <div className=" flex space-x-2 items-center space-x-4">
            <h1 className="text-2xl text-[#3B4504] font-bold ">{"US$" + formatted(data.length > 0 ? data[0].price : 0)}</h1>
                <div className="flex items-center space-x-2">
                    <BathIcon />
                    <p className="text-sm text-gray-500">{data.length > 0 ? data[0].bathrooms : "0 Baths"} </p>
                </div>
                <div className="flex items-center space-x-2">
                    <BedIcon />
                    <p className="text-sm text-gray-500 ">{data.length > 0 ? data[0].bedrooms : "0 Beds"}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <ParkingIcon />
                    <p className="text-sm text-gray-500">{data.length > 0 ? data[0].parking : "0 Parking"}</p>
                </div>
                <div className=" flex space-x-4 py-4" >
                    <p className="text-sm text-black pt-2"> {data.length > 0 ? data[0].meters : "0 "} m2 </p>
                </div>
                </div>
                <div className="flex border-t border-b border-gray-300 items-center mb-8 py-2">
                    <button className="text-black p-4 hover:text-white hover:bg-black font-bold"> Descripcion </button>
                    <button className="text-black p-4 hover:text-white hover:bg-black font-bold"> Ubicacion </button>
                    <button className="text-black p-4 hover:text-white hover:bg-black font-bold"> Calculo de Prestamo </button>
                    <button className="text-black p-4 hover:text-white hover:bg-black font-bold"> Proyectos Similares </button>
                </div>
            </Container>
                <Container>
                    <div className="flex ">
                        <div className="flex flex-col space-y-2 " >
                            <div className="h-[50vh] flex justify-center items-center relative">
                                <div className="flex px-4 w-full justify-between">
                                    <button className="z-10" onClick={handlePrevImage}>
                                        <ArrowButtonLeft />
                                    </button>
                                    <button className="z-10" onClick={handleNextImage}>
                                        <ArrowButtonRight />
                            </button>
                        </div>
                        <div className=" overflow-x-auto">
                            <div className="inline-flex space-x-1">
                                {Array.from({ length: 10 }).map((_, index) => (
                                        <Image key={index} src={data.length > 0 ? data[0].image : ""} alt={`Imagen ${currentImageIndex}`} fill />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" overflow-x-auto ">
                        <div className="flex space-x-1">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Image key={index} src={`/image/image${index + 1}.jpg`} alt={`Imagen ${index}`} width={150} height={150} />
                            ))}
                            </div>
                        </div>
                    </div>
                        <div className="flex flex-col space-y-2 px-4 ">
                        <h1 className="text-2xl font-bold text-black">CONTACTOS</h1>
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden pt-2">
                                <Image
                                    src="/imagenP.png"
                                    alt="Foto de perfil de Miguel A. Nova"
                                    width={90}
                                    height={90}
                                    objectFit="cover"
                                    objectPosition="top"
                                    />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-black">
                                    Miguel A. Nova
                                </h2>
                                <p className="text-sm text-black">
                                    Broker Inmobiliario
                                </p>
                                <p className="text-sm text-blue-500 cursor-pointer">
                                    a.nova@emira.com.do
                                </p>
                            </div>
                        </div>
                        <InfoInput />
                        <div className="w-full space-y-2 flex flex-col justify-center items-center">
                            <ButtonMail text="Contáctanos" width={80} />
                            <ButtonWhatsapp text="Contáctanos" width={80} />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                    <div className="pb-6">
                        <h1 className="text-black font-bold text-4xl"> Descripción</h1>
                        <p className="text-black">{data.length > 0 ? data[0].description : "No hay descripción disponible"}</p>
                    </div>
                    <div>
                        <h1 className="text-black font-bold text-4xl">Ubicacion</h1>
                        <div className="mapContainer">
                        <iframe
                                width="600"
                                height="500"
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?${new URLSearchParams({
                                    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '', 
                                    q: data.length > 0 ? data[0].location : "",
                                })}`}
                                >
                            </iframe>
                        </div>
                    </div>
                    <CalcPrestamo />
                    <div>
                        <h1 className="text-black text-3xl font-bold">Proyectos similares</h1>
                        <div className="overflow-x-auto h-[40vh]">
                            <div className="inline-flex space-x-1 ">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <Card key={index} image="/imagen.png" price={180000} location="Santo Domingo" bedrooms={4} bathrooms={4} parking={6} meters={1200} operation="comprar" />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
                
        </>
    )
}

export default Description;