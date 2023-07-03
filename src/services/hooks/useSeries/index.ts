import { useQuery, UseQueryOptions } from 'react-query';

import { getSeries, IGetSeriesProps, ISeriesResponse } from './getSeries';

export function useSeries(params: IGetSeriesProps, options: UseQueryOptions<ISeriesResponse, unknown, ISeriesResponse, string[]>) {
  return useQuery(['series', params.characters], () => getSeries(params), {
    staleTime: 600, //10 min
    ...options,
  });
}
