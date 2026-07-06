import { useState, useEffect } from 'react';

export type Status = 'online' | 'idle' | 'dnd' | 'offline'

export interface SpotifyData {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string | null;
}

export interface LanyardData {
  spotify: SpotifyData | null;
  listening_to_spotify: boolean;
  discord_user: DiscordUser;
  discord_status: Status;
  activities: any[];
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface LanyardResponse {
  data: LanyardData;
  success: boolean;
}

export interface UseDiscordStatusReturn {
  data: LanyardData | null;
  isLoading: boolean;
  error: string | null;
}

export default function useDiscordStatus(discordId: string): UseDiscordStatusReturn {
  const [data, setData] = useState<LanyardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        if (!response.ok) throw new Error('Failed to fetch status');

        const json = (await response.json()) as LanyardResponse;
        setData(json.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatus();

    // const intervalId = setInterval(fetchStatus, 15000);
    // return () => clearInterval(intervalId);
  }, []);

  return { data, isLoading, error };
}
