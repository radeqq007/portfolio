type Props = {
  category: string,
  list: string[],
}
const SkillsCard = ({ category, list }: Props) => {
  return (
    <div className="flex">
      <h3 className="[writing-mode:vertical-rl] rotate-180 bg-blackish text-greenish font-krona text-5xl text-start h-94 py-1 px-1 tracking-wide uppercase">
        {category}
      </h3>

      <ul className="font-josefin w-full text-3xl md:text-4xl bg-greenish text-dim-black font-semibold flex flex-col gap-1 pt-6 md:pt-4 pl-6">
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
