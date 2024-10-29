import fs from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'house.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    if (!data.properties) {
      return NextResponse.json({ error: 'No se encontraron propiedades' }, { status: 404 });
    }
    return NextResponse.json(data.properties); 
  } catch (error) {
    console.error('Error al obtener las casas:', error);
    return NextResponse.json({ error: 'Error al obtener las casas' }, { status: 500 });
  }
}
