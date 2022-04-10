import {Circuit} from './circuit.interface';
import {RaceResult} from './race-result.interface';

export interface Race {
  raceName: string,
  round: string,
  Circuit: Circuit,
  date: string,
  time: string,
  Results: Array<RaceResult>
}

