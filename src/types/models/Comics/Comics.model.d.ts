import { Results } from '../base';

export interface ResultsComics extends Results {
  title: string;
}

export interface IComics {
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
    results: ResultsComics[];
  };
  etag: string;
}
