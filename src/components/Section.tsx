import { cn } from "@/helpers";

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Section = ({ title, children, className }: Props) => {
  return (
    <section
      data-cursor="expand"
      className={
        cn(
          "group border-1 border-accent rounded-xl bg-bg p-4 transition-all duration-300 overflow-hidden linear",
          "hover:scale-102",
          className
        )
      }
    >
      { title && <h1 className="text-md text-text-secondary mb-2">{title}</h1>}
      {children}
    </section>
  )
}

export default Section
