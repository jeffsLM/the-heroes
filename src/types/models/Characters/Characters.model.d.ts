import { Results } from './Characters.base';

export interface ICharacters {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Results[];
  };
  etag: string;
}
