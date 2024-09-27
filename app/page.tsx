
import { Grid, Container } from "@bitnation-dev/components";
import Card from "@/components/cards";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import Filter from "@/components/sidebar";


export default function Home() {
  return (
    <Container>
      <Grid columns={{ xl: 1 }}>
        <div className="flex items-center h-48 text-white text-center bg-cover" style={{ backgroundImage: "url('/imagen3.png')" }}>
          <h1 className="text-4xl font-bold pt-10 pl-4">Búsqueda Por Ciudad</h1>
        </div>
        <Grid columns={{ xl: 1, md: 1, sm: 1, }} >
          <div className="flex space-x-4 px-4">
            <div className="text-black  h-screen">
              <Filter />
            </div>
            <div className="text-black px-8">
              <div className="flex space-x-4">
                <input type="text" placeholder="Buscar por ciudad" className="w-[80%] h-10 px-4 py-2 border-2 border-gray-500 bg-white text-black" />
                <div className="w-[20%] h-10 text-black text-left pl-2 border-2 border-gray-500 flex items-center hover: cursor-pointer">
                  <p>Ordenar Por Reciente </p>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold pt-4 pl-4">INMUEBLES DE SANTIAGO</h1>
              <div className="grid grid-cols-3">
                {Array.from({ length: 12 }).map((_, index) => (
                  <Card key={index} image="/imagen3.png" price={180000} location="Santo Domingo" bedrooms={4} bathrooms={4} parking={6} meters={1200} />
                ))}
              </div>

            </div>
          </div>
          <div className="flex w-full justify-end py-20 ">
            <div className="px-4 py-2 border text-black hover:border-2 hover:border-black cursor-pointer">
              <ArrowLeftIcon />
            </div>
            {[1, 2, 3, 4].map((page) => (
              <button key={page} className="px-4 border hover:border-2 hover:border-black text-black ">{page}</button>
            ))}
            <button className="px-4 py-2 border text-black hover:border-2 hover:border-black cursor-pointer">
              <ArrowRightIcon />
            </button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}