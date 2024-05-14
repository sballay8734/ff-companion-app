interface Matchup {
  homeOwner: string;
  awayOwner: string;

  nflYear: string; // string because not performing calculations on it
  week: string; // string because not performing calculations on it

  homeScore: number;
  awayScore: number;

  playoffMatchup: boolean;
  championshipGame: boolean;
}

interface Owner {
  name: string;
}

interface OwnerStats {
  pointDifferential: number;
  averagePointsScored: number;
  winLossRecord: { wins: number; losses: number };
  winningPercentage: number;
  highestPointTotal: number;
  lowestPointTotal: number;
  totalPointsScored: number;
}

export const mockMatchups: Matchup[] = [
  // same year
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2023',
    week: '3',
    homeScore: 137.21,
    awayScore: 142.98,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2023',
    week: '9',
    homeScore: 99.15,
    awayScore: 128.98,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2023',
    week: '13',
    homeScore: 119.15,
    awayScore: 108.47,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2023',
    week: '20',
    homeScore: 77.18,
    awayScore: 148.13,
    playoffMatchup: true,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2021',
    week: '5',
    homeScore: 122.67,
    awayScore: 89.45,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2018',
    week: '11',
    homeScore: 105.78,
    awayScore: 112.34,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2015',
    week: '7',
    homeScore: 98.12,
    awayScore: 132.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2022',
    week: '16',
    homeScore: 158.89,
    awayScore: 110.23,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2019',
    week: '22',
    homeScore: 78.45,
    awayScore: 144.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2014',
    week: '4',
    homeScore: 126.78,
    awayScore: 91.23,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2020',
    week: '10',
    homeScore: 109.67,
    awayScore: 87.89,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2017',
    week: '18',
    homeScore: 134.45,
    awayScore: 117.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2013',
    week: '12',
    homeScore: 93.12,
    awayScore: 105.56,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2016',
    week: '23',
    homeScore: 147.89,
    awayScore: 123.45,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2012',
    week: '15',
    homeScore: 116.34,
    awayScore: 102.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2010',
    week: '21',
    homeScore: 89.78,
    awayScore: 143.21,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2011',
    week: '6',
    homeScore: 127.45,
    awayScore: 96.89,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2024',
    week: '14',
    homeScore: 112.67,
    awayScore: 137.34,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2022',
    week: '2',
    homeScore: 103.45,
    awayScore: 118.78,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2011',
    week: '8',
    homeScore: 132.45,
    awayScore: 98.76,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2013',
    week: '17',
    homeScore: 89.23,
    awayScore: 112.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2015',
    week: '19',
    homeScore: 121.89,
    awayScore: 103.45,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2017',
    week: '24',
    homeScore: 97.12,
    awayScore: 115.34,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2019',
    week: '1',
    homeScore: 135.67,
    awayScore: 127.89,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2020',
    week: '14',
    homeScore: 106.23,
    awayScore: 119.45,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2022',
    week: '8',
    homeScore: 142.78,
    awayScore: 131.56,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2024',
    week: '6',
    homeScore: 96.45,
    awayScore: 87.12,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2011',
    week: '17',
    homeScore: 124.89,
    awayScore: 109.34,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2013',
    week: '21',
    homeScore: 112.45,
    awayScore: 128.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2015',
    week: '3',
    homeScore: 103.78,
    awayScore: 94.23,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2017',
    week: '9',
    homeScore: 131.56,
    awayScore: 117.89,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2019',
    week: '15',
    homeScore: 95.12,
    awayScore: 108.45,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2020',
    week: '24',
    homeScore: 126.78,
    awayScore: 113.56,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2022',
    week: '12',
    homeScore: 118.23,
    awayScore: 107.67,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2024',
    week: '18',
    homeScore: 132.45,
    awayScore: 121.89,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2011',
    week: '23',
    homeScore: 101.67,
    awayScore: 114.34,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2013',
    week: '4',
    homeScore: 128.89,
    awayScore: 116.23,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11111',
    awayOwner: '11112',
    nflYear: '2015',
    week: '14',
    homeScore: 93.45,
    awayScore: 107.78,
    playoffMatchup: false,
    championshipGame: false,
  },
  {
    homeOwner: '11112',
    awayOwner: '11111',
    nflYear: '2017',
    week: '22',
    homeScore: 139.67,
    awayScore: 127.12,
    playoffMatchup: false,
    championshipGame: false,
  },
];

export const mockOwners: Owner[] = [{ name: '11111' }, { name: '11112' }];

