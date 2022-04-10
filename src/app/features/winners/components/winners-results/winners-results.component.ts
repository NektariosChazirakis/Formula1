import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Season} from '../../../../shared/interfaces/season.interface';
import {Race} from '../../../races/interfaces/race.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StandingList} from '../../interfaces/standing-list.interface';

@Component({
  selector: 'app-winners-results',
  templateUrl: './winners-results.component.html',
  styleUrls: ['./winners-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnersResultsComponent {

  @Input() seasons: Season[] = [];
  @Input() seasonSelected: boolean = true;
  @Input() standingLists: StandingList[] = [];

  @Output() selectedSeason = new EventEmitter<string>();

  seasonForm: FormGroup = this.fb.group({
    season: [null]
  })

  constructor(private fb: FormBuilder) {}

  onSeasonChange(season: string) {
    this.selectedSeason.emit(season);
  }

}
