interface League {
  id: string; // or whatever Supabase generates
  createdAt: string; //

  activeMemberIds: string[]; // userIds
  commissionerIds: string[]; // or whatever Supabase uses
  customModules: string[]; // modules added by commissioner like picks & challenges
}
