// Challenges ******************************************************
interface Challenge {
  leagueId: string;
  proposerId: string; // userId
  acceptorId: string; // userId

  proposerName: string;
  acceptorName: string;

  proposerSelection: string; // mTODO: Need to contstrain these in Supabase
  acceptorSelection: string; // mTODO: Need to contstrain these in Supabase

  acceptedAt?: Date;
  settledAt?: Date;

  dateProposed: Date;
  expiration: Date; // Proposer sets expiration when submitting

  propId: string;
  wagerAmount: number;

  autoLine: number;
  autoOdds: number;

  adjustedLine?: number; // proposer can tease line
  adjustedOdds?: number; // proposer can tease odds

  isLineAdjusted: boolean;

  proposerPayout: number;
  acceptorPayout: number;

  voided: boolean;

  voidReason?: string;

  status: string; // proposed, accepted, rejected, expired, settled, voided // mTODO: Need to contstrain these in supabase

  outcome: string; // score of game, total points of player, etc...

  winner: string;
}

// ""I [user], wager [$amount] that [description]" -> They must also select a user to challenge (They can select themselves if the wager is about themselves)

// Challenged person can "deny" (sets status to "rejected"), "accept", or "broadcast" (user does not accept but will participate)

// if second selection is "I" or the proposers name, wager is automatically broadcasted

// nobody else can accept the bet until the challenged owner has broadcasted it.

interface CustomChallenge {
  leagueId: string;
  proposerId: string; // userId
  challengedId: string; // userId
  acceptorId: string; // userId

  // NOTE: This is correct because a challenged member can still participate in the challenge without accepting it. If they do accept it, then the "challenged" name/id will match the "acceptor" name/id. Additionally, it's also possible a proposer selects themselves as the challenged which is totally fine. It will still be auto marked as "broadcasted"

  // THESE ARE LINKED
  // proposerName: string;
  // challengedName: string;
  // acceptorName: string;
  // dateProposed: Date; created_at exists

  // TODO: Type this in supabase
  challengedResponse: string; // accepted, rejected, broadcasted
  isBroadcasted: boolean;

  description: string;
  // user sets expiration, can be null. Can also be removed by commish or user
  expiration: Date;
  wagerAmount: number;
  odds: number;
  // line not needed here as it will be provided in the description
  proposerPayout: number;
  acceptorPayout: number;

  // TODO: Type this in supabase
  status: string; // proposed, accepted, rejected, expired, settled, voided
  acceptedAt?: Date;
  settledAt?: Date;

  // Media attachments
  // NOTE: ACTUALLY A VERY GOOD IDEA!!!
  imageUrl?: string; // URLs of attached images
  videoUrl?: string; // URLs of attached videos

  // Outcome
  winner?: string; // userId of the winner
  outcome?: string; // [description of what happened]
  voidReason?: string;
}
