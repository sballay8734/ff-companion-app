// Proposals for rule changes or other...
interface Proposal {
  id: string;
  leagueId: string;

  proposerId: string; // userId
  proposerName: string;
  proposal_title: string;
  description: string;

  dateProposed: Date;
  votingStartDate: Date; // only editable by commissioner
  votingEndDate: Date; // only editable by commissioner

  status: string; // pending, active, passed, rejected, approved
  category: string; // rule change, league structure, scoring system, prize distribution, social events, traditions, other

  // Voting
  upVoters: string[];
  downVoters: string[];

  // Discussion (not sure this is neccessary)
  // comments?: Comment[];

  // Resolution
  resolutionDate?: Date; // when decision is finalized
  implementationDate?: Date; // immediately, or in the future
}

interface Comment {
  id: string;
  author: string; // userId
  authorName: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  replies?: Comment[];
}
