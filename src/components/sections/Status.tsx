import useDiscordStatus from "../../hooks/useDiscordStatus"
import DiscordStatus from "../discord/Status"
import Section from "../Section"

const StatusSection = () => {
  const { isLoading, data, error } = useDiscordStatus('695965239556177980')
  console.log(data?.discord_status)

  

  return (
    <Section title="Discord Status" className="row-start-2 col-start-2">
      {
        isLoading ?
          <span className="text-md text-text">Loading...</span>
        :
          <DiscordStatus
            status={data!.discord_status}
            userID={data!.discord_user.id}
            globalName={data!.discord_user.global_name!}
            avatar={data!.discord_user.avatar}
            song={data!.spotify?.song}
            artist={data?.spotify?.artist}
            isListening={data!.listening_to_spotify}
          />
      }
      
      
    </Section>
  )
}

export default StatusSection
