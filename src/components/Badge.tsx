import { cn } from "@/helpers";

type Props = {
  text: string;
  className?: string;
}

const Badge = ({ text, className }: Props) => {
  return (
    <span className={cn("bg-accent text-text-secondary px-3 rounded-xl text-sm hover:brightness-110 transition-all duration-200 select-none", className)}>
      {text}
    </span>
  )
}

export default Badge
