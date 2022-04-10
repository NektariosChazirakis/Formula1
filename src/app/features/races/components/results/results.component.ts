import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Season} from '../../../../shared/interfaces/season.interface';
import {Race} from '../../interfaces/race.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent  {


  @Input() seasons: Season[] = [];
  @Input() seasonSelected: boolean = true;
  @Input() races: Race[] = [];

  @Output() selectedSeason = new EventEmitter<string>();

  seasonForm: FormGroup = this.fb.group({
    season: [null]
  })

  constructor(private fb: FormBuilder) {}

  onSeasonChange(season: string) {
    this.selectedSeason.emit(season);
  }

}
