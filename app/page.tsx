'use client'
import { Container, Grid } from "@bitnation-dev/components";
import { SearchIcon } from "@/components/icons";
import Card from "@/components/cards";
import Image from "next/image";
import CityCard from "@/components/cityCard";
import { Button1, ButtonMail, ButtonWhatsapp } from "@/components/button";
import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InfoInput from "@/components/input";
import Propiedades from "@/propertiesProp";


export default function Home() {
    const [data, setData] = useState<Propiedades[]>([]);
    const [, setError] = useState<string | null>(null);
    const [infoInput, setInfoInput] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/properties');
            if (!response.ok) {
                throw new Error('Error al cargar las propiedades');
            }
            const result = await response.json();
            console.log(result, "result" )
            setData(result);
            setLoading(false);
          } catch (error) {
            setError((error as Error).message);
          }
        };
      
        fetchData();
      }, []); 

    

    const handleInfoInput = () => {
        setInfoInput(!infoInput);
    }

    const handleRouter = (id: number) => {
        router.push(`/description?id=${id}`)
    }



    return (
        <>
            <Container style={{ backgroundImage: "url('/imageCover.png')" }} className=" bg-cover" >
                <div className="h-[65vh] bg-cover bg-no-repeat bottom-10 relative text-center justify-center flex flex-col space-y-4">
                    <h1 className="text-white text-center text-6xl font-bold uppercase">Las mejores Inversiones <br /> Inmobiliarias </h1>
                    <p className="text-[#9C9C78] text-center text-2xl  ">Busca tu próximo proyecto para invertir con nosotros</p>
                    <div className="flex justify-center">
                        <input type="text" placeholder="Pais, Ciudad, Proyecto, ID, Zonas" className="w-[40%] h-16 px-4 py-2 border-2 border-[#9C9C78] bg-white text-[#9C9C78]" />
                        <div className="w-12 h-12 justify-center flex items-center border-2 border-[#9C9C78] relative right-14 top-2 bg-[#9C9C78] cursor-pointer">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <h1 className=" text-4xl font-bold text-[#3B4504] " >Proyectos Recomendados</h1>
                <Grid columns={{ xl: 4, md: 2, sm: 1, }}>
                    
                {loading ? (
                    <div className="flex flex-col gap-4">
                        {Array.from({ length: 1 }).map((_, index) => (
                            <div key={index} className="animate-pulse flex flex-col space-y-4 p-4 border ">
                                <div className="bg-gray-300 h-72 w-[95%] "></div>
                                <div className="bg-gray-300 h-6 w-3/4"></div>
                                <div className="bg-gray-300 h-6 w-[95%]  "></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    data.map((propiedad) => (
                        <Card
                            key={propiedad?.id}
                            multimedia={propiedad?.image[0]}
                            price={propiedad?.price}
                            location={propiedad?.location}
                            bedrooms={propiedad?.bedrooms}
                            bathrooms={propiedad?.bathrooms}
                            parking={propiedad?.parking}
                            meters={propiedad?.meters}
                            operation={propiedad?.operation}
                            onClick={() => handleRouter(propiedad.id)}
                        />
                    ))
                )}
                </Grid>
                <div className="flex justify-end">
                    <Button1 text="Mas Proyectos Similares" icon onClick={() => router.push('/proyects')} />
                </div>
            </Container>
            <Container className="bg-[#F5F5F5] [&>.container-inside]:!p-0 mt-10">
                <div>
                    <Grid columns={{ xl: 2, md: 2, sm: 1, }}>
                        <div className="flex justify-center items-center -mt-10 " onClick={() => setInfoInput(false)}>
                            <Image src="/imagenP.png" alt="image" width={425} height={425} quality={100} />
                        </div>
                        <div className="flex justify-center items-center" >
                            {infoInput ? (
                                <div className="">
                                    <InfoInput />
                                    <div className="flex space-x-2 relative bottom-8">
                                        <ButtonMail text='Contactanos' />
                                        <ButtonWhatsapp text="Contáctanos" />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col space-y-4">
                                    <h1 className="text-4xl font-extrabold text-[#3B4504] font-[Neco]">Asesoria Gratis</h1>
                                    <p className="text-2xl text-[#3B4504] text-justify font-thin">Elimina dudas o busca donde invertir <br /> con la asistencia de un experto en <br />
                                        inversiones inmobiliarias</p>
                                    <div className="flex justify-center items-center space-x-4">
                                        <ButtonMail text="Contáctanos" onClick={handleInfoInput} />
                                        <ButtonWhatsapp text="Contáctanos" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Grid>
                </div>
            </Container>
            <Container>
                <div className=" flex flex-col justify-center items-center space-y-4 py-24">
                    <h1 className="text-4xl font-bold text-[#3B4504] font-[Neco]">Búsqueda por Ciudad</h1>
                    <p className="text-2xl text-[#757575] text-justify font-[poppins] ">
                        Busca proyectos en las ciudades con mayor crecimiento del país
                    </p>
                    <CityCard />
                    <Button1 text="Busca por Ciudad" icon />
                </div>
            </Container>
        </>
    )
}

