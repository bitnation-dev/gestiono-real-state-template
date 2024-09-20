import { Button1, ButtonMail, ButtonWhatsapp } from "@/components/button";
import Card from "@/components/cards";
import { ArrowButtonLeft, ArrowButtonRight } from "@/components/icons";
import InfoInput from "@/components/input";
import { Column, Container, Grid } from "@bitnation-dev/components";
import Image from "next/image";

const Description = () => {
    return (
        <Container>
            <Grid columns={{ xl: 4, md: 2, sm: 1, }}>
                <Column columns={{ xl: { width: 3 }, md: { width: 1 }, sm: { width: 1 }, }} className="space-y-4 ">
                    <div className="h-[50vh] flex justify-center items-center relative">
                        <div className="flex px-4 w-full justify-between">
                            <button className="z-10">
                                <ArrowButtonLeft />
                            </button>
                            <button className="z-10">
                                <ArrowButtonRight />
                            </button>
                        </div>
                        <Image src="/image/imagenhouse.png" alt="Descripción de la imagen" fill />
                    </div>
                    <div className="h-[15vh] overflow-x-auto">
                        <div className="inline-flex space-x-1 h-full">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Image key={index} src={`/image/image${index + 1}.jpg`} alt={`Imagen ${index}`} width={200} height={200} />
                            ))}
                        </div>
                    </div>
                    <div className="pb-6">
                        <h1 className="text-black font-bold text-4xl"> Descripción</h1>
                        <p className="text-black">🌟 Descubre una Obra maestra en Punta Cana <br /> .Poseidonia by Aston en Cana Bay 🌟<br />Bay la gestión hotelera By Aston de Archipiélago. <br />Apartamentos de 1, 2 y 3 habitaciones con mobiliario y diseño de interiores incluido, bajo la gestión hotelera de Aston .<br /> ¡Todo lo que necesitas en un solo lugar! 🏖️🏡   ✨ <br />
                            Beneficios exclusivos:
                            <li>
                                Acceso al Beach Club
                            </li>
                            <li>
                                Cancha de tenis y pádel
                            </li>
                            <li>
                                Discoteca Oro del Hotel La Punta Cana
                            </li>
                            <li>
                                Casino del Hotel La Punta Cana
                            </li>
                            <li>
                                Acceso a dos restaurantes del Hotel Hard Rock Punta Cana
                            </li>
                            <li>
                                Entretenimiento en el Hotel Hard Rock Punta Cana
                            </li>
                            <li>
                                Campo de golf diseñado por Jack Nicklaus en Cana bay
                            </li>
                            <li>
                                Templo Poseidonia de la Casa Club con restaurante, mini-market, gimnasio, spa, y zonas de entretenimiento
                            </li>
                            <br />
                            💵 Exención de impuestos por 15 años<br />💵
                            Desde $169,000  <br />
                            ¡No pierdas esta oportunidad de inversión en el paraíso!</p>
                    </div>
                    <div>
                        <h1 className="text-black font-bold text-4xl">Ubicacion</h1>
                        <div className="mapContainer">
                            <iframe
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCVBU0OFUq6wQ_7VhBUNLmlYF1g6aSWds0">
                            </iframe>
                        </div>
                    </div>
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
                    </div>
                    <div className="flex flex-col">
                    <p className="text-black">Mensualidad</p>
                    <p className="text-black font-bold text-2xl">$1,080.00</p>
                    <Button1 text="Obtener mas Informacion" icon/>
                    </div>
                    <div>
                        <h1 className="text-black text-3xl font-bold">Proyectos similares</h1>
                        <div className="overflow-x-auto h-[40vh]">
                            <div className="inline-flex space-x-1 ">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <Card key={index} image="/imagen.png" price={180000} location="Santo Domingo" bedrooms={4} bathrooms={4} parking={6} meters={1200} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Column>
                <Column columns={{ xl: { width: 1 }, md: { width: 1 }, sm: { width: 1 }, }}>
                    <div className=" h-[65vh] flex flex-col space-y-2 pl-4">
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
                </Column>
            </Grid>
        </Container>
    )
}

export default Description;