// TODO: Will need OAuth and to register application

// WARNING: ESPN API is a wrapper and not official. You will have to work on getting official access, build a web scraper, or provide manual input of matchups

// DOCS ****************************************************************
// CBS: Hard to get access (drop support for now)

// Yahoo: https://developer.yahoo.com/fantasysports/guide/
// Sleeper: https://docs.sleeper.com/
// ESPN: https://github.com/mkreiser/ESPN-Fantasy-Football-API/

// WORTH LOOKING AT:
// https://github.com/uberfastman/fantasy-football-metrics-weekly-report
// Pro Football Reference Api
export type LeagueProvider = 'ESPN' | 'YAHOO' | 'SLEEPER' | 'NFL';

const ESPN_API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const YAHOO_API_URL = 'https://jsonplaceholder.typicode.com/todos/2';
const SLEEPER_API_URL = 'https://jsonplaceholder.typicode.com/todos/3';
const NFL_API_URL = 'https://jsonplaceholder.typicode.com/todos/4';

export function getApiUrl(provider: string): string | null {
  switch (provider) {
    case 'ESPN':
      return ESPN_API_URL;
    case 'YAHOO':
      return YAHOO_API_URL;
    case 'SLEEPER':
      return SLEEPER_API_URL;
    case 'NFL':
      return NFL_API_URL;
    default:
      return null;
  }
}
