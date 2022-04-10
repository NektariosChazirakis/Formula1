import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import {CLIENT_SETTINGS} from '../../settings/constants/client-settings';
import {Season} from '../interfaces/season.interface';
import {ServerResponseSeason} from '../interfaces/server-response-season.interface';
import {ServerResponseRace} from '../../features/races/interfaces/server-response-race.interface';
import {Race} from '../../features/races/interfaces/race.interface';
import {StandingList} from '../../features/winners/interfaces/standing-list.interface';
import {ServerResponseWinner} from '../../features/winners/interfaces/server-response-winner.interface';
import {RaceDriver} from '../interfaces/race-driver.interface';
import {ServerResponseRaceDriver} from '../interfaces/server-response-race-driver.interface';

@Injectable({
  providedIn: 'root'
})

export class ResultsService {
  constructor(public httpClient: HttpClient) {}

  public getAllSeasons(): Observable<Season[]> {
    const endpoint =
      `${CLIENT_SETTINGS.api.base_url}${CLIENT_SETTINGS.api.endpoints.seasons}.${CLIENT_SETTINGS.api.responseFormat}`;
    let params = new HttpParams();
    params = params.set('limit', 100);
    return this.httpClient.get<ServerResponseSeason>(endpoint, {params})
      .pipe(
        map((resp: ServerResponseSeason) => resp.MRData.SeasonTable.Seasons.map((seasn) => seasn)),
      )
  }

  public getRacesForSeason(season: string): Observable<Race[]> {
    const endpoint =
      `${CLIENT_SETTINGS.api.base_url}${season}/${CLIENT_SETTINGS.api.endpoints.races}.${CLIENT_SETTINGS.api.responseFormat}`;
    let params = new HttpParams();
    params = params.set('limit', 1000);
    return this.httpClient.get<ServerResponseRace>(endpoint, {params})
      .pipe(
        map(resp => resp.MRData.RaceTable.Races)
      )
  }

  public getWinnersForSeason(season: string): Observable<StandingList[]> {
    const endpoint =
      `${CLIENT_SETTINGS.api.base_url}${season}/${CLIENT_SETTINGS.api.endpoints.winners}.${CLIENT_SETTINGS.api.responseFormat}`;
    let params = new HttpParams();
    params = params.set('limit', 1000);
    return this.httpClient.get<ServerResponseWinner>(endpoint, {params})
      .pipe(
        map(resp => resp.MRData.StandingsTable.StandingsLists)
      )
  }


  public getAllDrivers(): Observable<RaceDriver[]> {
    const endpoint =
      `${CLIENT_SETTINGS.api.base_url}${CLIENT_SETTINGS.api.endpoints.drivers}.${CLIENT_SETTINGS.api.responseFormat}`;
    let params = new HttpParams();
    params = params.set('limit', 1000);
    return this.httpClient.get<ServerResponseRaceDriver>(endpoint, {params})
      .pipe(
        map(resp => resp.MRData.DriverTable.Drivers)
      )
  }

  public sendMessage(formdata: FormData): Observable<string> {
    const endpoint =
      `${CLIENT_SETTINGS.api.base_url}${CLIENT_SETTINGS.api.endpoints.contact}`;
      // simulat post:
      /*
        return this.httpClient.post<HttpEvent<any>>(endpoint, formdata,
          {
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({
              'Content-Disposition': 'multipart/form-data',
            }),
          }
        )
      */
    return of ('Message sent successfully');
  }
}
