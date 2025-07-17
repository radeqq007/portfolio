const Header = () => {
  return (
    <header className="relative border-b-3 border-primary bg-bg rounded-t-3xl px-5 py-2 font-baloo">
      <span className="text-primary text-4xl">Radosław Kaczmarczyk</span>
      <span className="text-bg bg-primary [clip-path:polygon(20%_100%,_100%_100%,_100%_0%,_0%_0%)] absolute -top-px right-0  rounded-tr-2xl bottom-0 flex items-center pl-10 pr-5 py-3 uppercase font-bold text-3xl">
        ABOUT {/* Placeholder for now */}
      </span>
    </header>
  );
};

export default Header;
