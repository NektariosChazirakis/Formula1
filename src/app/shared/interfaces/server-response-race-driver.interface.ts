import {RaceDriver} from './race-driver.interface';

export interface ServerResponseRaceDriver {
  MRData: {
    xmlns: string,
    series: string,
    url: string,
    limit: string,
    offset: string,
    total: string;
    DriverTable: {
      Drivers: RaceDriver[]
    }
  }
}
