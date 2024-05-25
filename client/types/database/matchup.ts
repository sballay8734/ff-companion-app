interface Matchup {
  homeOwnerId: string;
  awayOwnerId: string;

  // "start" because season always runs into the next year
  nflSeasonStartYear: number;
  nflWeek: number;

  homeScore: number;
  awayScore: number;

  isPlayoffMatchup: boolean;
}
