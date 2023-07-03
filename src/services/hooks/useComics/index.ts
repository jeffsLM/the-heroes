import { useQuery, UseQueryOptions } from 'react-query';

import { getComics, IGetComicsProps, IComicsResponse } from './getComics';

export function useComics(params: IGetComicsProps, options: UseQueryOptions<IComicsResponse, unknown, IComicsResponse, string[]>) {
  return useQuery(['comics', params.characters], () => getComics(params), {
    staleTime: 600, //10 min
    ...options,
  });
}
