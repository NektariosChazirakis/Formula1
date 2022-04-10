import {Season} from './season.interface';

export interface ServerResponseSeason {
  MRData: {
    xmlns: string,
    series: string,
    url: string,
    limit: string,
    offset: string,
    total: string;
    SeasonTable: {
      Seasons: Array<{
        season: string,
        url: string
      }>
    }
  }
}
