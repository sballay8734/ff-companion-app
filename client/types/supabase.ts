export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      challenges: {
        Row: {
          accepted_at: string | null
          acceptor_id: string | null
          acceptor_name: string | null
          acceptor_payout: number
          acceptor_selection: string | null
          adjusted_line: number
          adjusted_odds: number
          auto_line: number
          auto_odds: number
          created_at: string
          date_proposed: string
          expiration: string
          id: number
          is_line_adjusted: boolean
          league_id: number
          outcome: string | null
          proposer_id: string
          proposer_name: string
          proposer_payout: number
          proposer_selection: string
          settled_at: string | null
          status: string
          void_reason: string | null
          voided: boolean
          winner: string | null
        }
        Insert: {
          accepted_at?: string | null
          acceptor_id?: string | null
          acceptor_name?: string | null
          acceptor_payout: number
          acceptor_selection?: string | null
          adjusted_line: number
          adjusted_odds: number
          auto_line: number
          auto_odds: number
          created_at?: string
          date_proposed: string
          expiration: string
          id?: number
          is_line_adjusted: boolean
          league_id: number
          outcome?: string | null
          proposer_id: string
          proposer_name: string
          proposer_payout: number
          proposer_selection: string
          settled_at?: string | null
          status: string
          void_reason?: string | null
          voided?: boolean
          winner?: string | null
        }
        Update: {
          accepted_at?: string | null
          acceptor_id?: string | null
          acceptor_name?: string | null
          acceptor_payout?: number
          acceptor_selection?: string | null
          adjusted_line?: number
          adjusted_odds?: number
          auto_line?: number
          auto_odds?: number
          created_at?: string
          date_proposed?: string
          expiration?: string
          id?: number
          is_line_adjusted?: boolean
          league_id?: number
          outcome?: string | null
          proposer_id?: string
          proposer_name?: string
          proposer_payout?: number
          proposer_selection?: string
          settled_at?: string | null
          status?: string
          void_reason?: string | null
          voided?: boolean
          winner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenges_acceptor_id_fkey"
            columns: ["acceptor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenges_proposer_id_fkey"
            columns: ["proposer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      custom_challenges: {
        Row: {
          accepted_at: string | null
          acceptor_id: string | null
          acceptor_payout: number
          challenged_id: string
          challenged_response: string | null
          created_at: string
          description: string
          expiration: string | null
          id: number
          image_url: string | null
          is_broadcasted: boolean
          league_id: number
          odds: number
          outcome: string | null
          proposer_id: string
          proposer_payout: number
          settled_at: string | null
          status: string
          video_url: string | null
          void_reason: string | null
          voided: boolean
          wager_amount: number
          winner: string | null
        }
        Insert: {
          accepted_at?: string | null
          acceptor_id?: string | null
          acceptor_payout: number
          challenged_id: string
          challenged_response?: string | null
          created_at?: string
          description: string
          expiration?: string | null
          id?: number
          image_url?: string | null
          is_broadcasted?: boolean
          league_id: number
          odds: number
          outcome?: string | null
          proposer_id: string
          proposer_payout: number
          settled_at?: string | null
          status: string
          video_url?: string | null
          void_reason?: string | null
          voided?: boolean
          wager_amount: number
          winner?: string | null
        }
        Update: {
          accepted_at?: string | null
          acceptor_id?: string | null
          acceptor_payout?: number
          challenged_id?: string
          challenged_response?: string | null
          created_at?: string
          description?: string
          expiration?: string | null
          id?: number
          image_url?: string | null
          is_broadcasted?: boolean
          league_id?: number
          odds?: number
          outcome?: string | null
          proposer_id?: string
          proposer_payout?: number
          settled_at?: string | null
          status?: string
          video_url?: string | null
          void_reason?: string | null
          voided?: boolean
          wager_amount?: number
          winner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenges_acceptorId_fkey"
            columns: ["acceptor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenges_challengedId_fkey"
            columns: ["challenged_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenges_proposerId_fkey"
            columns: ["proposer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenges_winner_fkey"
            columns: ["winner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_challenges_acceptor_id_fkey"
            columns: ["acceptor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_challenges_challenged_id_fkey"
            columns: ["challenged_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_challenges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_challenges_proposer_id_fkey"
            columns: ["proposer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      league_records: {
        Row: {
          created_at: string
          id: number
          league_id: number
          record_category: string
          record_description: string
          record_name: string
          top_records: Json[]
          unit: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          league_id: number
          record_category: string
          record_description: string
          record_name: string
          top_records: Json[]
          unit?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          league_id?: number
          record_category?: string
          record_description?: string
          record_name?: string
          top_records?: Json[]
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "league_records_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues"
            referencedColumns: ["id"]
          },
        ]
      }
      leagues: {
        Row: {
          active_member_ids: string[] | null
          commissioner_ids: string[] | null
          created_at: string
          custom_module_ids: string[] | null
          id: number
        }
        Insert: {
          active_member_ids?: string[] | null
          commissioner_ids?: string[] | null
          created_at?: string
          custom_module_ids?: string[] | null
          id?: number
        }
        Update: {
          active_member_ids?: string[] | null
          commissioner_ids?: string[] | null
          created_at?: string
          custom_module_ids?: string[] | null
          id?: number
        }
        Relationships: []
      }
      matchups: {
        Row: {
          away_owner_id: string
          away_score: number
          created_at: string
          home_owner_id: string
          home_score: number
          id: number
          is_playoff_matchup: boolean
          nfl_week: number
          year_of_season_start: number
        }
        Insert: {
          away_owner_id: string
          away_score: number
          created_at?: string
          home_owner_id: string
          home_score: number
          id?: number
          is_playoff_matchup: boolean
          nfl_week: number
          year_of_season_start: number
        }
        Update: {
          away_owner_id?: string
          away_score?: number
          created_at?: string
          home_owner_id?: string
          home_score?: number
          id?: number
          is_playoff_matchup?: boolean
          nfl_week?: number
          year_of_season_start?: number
        }
        Relationships: [
          {
            foreignKeyName: "matchups_away_owner_id_fkey"
            columns: ["away_owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matchups_awayOwnerId_fkey"
            columns: ["away_owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matchups_home_owner_id_fkey"
            columns: ["home_owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matchups_homeOwnerId_fkey"
            columns: ["home_owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          linked_league_ids: Json[] | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          linked_league_ids?: Json[] | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          linked_league_ids?: Json[] | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      proposals: {
        Row: {
          category: string
          created_at: string
          date_proposed: string
          down_voters: string
          id: number
          implementation_date: string | null
          league_id: number
          proposal_description: string
          proposal_title: string
          proposer_id: string
          proposer_name: string
          resolution_date: string | null
          status: string
          up_voters: string[]
          voting_end_date: string | null
          voting_start_date: string | null
        }
        Insert: {
          category: string
          created_at?: string
          date_proposed: string
          down_voters: string
          id?: number
          implementation_date?: string | null
          league_id: number
          proposal_description: string
          proposal_title: string
          proposer_id: string
          proposer_name: string
          resolution_date?: string | null
          status: string
          up_voters: string[]
          voting_end_date?: string | null
          voting_start_date?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          date_proposed?: string
          down_voters?: string
          id?: number
          implementation_date?: string | null
          league_id?: number
          proposal_description?: string
          proposal_title?: string
          proposer_id?: string
          proposer_name?: string
          resolution_date?: string | null
          status?: string
          up_voters?: string[]
          voting_end_date?: string | null
          voting_start_date?: string | null
        }
        Relationships: []
      }
      props: {
        Row: {
          away_team_final_score: number | null
          away_team_implied_prop: number | null
          away_team_name: string | null
          away_team_odds: number | null
          away_team_spread: number | null
          created_at: string
          expiration: string
          favorite: string | null
          favorite_implied_prop: number | null
          favorite_odds: number | null
          home_team_final_score: number | null
          home_team_implied_prob: number | null
          home_team_name: string | null
          home_team_odds: number | null
          home_team_spread: number | null
          id: number
          league_id: number
          over_implied_prop: number | null
          over_odds: number | null
          over_under_line: number | null
          player_final_stat: number | null
          player_name: string | null
          prop_type: string
          result: string | null
          sport: string
          stat_type: string | null
          team_final_stat: number | null
          team_name: string | null
          under_implied_prop: number | null
          under_odds: number | null
          underdog: string | null
          underdog_implied_prop: number | null
          underdog_odds: number | null
          updated_at: string | null
          void_reason: string | null
          voided: boolean | null
          winner: string | null
        }
        Insert: {
          away_team_final_score?: number | null
          away_team_implied_prop?: number | null
          away_team_name?: string | null
          away_team_odds?: number | null
          away_team_spread?: number | null
          created_at?: string
          expiration: string
          favorite?: string | null
          favorite_implied_prop?: number | null
          favorite_odds?: number | null
          home_team_final_score?: number | null
          home_team_implied_prob?: number | null
          home_team_name?: string | null
          home_team_odds?: number | null
          home_team_spread?: number | null
          id?: number
          league_id: number
          over_implied_prop?: number | null
          over_odds?: number | null
          over_under_line?: number | null
          player_final_stat?: number | null
          player_name?: string | null
          prop_type: string
          result?: string | null
          sport: string
          stat_type?: string | null
          team_final_stat?: number | null
          team_name?: string | null
          under_implied_prop?: number | null
          under_odds?: number | null
          underdog?: string | null
          underdog_implied_prop?: number | null
          underdog_odds?: number | null
          updated_at?: string | null
          void_reason?: string | null
          voided?: boolean | null
          winner?: string | null
        }
        Update: {
          away_team_final_score?: number | null
          away_team_implied_prop?: number | null
          away_team_name?: string | null
          away_team_odds?: number | null
          away_team_spread?: number | null
          created_at?: string
          expiration?: string
          favorite?: string | null
          favorite_implied_prop?: number | null
          favorite_odds?: number | null
          home_team_final_score?: number | null
          home_team_implied_prob?: number | null
          home_team_name?: string | null
          home_team_odds?: number | null
          home_team_spread?: number | null
          id?: number
          league_id?: number
          over_implied_prop?: number | null
          over_odds?: number | null
          over_under_line?: number | null
          player_final_stat?: number | null
          player_name?: string | null
          prop_type?: string
          result?: string | null
          sport?: string
          stat_type?: string | null
          team_final_stat?: number | null
          team_name?: string | null
          under_implied_prop?: number | null
          under_odds?: number | null
          underdog?: string | null
          underdog_implied_prop?: number | null
          underdog_odds?: number | null
          updated_at?: string | null
          void_reason?: string | null
          voided?: boolean | null
          winner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "props_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
