import Section from '@/components/Section'
import StackGroup from '@/components/StackGroup'

const TechSection = () => {
  return (
    <Section title="Tech Stack & Tools" className="col-span-1 row-span-3 col-start-3">
      <div className="flex flex-col gap-2 xl:gap-7">
       <StackGroup title="Frontend" elements={["JavaScript", "TypeScript", "Tailwind CSS", "React", "Vue.js", "Vite", "Vitest", "Motion", "GSAP"]}/>
       <StackGroup title="Backend" elements={["Go", "Python", "Lua"]} />
       <StackGroup title="Tools" elements={["NeoVim", "Arch Linux", "Figma",]} />
      </div>
    </Section>
  )
}

export default TechSection
