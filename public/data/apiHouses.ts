interface Casa {
  id: number;
  image: string;
  price: number;
  meters: number;
  bathrooms: number;
  bedrooms: number;
  parking: number;
  location: string;
}

export async function getCasas(): Promise<Casa[]> {
  try {
    const response = await fetch('/api/casas');
    if (!response.ok) {
      throw new Error('No se pudo obtener los datos de las casas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener las casas:', error);
    return [];
  }
}



