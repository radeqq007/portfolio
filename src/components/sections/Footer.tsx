import Badge from "@/components/Badge"
import Section from "@/components/Section"

const Footer = () => {
  return (
    <Section className="col-span-2 col-start-2 row-start-4 flex justify-between items-center flex-wrap pr-10 gap-4">
      <p className="text-xl text-text"><span className="text-text-secondary">&#169; 2026</span> &#8729; Made with &lt;3 by Radosław Kaczmarczyk</p>
      <a href="https://github.com/radeqq007/portfolio" data-cursor="shrink" target="_blank" className="ml-auto">
        <Badge text="Source Code" className="py-1 hover:bg-highlight group-hover:text-text transition-colors duration-300" />
      </a>
    </Section>
  )
}

export default Footer
