// TODO: Just modify Supabase's user type to include what you need

// mTODO: Settings should be handled on per league basis.
// Don't need email or password since it exists in linked auth table
interface User {
  id: string; // matches id in auth table

  updatedAt?: Date;
  username: string;

  fullName?: string;
  avatarUrl?: string;
  linkedLeagues: LinkedLeague[];

  roles?: string[];
  globalSettings?: UserSettings;
  leagueSettings?: LeagueSettings;
}

interface LinkedLeague {
  platform: string; // espn, yahoo, sleeper, etc...
  leagueId: string;
  leagueName: string;
  roles?: string[]; // isCommissioner, isAdmin, isHelper (veto committee), etc..
  settings?: LeagueSettings;
}

interface UserSettings {
  notificationPreferences?: NotificationPreferences;
  theme?: string;
  language?: string;
  // Add more global user settings as needed
}

interface NotificationPreferences {
  emailNotifications?: boolean;
  pushNotifications?: boolean;
  // Add more notification preferences as needed
}

interface LeagueSettings {
  [leagueId: string]: {
    notificationPreferences?: NotificationPreferences;
    // Add more league-specific settings as needed
  };
}
