import { skills } from "../data/skills";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <div>
      <h2 className="text-6xl text-greenish bg-blackish font-krona">SKILLS</h2>
      <div className="grid grid-cols-3 grid-rows mb-10">

      {
        Object.entries(skills).map(([category, list]) => (
          <SkillsCard category={category} list={list} />

        ))
      }
      </div>
    </div>
  )
}

export default SkillsSection;
