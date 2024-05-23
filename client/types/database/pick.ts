// WAGERS ******************************************************
// TODO: Do you allow props to update?

interface MoneyLine {
  id: string;
  leagueId: string;
  createdAt: Date;
  updated_at?: Date; // NOT SURE IF
  expiration: Date; // cannot submit selections after 5 min before this date

  sport: string;
  underdog: string;
  favorite: string;

  underdog_odds: number; // (110 or -110 etc...)
  favorite_odds: number;

  underdog_impl_prob: number; // percentage (as decimal)
  favorite_impl_prob: number; // percentage (as decimal)

  underdog_final: number; // points, runs, score, etc...
  favorite_final: number;

  winner: string; // team name

  voided: boolean;

  void_reason: string; // only do if you can grab this from api manually
}

interface Spread {
  id: string;
  league_id: string;
  created_at: Date;
  updated_at: Date; // Remove the optional mark if provided by the API
  expiration: Date;

  sport: string;
  home_team: string;
  away_team: string;

  home_team_spread: number; // The point spread for the home team
  away_team_spread: number; // The point spread for the away team

  home_team_odds: number; // The odds for the home team to cover the spread
  away_team_odds: number; // The odds for the away team to cover the spread

  home_team_implied_prob: number; // decimal percentage (0.5 for 50%)
  away_team_implied_prob: number; // decimal percentage (0.5 for 50%)

  home_team_final_score: number;
  away_team_final_score: number;

  winner: string; // The team that covered the spread

  voided: boolean;
  void_reason?: string; // Make it optional if not always provided by the API
}

// VERY VARIABLE (Could be on single player points, combined team points, single team points, etc...)
interface OverUnder {
  id: string;
  league_id: string;
  created_at: Date;
  updated_at: Date;
  expiration: Date;

  sport: string;
  prop_type: 'one_team' | 'two_teams'; // Indicates if the prop is for a team or the entire game

  team_id?: string; // Applicable for one_team props
  team_name?: string; // Applicable for one_team props

  home_team_id?: string; // Applicable for two_teams props
  home_team_name?: string; // Applicable for two_teams props
  away_team_id?: string; // Applicable for two_teams props
  away_team_name?: string; // Applicable for two_teams props

  stat_type: string; // The specific stat being measured (e.g., points, goals)
  line: number; // The line set for the over/under prop

  over_odds: number;
  under_odds: number;

  over_implied_prob: string; // or number, depending on the representation
  under_implied_prob: string; // or number, depending on the representation

  team_final_stat?: number; // Applicable for team props

  home_team_final_stat?: number; // Applicable for game props
  away_team_final_stat?: number; // Applicable for game props

  winner: 'over' | 'under' | 'push';

  voided: boolean;
  void_reason?: string;
}

interface PlayerProp {
  id: string;
  league_id: string;
  created_at: Date;
  updated_at: Date;
  expiration: Date;

  sport: string;
  player_id: string;
  player_name: string;
  team_id: string;
  team_name: string;

  stat_type: string; // The specific stat being measured (e.g., points, assists, rebounds, passYds, rushYds, etc...)
  line: number; // The line set for the player prop

  over_odds: number;
  under_odds: number;

  over_implied_prob: string; // or number, depending on the representation
  under_implied_prob: string; // or number, depending on the representation

  player_final_stat: number;

  winner: 'over' | 'under' | 'push';

  voided: boolean;
  void_reason?: string;
}

// mTODO: Add this feature later
interface Parlay {
  // list of above
}

// mTODO: Add this feature later
interface Teaser {
  // same as spread, totals or PlayerProps but you can change lines
}

// NOTE: THIS COMBINES ALL ABOVE PROPS
export interface BettingProp {
  id: string;
  league_id: string;
  created_at: Date;
  updated_at?: Date;
  expiration: Date;

  sport: string;
  prop_type: 'moneyline' | 'spread' | 'over_under' | 'player_prop';

  home_team_id?: string;
  home_team_name?: string;
  away_team_id?: string;
  away_team_name?: string;

  team_id?: string;
  team_name?: string;

  player_id?: string;
  player_name?: string;

  favorite?: string;
  underdog?: string;

  home_team_spread?: number;
  away_team_spread?: number;

  over_under_line?: number;

  favorite_odds?: number;
  underdog_odds?: number;
  home_team_odds?: number;
  away_team_odds?: number;
  over_odds?: number;
  under_odds?: number;

  favorite_implied_prob?: number;
  underdog_implied_prob?: number;
  home_team_implied_prob?: number;
  away_team_implied_prob?: number;
  over_implied_prob?: number;
  under_implied_prob?: number;

  stat_type?: string;

  home_team_final_score?: number;
  away_team_final_score?: number;
  team_final_stat?: number;
  player_final_stat?: number;

  winner?: string | 'over' | 'under' | 'push';

  voided: boolean;
  void_reason?: string;
}