export function calculateOwnerStats(
  owner1: string,
  owner2: string,
  year: string | null = null,
  filter: 'playoff' | 'regSzn' | null = null
): { owner1Stats: OwnerStats; owner2Stats: OwnerStats } {
  const owner1Stats: OwnerStats = {
    pointDifferential: 0,
    averagePointsScored: 0,
    winLossRecord: { wins: 0, losses: 0 },
    winningPercentage: 0,
    highestPointTotal: -Infinity,
    lowestPointTotal: Infinity,
    totalPointsScored: 0,
  };

  const owner2Stats: OwnerStats = {
    pointDifferential: 0,
    averagePointsScored: 0,
    winLossRecord: { wins: 0, losses: 0 },
    winningPercentage: 0,
    highestPointTotal: -Infinity,
    lowestPointTotal: Infinity,
    totalPointsScored: 0,
  };

  const filteredMatchups = mockMatchups.filter((matchup) => {
    if (year === null) {
      return (
        filter === null ||
        (filter === 'playoff' && matchup.playoffMatchup) ||
        (filter === 'regSzn' && !matchup.playoffMatchup)
      );
    } else {
      return (
        matchup.nflYear === year &&
        (filter === null ||
          (filter === 'playoff' && matchup.playoffMatchup) ||
          (filter === 'regSzn' && !matchup.playoffMatchup))
      );
    }
  });

  filteredMatchups.forEach((matchup) => {
    const owner1Score = matchup.homeOwner === owner1 ? matchup.homeScore : matchup.awayScore;
    const owner2Score = matchup.homeOwner === owner2 ? matchup.homeScore : matchup.awayScore;

    owner1Stats.totalPointsScored += owner1Score;
    owner2Stats.totalPointsScored += owner2Score;

    owner1Stats.highestPointTotal = Math.max(owner1Stats.highestPointTotal, owner1Score);
    owner2Stats.highestPointTotal = Math.max(owner2Stats.highestPointTotal, owner2Score);

    owner1Stats.lowestPointTotal = Math.min(owner1Stats.lowestPointTotal, owner1Score);
    owner2Stats.lowestPointTotal = Math.min(owner2Stats.lowestPointTotal, owner2Score);

    if (owner1Score > owner2Score) {
      owner1Stats.winLossRecord.wins++;
      owner2Stats.winLossRecord.losses++;
      owner1Stats.pointDifferential += owner1Score - owner2Score;
      owner2Stats.pointDifferential -= owner1Score - owner2Score;
    } else {
      owner1Stats.winLossRecord.losses++;
      owner2Stats.winLossRecord.wins++;
      owner1Stats.pointDifferential -= owner2Score - owner1Score;
      owner2Stats.pointDifferential += owner2Score - owner1Score;
    }
  });

  const totalMatchups = owner1Stats.winLossRecord.wins + owner1Stats.winLossRecord.losses;
  owner1Stats.winningPercentage =
    totalMatchups > 0 ? parseFloat((owner1Stats.winLossRecord.wins / totalMatchups).toFixed(2)) : 0;
  owner2Stats.winningPercentage =
    totalMatchups > 0 ? parseFloat((owner2Stats.winLossRecord.wins / totalMatchups).toFixed(2)) : 0;

  owner1Stats.averagePointsScored =
    filteredMatchups.length > 0
      ? parseFloat((owner1Stats.totalPointsScored / filteredMatchups.length).toFixed(2))
      : 0;
  owner2Stats.averagePointsScored =
    filteredMatchups.length > 0
      ? parseFloat((owner2Stats.totalPointsScored / filteredMatchups.length).toFixed(2))
      : 0;

  owner1Stats.pointDifferential = parseFloat(owner1Stats.pointDifferential.toFixed(2));
  owner2Stats.pointDifferential = parseFloat(owner2Stats.pointDifferential.toFixed(2));

  owner1Stats.totalPointsScored = parseFloat(owner1Stats.totalPointsScored.toFixed(2));
  owner2Stats.totalPointsScored = parseFloat(owner2Stats.totalPointsScored.toFixed(2));

  return { owner1Stats, owner2Stats };
}

export interface TestOwnerData {
  totalPoints: {
    [key: string]: number;
  };
  totalWins: {
    [key: string]: number;
  };
}

export const testOwner1Data: TestOwnerData = {
  totalPoints: {
    '2014': 2358,
    '2015': 2589,
    '2016': 2711,
    '2017': 2456,
    '2018': 2632,
    '2019': 2785,
    '2020': 2911,
    '2021': 2679,
    '2022': 2514,
    '2023': 2811,
  },
  totalWins: {
    '2014': 8,
    '2015': 10,
    '2016': 9,
    '2017': 7,
    '2018': 11,
    '2019': 9,
    '2020': 12,
    '2021': 8,
    '2022': 6,
    '2023': 10,
  },
};

export const testOwner2Data: TestOwnerData = {
  totalPoints: {
    '2014': 2478,
    '2015': 2456,
    '2016': 2625,
    '2017': 2698,
    '2018': 2514,
    '2019': 2671,
    '2020': 2589,
    '2021': 2785,
    '2022': 2911,
    '2023': 2679,
  },
  totalWins: {
    '2014': 7,
    '2015': 6,
    '2016': 8,
    '2017': 9,
    '2018': 5,
    '2019': 7,
    '2020': 6,
    '2021': 10,
    '2022': 12,
    '2023': 8,
  },
};
