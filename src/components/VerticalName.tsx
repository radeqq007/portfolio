const VerticalName = () => {
  return (
    <div className="hidden md:block pl-4 md:absolute right-0 top-0 h-full flex items-end pointer-events-none select-none">
      <svg
        className="h-full w-auto overflow-visible"
        viewBox="0 0 200 1000"
        preserveAspectRatio="xMaxYMax meet"
      >
        <text
          x="45"
          y="920"
          transform="rotate(270 45 950)"
          dominantBaseline="middle"
          textAnchor="start"
          className="font-josefin fill-dim-black text-3xl md:text-4xl tracking-widest"
        >
          Software Developer
        </text>


        <text
          x="45"
          y="990"
          transform="rotate(270 45 950)"
          dominantBaseline="middle"
          textAnchor="start"
          className="font-krona uppercase fill-blackish text-6xl md:text-7xl tracking-widest"
        >
          Radosław
        </text>

        <text
          x="135"
          y="970"
          transform="rotate(270 135 950)"
          dominantBaseline="middle"
          textAnchor="start"
          className="font-krona uppercase fill-blackish text-6xl md:text-7xl tracking-widest"
        >
          Kaczmarczyk
        </text>
      </svg>
    </div>
  )
}

export default VerticalName;
