import { useQuery, UseQueryOptions } from 'react-query';

import { getCharacters, IGetCharactersProps, ICharactesResponse } from './getCharacters';

export function useCharacters(params: IGetCharactersProps, options: UseQueryOptions<ICharactesResponse, unknown, ICharactesResponse, string[]>) {
  return useQuery(['characters', params.nameStartsWith], () => getCharacters(params), {
    staleTime: 600, //10 min
    ...options,
  });
}
