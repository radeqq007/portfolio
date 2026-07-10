import useDiscordStatus from "@/hooks/useDiscordStatus"
import DiscordStatus from "@/components/DiscordStatus"
import Section from "@/components/Section"

const StatusSection = () => {
  const { isLoading, data, error } = useDiscordStatus('695965239556177980')

  let content;

  if (isLoading) {
    content = <span className="text-md text-text">Loading...</span>;
  } else if (error || !data) {
    content = <span className="text-md text-text">Error fetching discord status.</span>;
  } else {
    content = (
      <DiscordStatus
        status={data.discord_status}
        userID={data.discord_user.id}
        globalName={data.discord_user.global_name!}
        avatar={data.discord_user.avatar}
        song={data.spotify?.song}
        artist={data.spotify?.artist}
        isListening={data.listening_to_spotify}
        activities={data.activities}
      />
    );
  }

  return (
    <Section title="Discord Status" className="row-start-2 col-start-2">
      {content}
    </Section>
  )
}

export default StatusSection
