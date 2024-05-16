// TODO: Just modify Supabase's user type to include what you need

// mTODO: Settings should be handled on per league basis.
interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  name?: string;
  linkedLeagues: LinkedLeague[];
  createdAt: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
  isVerified?: boolean;
  isActive?: boolean;
  roles?: string[]; // global user roles (you would have admin, no one else would - not really that applicable to your app honestly)
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
