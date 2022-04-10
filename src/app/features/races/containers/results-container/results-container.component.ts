import { Component, OnInit } from '@angular/core';
import {ResultsService} from '../../../../shared/services/results.service';
import {Season} from '../../../../shared/interfaces/season.interface';
import {Observable, of} from 'rxjs';
import {Race} from '../../interfaces/race.interface';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {

  seasons$!: Observable<Season[]>;
  races$!: Observable<Race[]>;
  seasonSelected$!: Observable<boolean>;

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.seasons$ =  this.resultsService.getAllSeasons();
  }

  onSelectedSeasonChange(season: string) {
    this.races$ = this.resultsService.getRacesForSeason(season);
    this.seasonSelected$ = of(season !== '');
  }

}
