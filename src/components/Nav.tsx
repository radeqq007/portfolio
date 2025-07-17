const Nav = () => {
  return (
    <nav className="absolute bottom-2 left-0 right-0 flex items-center justify-center font-baloo text-2xl gap-4">
      <a
        href="/portfolio/"
        className="w-40 h-10 rounded-full border-3 border-primary text-primary grid place-items-center hover:bg-primary hover:text-bg transition-colors"
      >
        ABOUT
      </a>
      <a
        href="/portfolio/skills"
        className="w-40 h-10 rounded-full border-3 border-primary text-primary grid place-items-center hover:bg-primary hover:text-bg transition-colors"
      >
        SKILLS
      </a>
      <a
        href="/portfolio/work"
        className="w-40 h-10 rounded-full border-3 border-primary text-primary grid place-items-center hover:bg-primary hover:text-bg transition-colors"
      >
        WORK
      </a>
      <a
        href="/portfolio/contact"
        className="w-40 h-10 rounded-full border-3 border-primary text-primary grid place-items-center hover:bg-primary hover:text-bg transition-colors"
      >
        CONTACT
      </a>
    </nav>
  );
};

export default Nav;
