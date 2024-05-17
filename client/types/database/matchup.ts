interface Matchup {
  homeOwnerId: string;
  awayOwnerId: string;

  nflSeasonStartYear: number;
  nflWeek: number;

  homeScore: number;
  awayScore: number;

  isPlayoffMatchup: boolean;
}
