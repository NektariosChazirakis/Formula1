import {Settings} from '../interfaces/settings.interface';

export const CLIENT_SETTINGS: Settings = {
  api : {
    base_url: 'https://ergast.com/api/f1/',
    endpoints: {
      seasons: 'seasons',
      races : 'results',
      winners: 'driverStandings',
      drivers: 'drivers',
      contact: 'contact'
    },
    responseFormat: 'json'
  }
}
