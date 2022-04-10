export interface Settings {
  api: {
    base_url: string,
    endpoints: {
      seasons: string,
      races: string,
      winners: string,
      drivers: string,
      contact: string
    },
    responseFormat: 'json' | 'xls'
  }
}

