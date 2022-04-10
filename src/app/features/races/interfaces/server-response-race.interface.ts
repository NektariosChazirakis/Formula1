import {Race} from './race.interface';

export interface ServerResponseRace {
  MRData: {
    xmlns: string,
    series: string,
    url: string,
    limit: string,
    offset: string,
    total: string,
    RaceTable: {
      season: string,
      Races: Array<Race>
    }
  }
}
