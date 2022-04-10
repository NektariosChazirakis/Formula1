import {RaceDriver} from '../../../shared/interfaces/race-driver.interface';
import {RaceConstructor} from '../../../shared/interfaces/race-constructor.interface';


export interface DriverStanding {
  position: string,
  positionText: string,
  points: string,
  Driver: RaceDriver,
  Constructors: RaceConstructor[],
}

