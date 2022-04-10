import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StandingList} from '../../interfaces/standing-list.interface';

@Component({
  selector: 'app-winner-info',
  templateUrl: './winner-info.component.html',
  styleUrls: ['./winner-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnerInfoComponent {

  @Input() standingList!: StandingList;

  constructor() { }

}
