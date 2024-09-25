import { Button1 } from "@/components/button"
import CardComment from "@/components/commentCard"
import { MainIcon } from "@/components/icons"
import Profile from "@/components/profile"
import { Column, Container, Grid } from "@bitnation-dev/components"
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
                        <div className="inline-flex space-x-4 flex items-center justify-center">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CardComment key={index} />
                            ))}
                        </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl text-black font-bold">
                            Nuestro Equipo
                        </h1>
                        <Profile />
                    </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="">
                        <h1 className="text-4xl text-black font-bold">
                            Nosotros
                        </h1>
                    </div>
                </Column>
                <Column columns={{ xl: { width: 5 }, md: { width: 1 }, }}>
                    <div className="bg-red-500">
                        <h1 className="text-4xl text-black font-bold">
                            Nosotros
                        </h1>
                    </div>
                </Column>
            </Grid>
        </Container>
    )
}

export default AboutUs
