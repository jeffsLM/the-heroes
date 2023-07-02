import { api } from '@/services/api';
import { ICharacters } from '@/types/models/Characters/Characters.model';
import { getHashBySecrets } from '@/utils/getHashBySecrets';

export interface IGetCharactersProps {
  name?: string;
  nameStartsWith: string;
  modifiedSince?: Date;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
  orderBy?: 'name' | 'modified' | '-modified' | '-name'; // "-" value sort in descending order.
  limit?: number;
  offset?: number;
}

export interface ICharactesResponse extends ICharacters {}

export const getCharacters = async ({ ...props }: IGetCharactersProps): Promise<ICharactesResponse> => {
  const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY || '';
  const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY || '';

  const { hash, timestamp } = getHashBySecrets({ privateKey, publicKey });

  const reponse = await api.get('characters', { params: { ts: timestamp, apikey: publicKey, hash, ...props } });

  return reponse.data;
};
