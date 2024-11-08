'use client'
import { Grid, Container } from "@bitnation-dev/components";
import Card from "@/components/cards";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import Filter from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Propiedades from "@/propertiesProp";


const ITEMS_PER_PAGE = 12;

const Home = () => {
  const pathname = usePathname()
  const pageName = <span style={{ color: '#9C9C78' }}>Inmuebles</span>
  const [data, setData] = useState<Propiedades[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchLocation, setSearchLocation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/properties');
        if (!response.ok) {
          throw new Error('Error al cargar las propiedades');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      }
    };
  
    fetchData();
  }, []); 



    const filteredData = data.filter((propiedad) =>
      propiedad.title.toLowerCase().includes(searchLocation.toLowerCase())
    );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, endIndex); 

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= Math.ceil(data.length / ITEMS_PER_PAGE)) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(e.target.value);
    setCurrentPage(1); 
  };

  const handleRouter = (id: number) => {
    router.push(`/description?id=${id}`)
}


  return (
    < >
      <Grid columns={{ xl: 1 }}>
        <Container className=" bg-cover" style={{ backgroundImage: "url('/imagen3.png')" }}>
          <div className="flex flex-col  text-white ">
            <div className="mb-4">
            <p className="font-['poppins']">
              Home &gt; {pathname === "/proyects" ? pageName : pathname}
            </p>
          </div>
          <h1 className="text-4xl font-bold font-['poppins']">Inmuebles</h1>
          </div>
        </Container>

          <Grid columns={{ xl: 1, md: 1, sm: 1, }} >
          <Container>
            <div className="flex space-x-8">
            <div className="text-black">
              <Filter results={filteredData.length}/>
            </div>
            <div className="text-black w-screen ">
              <div className="flex space-x-4">
                <input onChange={handleSearchChange} type="text" placeholder="Buscar por ciudad" className="w-[80%] h-10 px-4 py-2 border-2 border-gray-500 bg-white text-black" />
                <div className=" h-10 text-black text-left pl-2 border-2 border-gray-500 flex items-center hover: cursor-pointer">
                  <p>Ordenar Por Reciente </p>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold pt-4 pl-4">INMUEBLES DE SANTIAGO</h1>
              <div className="grid grid-cols-3 gap-y-8">
              {currentData.map((propiedad) => (
                    <Card
                      key={propiedad.id}
                      image={propiedad.image[0]}
                      price={propiedad.price}
                      location={propiedad.location}
                      bedrooms={propiedad.bedrooms}
                      bathrooms={propiedad.bathrooms}
                      parking={propiedad.parking}
                      meters={propiedad.meters} 
                      operation={propiedad.operation}
                      onClick={() => handleRouter(propiedad.id)}
                    />
                  ))}
              </div>
              </div>    
            </div>
            <div className="flex w-full justify-end py-20">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 border text-black hover:border-2 hover:border-black cursor-pointer"
              >
                <ArrowLeftIcon />
              </button>
              {[...Array(Math.ceil(data.length / ITEMS_PER_PAGE)).keys()].map((page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  className={`px-4 border hover:border-2 hover:border-black text-black ${
                    currentPage === page + 1 ? 'font-bold' : ''
                  }`}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 border text-black hover:border-2 hover:border-black cursor-pointer"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;