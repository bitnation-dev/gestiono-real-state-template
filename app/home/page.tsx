'use client'

import { Column, Container, Grid } from "@bitnation-dev/components";
import { SearchIcon, ArrowRightMiniIcon } from "@/components/icons";
import Card from "@/components/cards";




const Home = () => {
    return (
        <Container>
            <Grid columns={{ xl: 4, md: 2, sm: 1, }}>
                <Column columns={{ xl: { width: 4 }, md: { width: 1 }, }}>
                    <div className="h-[65vh] bg-cover bg-no-repeat bottom-10 relative text-center justify-center flex flex-col space-y-4" style={{ backgroundImage: "url('/imageCover.png')" }}>
                    <h1 className="text-white text-center text-6xl font-bold uppercase">Las mejores Inversiones <br/> Inmobiliarias </h1>
                    <p className="text-[#9C9C78] text-center text-2xl  ">Busca tu próximo proyecto para invertir con nosotros</p>
                    <div className="flex justify-center">
                    <input type="text" placeholder="Pais, Ciudad, Proyecto, ID, Zonas" className="w-[40%] h-16 px-4 py-2 border-2 border-[#9C9C78] bg-white text-[#9C9C78]" />
                    <div className="w-12 h-12 justify-center flex items-center border-2 border-[#9C9C78] relative right-14 top-2 bg-[#9C9C78] cursor-pointer">
                        <SearchIcon />
                    </div>
                    </div>
                    </div>
                </Column>
                <Column columns={{ xl: { width: 4 }, md: { width: 1 }, }}>
                    <div>
                        <h1 className=" text-4xl font-bold text-[#3B4504] " >Proyectos Recomendados</h1>
                    <div className="overflow-x-auto">
                        <div className="inline-flex space-x-1">
                        {Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} image="/imagen.png" price={180000} location="Santo Domingo" bedrooms={4} bathrooms={4} parking={6} meters={1200} />
                ))}
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-end py-4">
                        <div className="bg-[#3B4504] text-white px-4 py-2 flex items-center">
                            <p className="mr-2">Mas Proyectos Similares</p>
                            <ArrowRightMiniIcon/>
                        </div>
                    </div>
                </Column>
                <Column columns={{ xl: { width: 4 }, md: { width: 1 }, }}>
                    <div className="bg-red-500">fila 1</div>
                </Column>
                <Column columns={{ xl: { width: 4 }, md: { width: 1 }, }}>
                    <div className="bg-red-500">fila 1</div>
                </Column>
            </Grid>
        </Container>
    )
}

export default Home;