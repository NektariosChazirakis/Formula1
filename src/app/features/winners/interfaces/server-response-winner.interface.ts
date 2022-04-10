import {StandingList} from './standing-list.interface';

export interface ServerResponseWinner {
  MRData: {
    xmlns: string,
    series: string,
    url: string,
    limit: string,
    offset: string,
    total: string,
    StandingsTable: {
      season: string,
      StandingsLists: StandingList[]
    }
  }
}
