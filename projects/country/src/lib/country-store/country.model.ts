export interface Country {
  id: string;
  name: string;
}

export const CountryStoreName = 'Country';

export declare interface DictionaryNum<T>  {
  [id: number]: T;
}
export declare interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T;
}
