export type Items = {
  resourceURI: string;
  name: string;
};

export type Url = {
  type: string;
  url: string;
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type StoriesDetails = {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoriesItems[];
};

export type StoriesItems = {
  resourceURI: string;
  name: string;
  type: string;
};

export type Details = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Items[];
};

export type Results = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  comics: Details;
  stories: StoriesDetails;
  events: Details;
  series: Details;
};
