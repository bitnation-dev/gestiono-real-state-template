import Menu from "@/menu";
import Footer from "@/footer";
import { Grid, Column } from "@bitnation-dev/components";
import Card from "@/components/cards";
export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Menu/>
      <Grid columns={{xl: 1}}>
        <div className="flex items-center h-48 text-white text-center bg-cover bg-center" style={{backgroundImage: "url('/imagen3.png')"}}>
          <h1 className="text-4xl font-bold pt-10 pl-4">Búsqueda Por Ciudad</h1>
        </div>
        <Grid columns={{ xl: 1, md: 1, sm: 1, }}>
            <div className="flex space-x-4 px-4">
                <div className="text-black w-[15%] h-screen">div 1</div>
                <div className="text-black w-full px-8">
                  <div className="flex space-x-4">
                  <input type="text" placeholder="Buscar por ciudad" className="w-[85%] h-10 px-4 py-2 border-2 border-gray-500 bg-white text-black" />
                  <button className="w-[15%] h-10 text-black text-left pl-2 border-2 border-gray-500">Ordenar Por Reciente</button>
                  </div>
                  <h1 className="text-2xl font-bold pt-4 pl-4">INMUEBLES DE SANTIAGO</h1>
                  <div className="grid grid-cols-3 gap-4">
                    <Card />
                  </div>
                </div>
            </div>
        </Grid>
      </Grid>
      <Footer/>
    </div>
      
  );
}