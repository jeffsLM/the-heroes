import { api } from '@/services/api';
import { ISeries } from '@/types/models/Series/Series.model';
import { getHashBySecrets } from '@/utils/getHashBySecrets';

export interface IGetSeriesProps {
  characters: string;
  nameStartsWith?: string;
  limit?: number;
  orderBy?: 'title' | 'modified' | 'onsaleDate'; // "-" value sort in descending order.
}

export interface ISeriesResponse extends ISeries {}

export const getSeries = async ({ ...props }: IGetSeriesProps): Promise<ISeriesResponse> => {
  const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY || '';
  const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY || '';

  const { hash, timestamp } = getHashBySecrets({ privateKey, publicKey });

  const reponse = await api.get('series', { params: { ts: timestamp, apikey: publicKey, hash, ...props } });

  return reponse.data;
};
