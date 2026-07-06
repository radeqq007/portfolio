import Badge from "@/components/Badge";

type Props = {
  title: string;
  elements: string[];
}

const StackGroup = ({ title, elements }: Props) => {
  return (
    <div>
      <h3 className="text-text-secondary pl-1">{title}</h3>
      <div className="flex flex-wrap gap-2 border-t-2 border-accent transition-colors duration-300 rounded-xl pt-2 px-2">
        {
          elements.map(el => <Badge text={el} />)
        }
      </div>
    </div>
  )
}

export default StackGroup
