type Props = {
  category: string,
  list: string[],
}
const SkillsCard = ({ category, list }: Props) => {
  return (
    <div className="flex gap-6">
      <h3 className="[writing-mode:vertical-rl] rotate-180 bg-blackish text-greenish font-krona text-5xl text-start h-94 py-1 px-1 tracking-wide uppercase">
        {category}
      </h3>

      <ul className="font-josefin text-4xl bg-greenish text-dim-black font-semibold flex flex-col gap-1 pt-4">
        {
          list.map(skill => (
            <li key={skill}>{skill}</li>
          ))
        }
      </ul>
    </div>
  )

}

export default SkillsCard;
