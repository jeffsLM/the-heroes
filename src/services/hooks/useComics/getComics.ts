import { api } from '@/services/api';
import { IComics } from '@/types/models/Comics/Comics.model.d';
import { getHashBySecrets } from '@/utils/getHashBySecrets';

export interface IGetComicsProps {
  characters: string;
  nameStartsWith?: string;
  limit?: number;
  orderBy?: 'title' | 'modified' | 'onsaleDate'; // "-" value sort in descending order.
}

export interface IComicsResponse extends IComics {}

export const getComics = async ({ ...props }: IGetComicsProps): Promise<IComicsResponse> => {
  const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY || '';
  const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY || '';

  const { hash, timestamp } = getHashBySecrets({ privateKey, publicKey });

  const reponse = await api.get('comics', { params: { ts: timestamp, apikey: publicKey, hash, ...props } });

  return reponse.data;
};
