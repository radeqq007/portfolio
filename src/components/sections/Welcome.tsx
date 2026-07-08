import Section from "@/components/Section"

const WelcomeSection = () => {
  return (
    <Section title="Welcome" className="col-span-2 row-span-1 pr-10">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <p className="text-lg text-text">
          Hi, I'm Radosław Kaczmarczyk - a 19-year-old student from Poland who enjoys coding.
          My hobbies outside of coding include reading, weightlifting, playing the guitar and anything music-related.
        </p>
        <img src="https://avatars.githubusercontent.com/radeqq007" alt="Github avatar" className="h-40 rounded-full aspect-square" />
      </div>
    </Section>
  )
}

export default WelcomeSection
