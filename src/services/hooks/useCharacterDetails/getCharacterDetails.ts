import { api } from '@/services/api';
import { ICharacters } from '@/types/models/Characters/Characters.model';
import { getHashBySecrets } from '@/utils/getHashBySecrets';

export interface IGetCharacterDetailsProps {
  characterId: string;
}

export interface ICharactesResponse extends ICharacters {}

export const getCharacterDetails = async ({ characterId }: IGetCharacterDetailsProps): Promise<ICharactesResponse> => {
  const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY || '';
  const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY || '';

  const { hash, timestamp } = getHashBySecrets({ privateKey, publicKey });

  const reponse = await api.get(`characters/${characterId}`, { params: { ts: timestamp, apikey: publicKey, hash } });

  return reponse.data;
};
