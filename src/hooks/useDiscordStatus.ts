import { useEffect, useState } from "react";

export type Status = "online" | "idle" | "dnd" | "offline";

export interface ActivityTimestamps {
	start?: number;
	end?: number;
}

export interface ActivityAssets {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
}

export interface ActivityEmoji {
	name: string;
	id?: string;
	animated?: boolean;
}

export interface ActivityParty {
	id?: string;
	size?: [number, number]; // [current_size, max_size]
}

export interface Activity {
	id: string;
	name: string;
	/**
	 * 0: Playing
	 * 1: Streaming
	 * 2: Listening
	 * 3: Watching
	 * 4: Custom Status
	 * 5: Competing
	 */
	type: 0 | 1 | 2 | 3 | 4 | 5;
	state?: string;
	details?: string;
	timestamps?: ActivityTimestamps;
	assets?: ActivityAssets;
	emoji?: ActivityEmoji;
	party?: ActivityParty;
	application_id?: string;
	session_id?: string;
	buttons?: string[];
	created_at: number;
}

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
	activities: Activity[];
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

export default function useDiscordStatus(
	discordId: string,
): UseDiscordStatusReturn {
	const [data, setData] = useState<LanyardData | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const response = await fetch(
					`https://api.lanyard.rest/v1/users/${discordId}`,
				);
				if (!response.ok) throw new Error("Failed to fetch status");

				const json = (await response.json()) as LanyardResponse;
				setData(json.data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An unknown error occurred");
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchStatus();

		// const intervalId = setInterval(fetchStatus, 15000);
		// return () => clearInterval(intervalId);
	}, [discordId]);

	return { data, isLoading, error };
}
