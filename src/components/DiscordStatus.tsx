import { cn } from "@/helpers";
import type { Activity, Status } from "@/hooks/useDiscordStatus";

type Props = {
	status: Status;
	userID: string;
	avatar: string;
	globalName: string;
	song: string | undefined;
	artist: string | undefined;
	isListening: boolean;
	activities: Activity[];
};

const DiscordStatus = ({
	userID,
	avatar,
	globalName,
	status,
	song,
	artist,
	isListening,
	activities = [],
}: Props) => {
	let statusStyle: string;

	switch (status) {
		case "online":
			statusStyle = "bg-green-500";
			break;
		case "dnd":
			statusStyle = "bg-red-500";
			break;

		case "idle":
			statusStyle = "bg-yellow-500";
			break;

		default:
			statusStyle = "bg-gray-500";
			break;
	}

	// filter out spotify (2) amd custom status (4)
	const activity = activities.find((act) => act.type !== 2 && act.type !== 4);
	const customStatus = activities.find((act) => act.type === 4);

	let activityContent: React.ReactNode;

	if (activity) {
		activityContent = (
			<div className="text-text-secondary text-lg flex flex-col gap-0.5">
				<span className="text-text-secondary">
					{activity.type === 1 && "Streaming "}
					{activity.type === 3 && "Watching "}
					{activity.type === 5 && "Competing in "}
					{activity.type === 0 && "Playing "}
					<span className="text-text">{activity.name}</span>
				</span>

				{activity.details && (
					<span className="text-sm">{activity.details}</span>
				)}
				{activity.state && <span className="text-sm">{activity.state}</span>}
			</div>
		);
	} else if (isListening) {
		activityContent = (
			<span className="text-text-secondary text-sm">
				Listening to <span className="text-text font-medium">{song}</span> by{" "}
				<span className="text-text font-medium">{artist}</span>
			</span>
		);
	} else if (customStatus) {
		activityContent = (
			<span className="text-text-secondary text-sm italic flex items-center gap-1">
				{customStatus.emoji && <span>{customStatus.emoji.name}</span>}
				<span>{customStatus.state}</span>
			</span>
		);
	} else {
		activityContent = (
			<span className="text-text-secondary text-sm">No activity</span>
		);
	}

	return (
		<div className="flex flex-col xs:flex-row lg:flex-col xl:flex-row gap-4 items-center sm:px-4">
			<img
				src={`https://cdn.discordapp.com/avatars/${userID}/${avatar}.png`}
				className="rounded-full aspect-square h-26"
				alt="Discord Avatar"
			/>
			<div className="text-text">
				<h3 className="text-xl">{globalName}</h3>
				<span className="flex justify-start items-center gap-2 text-sm -mt-1 text-text-secondary">
					<div
						className={cn("h-2 aspect-square rounded-full", statusStyle)}
					></div>
					{status === "dnd" ? "Do Not Disturb" : status}
				</span>
				{activityContent}
			</div>
		</div>
	);
};

export default DiscordStatus;
