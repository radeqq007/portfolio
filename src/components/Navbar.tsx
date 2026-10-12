import xLogo from '@/assets/x.svg';
import githubLogo from '@/assets/github.svg';
import instagramLogo from '@/assets/instagram.svg';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 fixed left-0 top-0 right-0 px-8 py-1 bg-greenish z-100">
      <span className="flex items-center gap-3">
        <a href="https://x.com/wcale_nie_radek" target="_blank">  
          <img src={xLogo} className="h-7" />
        </a>

        <a href="https://www.instagram.com/your.iron.lung/" target="_blank">  
          <img src={instagramLogo} className="h-10" />
        </a>

        <a href="https://github.com/radeqq007" target="_blank">  
          <img src={githubLogo} className="h-9" />
        </a>
     </span>

      <span className="flex justify-center items-center gap-6 font-josefin text-2xl font-bold">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </span>
    </nav>
  )

}

export default Navbar;
