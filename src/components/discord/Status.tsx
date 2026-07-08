import { cn } from "@/helpers";
import type { Status } from "@/hooks/useDiscordStatus"

type Props = {
  status: Status;
  userID: string;
  avatar: string;
  globalName: string;
  song: string | undefined;
  artist: string | undefined;
  isListening: boolean;
}

const DiscordStatus = ({ userID, avatar, globalName, status, song, artist, isListening }: Props) => {
  let statusStyle: string;

  switch (status) {
    case "online":
      statusStyle = "bg-green-500"
      break;
    case "dnd":
      statusStyle = "bg-red-500"
      break;

    case "idle":
      statusStyle = "bg-yellow-500"
      break;

    default:
      statusStyle = "bg-gray-500"
      break;
  }
  return (
    <div className="flex flex-col xs:flex-row lg:flex-col xl:flex-row gap-4 items-center sm:px-4">
        <img src={`https://cdn.discordapp.com/avatars/${userID}/${avatar}.png`} className="rounded-full aspect-square h-26" />
        <div className="text-text">
          <h3 className="text-xl">{globalName}</h3>
          <span className="flex justify-start items-center gap-2 text-sm -mt-1 text-text-secondary">
            <div className={cn("h-2 aspect-square rounded-full", statusStyle)}></div>
            {status === "dnd" ? "Do Not Disturb" : status}
          </span>
          {
            isListening ?
            <span className="text-text-secondary text-lg">
              Listening to <span className="text-text">{song}</span> by <span className="text-text">{artist}</span>
            </span>
            :
            <span>No activity</span>
          }
        </div>
      </div>
  )
}

export default DiscordStatus
