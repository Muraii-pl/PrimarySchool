import { ILogo } from '../interfaces/ILogo';
import { Logo } from '../models/Logo'
import client from '../utils/Apollo';

export async function getLogo(): Promise<ILogo> {
  const res = await client.query(Logo)

  return res.data.siteLogo
}
