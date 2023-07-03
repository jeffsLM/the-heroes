import { Results } from '../base';

export interface ResultsSeries extends Results {
  title: string;
  startYear: string;
  endYear: string;
}

export interface ISeries {
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
    results: ResultsSeries[];
  };
  etag: string;
}
