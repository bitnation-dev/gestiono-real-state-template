import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'house.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    res.status(200).json(data.casas);
  } catch (error) {
    console.error('Error al obtener las casas:', error);
    res.status(500).json({ error: 'Error al obtener las casas' });
  }
}
