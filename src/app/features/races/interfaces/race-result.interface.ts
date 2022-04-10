import {RaceDriver} from '../../../shared/interfaces/race-driver.interface';
import {RaceConstructor} from '../../../shared/interfaces/race-constructor.interface';
import {RaceTime} from './race-time.interface';
import {RaceFastestLapAverageSpeed} from './race-fastest-lap-average-speed.interface';
import {RaceFastestLapTime} from './race-fastest-lap-time.interface';
import {RaceFastestLap} from './race-fastest-lap.interface';

export interface RaceResult {
  number: string,
  position: string,
  positionText: string,
  points: string,
  Driver: RaceDriver,
  Constructor: RaceConstructor
  grid: string,
  laps: string,
  status: string,
  Time: RaceTime,
  FastestLap: RaceFastestLap
}

