interface League {
  id: string; // or whatever Supabase generates
  activeMembers: string[]; // userIds
  commissionerId: string; // or whatever Supabase uses
  customModules: string[]; // modules added by commissioner like picks & challenges
}
