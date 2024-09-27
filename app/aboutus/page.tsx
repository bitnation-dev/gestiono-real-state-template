import { Button1, ButtonMail, ButtonWhatsapp } from "@/components/button"
import CardComment from "@/components/commentCard"
import { MainIcon } from "@/components/icons"
import InfoInput from "@/components/input"
import Profile from "@/components/profile"
import { Column, Container, Grid } from "@bitnation-dev/components"
import Image from "next/image"
import React from "react"

const AboutUs = () => {
    return (
        <Container>
            <div>
                <h1 className="text-4xl text-black font-bold">
                    Nosotros
                </h1>
            </div>
            <Grid columns={{ xl: 5, md: 5, sm: 1, }}>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="h-80 flex justify-between" style={{ backgroundImage: "url('/imageCover.png')" }}>
                        <div className="flex flex-col justify-center pl-10">
                            <h1 className="text-[#9C9C78] text-3xl font-bold uppercase pb-6">¿Quienes Somos?</h1>
                            <p>
                                Emira Group es una empresa inmobiliaria dedicada a <br /> ofrecer soluciones excepcionales en la compra, venta y <br /> alquiler de propiedades.
                            </p>
                            <Button1 text="Hablemos" icon />
                        </div>
                        <div className="flex items-end pb-16 pr-8">
                            <MainIcon />
                        </div>

                    </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="flex justify-center py-4">
                        <h1 className="text-black text-2xl uppercase font-bold"> Nuestros Clientes Dicen:</h1>
                    </div>
                        <div className="inline-flex space-x-4 flex items-center justify-center">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CardComment key={index} />
                            ))}
                        </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl text-black font-bold pb-4">
                            Nuestro Equipo
                        </h1>
                        <div className="inline-flex space-x-3">
                        {Array.from({length: 3}).map((_, index) => (
                            <Profile  key={index}/>
                        ) )}
                        </div>
                    </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="pb-12">
                        <h1 className="text-2xl text-black font-bold flex justify-center uppercase pb-4">
                            Nuestra Oficina
                        </h1>
                        <div className="flex ">
                            <div className="bg-red-500  w-1/2">
                            <Image src={"/imagenH.png"} alt="" width={700} height={500}/>
                            </div>
                            <div className="w-1/2"></div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-4">
                        <Button1 text="Como llegar?" icon/>
                    </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                <div className="bg-[#F5F5F5] h-[60vh] xl:h-[47vh]">
                        <Grid columns={{ xl: 2, md: 2, sm: 1, }}>
                            <div className="flex justify-center items-center relative bottom-12 " >
                                <Image src="/imagenP.png" alt="image" width={425} height={425}  quality={100}/>
                            </div>
                            <div className="flex justify-center items-center" >
                                    <div className="">
                                        <InfoInput />
                                        <div className="flex space-x-2 relative bottom-8">
                                        <ButtonMail text='Contactanos'/>
                                        <ButtonWhatsapp text="Contáctanos"/>
                                        </div>
                                    </div>
                            </div>
                        </Grid>
                    </div>
                </Column>
            </Grid>
        </Container>
    )
}

export default AboutUs
