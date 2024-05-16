// Challenges ******************************************************
interface Challenge {
  proposerId: string; // userId
  acceptorId: string; // userId

  proposerName: string;
  acceptorName: string;

  proposerSelection: string;
  acceptorSelection: string;

  acceptedAt?: Date;
  settledAt?: Date;

  dateProposed: Date;
  expiration: Date;

  propId: string;
  wagerAmount: number;

  autoLine: number;
  autoOdds: number;

  adjustedLine?: number; // proposer can tease line
  adjustedOdds?: number; // proposer can tease odds

  isLineAdjusted: boolean;

  proposerPayout: number;
  acceptorPayout: number;

  voidReason?: string;

  status: string; // proposed, accepted, rejected, expired, settled, voided

  outcome: string; // score of game, total points of player, etc...

  winner: string;
}

// ""I [user], wager [$amount] that [challengedUser] [description]"

// Challenged person can "deny" (sets status to "rejected"), "accept", or "broadcast" (user does not accept but will participate)

// if second selection is "I" or the proposers name, wager is automatically broadcasted

// nobody else can accept the bet until the challenged owner has broadcasted it.

interface CustomChallenge {
  proposerId: string; // userId
  challengedId: string; // userId
  acceptorId: string; // userId

  // NOTE: This is correct because a challenged member can still participate in the challenge without accepting it. If they do accept it, then the "challenged" name/id will match the "acceptor" name/id. Additionally, it's also possible a proposer selects themselves as the challenged which is totally fine. It will still be auto marked as "broadcasted"

  proposerName: string;
  challengedName: string;
  acceptorName: string;

  challengedResponse: string; // accepted, rejected, broadcasted
  isBroadcasted: boolean;

  description: string;
  dateProposed: Date;
  expiration: Date;
  wagerAmount: number;
  odds: number;
  // line not needed here as it will be provided in the description
  proposerPayout: number;
  acceptorPayout: number;

  status: string; // proposed, accepted, rejected, expired, settled, voided
  acceptedAt?: Date;
  settledAt?: Date;

  // Media attachments
  // NOTE: ACTUALLY A VERY GOOD IDEA!!!
  images?: string[]; // URLs of attached images
  videos?: string[]; // URLs of attached videos

  // Outcome
  winner?: string; // userId of the winner
  outcome?: string; // [description of what happened]
  voidReason?: string;
}
