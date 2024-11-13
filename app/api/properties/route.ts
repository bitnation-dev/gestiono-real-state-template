import { gestiono } from '@/gestiono';
import { NextRequest, NextResponse } from 'next/server';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const properties = await gestiono.getResources() 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = properties.map((property: any) => ({
      id: property?.id,
      title: property?.name,
      price: property?.sellPrice,
      location: property?.location,
      description: property?.description,
      image: property?.multimedia.map((media: {url: string}) => media.url),
    }));
    return NextResponse.json(data); 
  } catch (error) {
    console.error('Error al obtener las casas:', error);
    return NextResponse.json({ error: 'Error al obtener las casas' }, { status: 500 });
  }
}
