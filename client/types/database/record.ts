// records for the league like "Highest Average Points For", "Most Ployoff Apperances", "Longest Winning Streak", etc...
interface LeagueRecord {
  id: string;
  name: string;
  description: string;
  category: string; // total, avg, streak, pct,
  unit?: string;
  topRecords: TopRecord[];
}

interface TopRecord {
  rank: number;
  value: number;
  achievedBy: string; // userId or teamId
  achievedAt: Date;
}
