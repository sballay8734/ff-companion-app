interface Matchup {
  homeOwner: string;
  awayOwner: string;

  nflSeasonStartYear: number;
  nflWeek: number;

  homeScore: number;
  awayScore: number;

  isPlayoffMatchup: boolean;
}
