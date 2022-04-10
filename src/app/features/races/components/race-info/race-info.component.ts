import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Race} from '../../interfaces/race.interface';

@Component({
  selector: 'app-race-info',
  templateUrl: './race-info.component.html',
  styleUrls: ['./race-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceInfoComponent {

  @Input() race!: Race;

  constructor() { }



}
