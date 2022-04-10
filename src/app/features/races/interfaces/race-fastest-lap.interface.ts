import {RaceFastestLapTime} from './race-fastest-lap-time.interface';
import {RaceFastestLapAverageSpeed} from './race-fastest-lap-average-speed.interface';

export interface RaceFastestLap {
  rank: string,
  lap: string,
  Time: RaceFastestLapTime,
  AverageSpeed: RaceFastestLapAverageSpeed
}


