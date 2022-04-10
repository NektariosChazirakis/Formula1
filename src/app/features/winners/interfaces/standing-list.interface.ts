import {Circuit} from '../../races/interfaces/circuit.interface';
import {DriverStanding} from './driver-standing.interface';

export interface StandingList {
  season: string,
  round: string,
  DriverStandings: DriverStanding[]
}

