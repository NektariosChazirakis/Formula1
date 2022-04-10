import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Season} from '../../../../shared/interfaces/season.interface';
import {ResultsService} from '../../../../shared/services/results.service';
import {StandingList} from '../../interfaces/standing-list.interface';

@Component({
  selector: 'app-winners-container',
  templateUrl: './winners-container.component.html',
  styleUrls: ['./winners-container.component.scss']
})
export class WinnersContainerComponent implements OnInit {

  seasons$!: Observable<Season[]>;
  standingLists$!: Observable<StandingList[]>;
  seasonSelected$!: Observable<boolean>;

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.seasons$ =  this.resultsService.getAllSeasons();
  }

  onSelectedSeasonChange(season: string) {
    this.standingLists$ = this.resultsService.getWinnersForSeason(season);
    this.seasonSelected$ = of(season !== '');
  }

}
