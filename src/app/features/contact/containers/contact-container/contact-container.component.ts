import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Season} from '../../../../shared/interfaces/season.interface';
import {RaceDriver} from '../../../../shared/interfaces/race-driver.interface';
import {ResultsService} from '../../../../shared/services/results.service';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {

  drivers$!: Observable<RaceDriver[]>;

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.drivers$ = this.resultsService.getAllDrivers();
    this.resultsService.getAllDrivers()
      .subscribe(res => console.log(res));
  }

}
