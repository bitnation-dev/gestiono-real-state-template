import { gestiono } from '@/gestiono';
import { NextRequest, NextResponse } from 'next/server';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const properties = await gestiono.getResources()
    console.log(properties)
    return NextResponse.json(properties); 
  } catch (error) {
    console.error('Error al obtener las casas:', error.data);
    return NextResponse.json({ error: 'Error al obtener las casas' }, { status: 500 });
  }
}
