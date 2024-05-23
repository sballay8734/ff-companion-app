// records for the league like "Highest Average Points For", "Most Ployoff Apperances", "Longest Winning Streak", etc...
interface LeagueRecord {
  leagueId: string;
  id: string;

  // mTODO: maybe Add variations of records that show last 3 years, last 5 years, etc...

  record_name: string;
  record_description: string;
  record_category: string; // total, avg, streak, pct,
  unit?: string; // gms, pts, championships (for UI mostly)
  top_Records: TopRecord[];
}

interface TopRecord {
  rank: number;
  value: number;
  achievedBy: string; // userId or teamId
  achievedAt: Date;

  // FOR COMBINED RECORDS (Like combined score)
  ownerOne?: string; // userId
  ownerTwo?: string; // userId
  ownerOneValue?: number;
  ownerTwoValue?: number;
}
