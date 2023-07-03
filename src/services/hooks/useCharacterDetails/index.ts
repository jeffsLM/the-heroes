import { useQuery, UseQueryOptions } from 'react-query';

import { getCharacterDetails, IGetCharacterDetailsProps, ICharactesResponse } from './getCharacterDetails';

export function useCharactersDetails(params: IGetCharacterDetailsProps, options: UseQueryOptions<ICharactesResponse, unknown, ICharactesResponse, string[]>) {
  return useQuery(['characterDetails', params.characterId], () => getCharacterDetails(params), {
    staleTime: 600, //10 min
    ...options,
  });
}
