// Proposals for rule changes or other...
interface Proposal {
  id: string;
  proposer: string; // userId
  proposerName: string;
  title: string;
  description: string;
  dateProposed: Date;
  votingStartDate: Date;
  votingEndDate: Date;
  status: string; // pending, active, passed, rejected, approved
  category: string; // rule change, league structure, scoring system, prize distribution, social events, traditions, other

  // Voting
  upVoters: string[]; // userIds of users who voted in favor
  downVoters: string[]; // userIds of users who voted against

  // Discussion (not sure this is neccessary)
  comments?: Comment[];

  // Resolution
  resolution?: string;
  resolutionDate?: Date;
  implementationDate?: Date;
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
