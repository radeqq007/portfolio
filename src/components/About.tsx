const About = () => {
  return (
    <div className="md:ml-14 flex flex-col md:flex-row items-center gap-10 pt-10 md:pt-0 mx-10 md:mx-0">
      <img src="https://avatars.githubusercontent.com/radeqq007" className="h-60 shadow-brutalist"/>

      <div className="md:w-1/3">
        <h2 className="font-josefin text-4xl text-greenish bg-dim-black w-full md:w-fit px-4 pt-2">ABOUT ME</h2>
        <p className="font-josefin text-2xl/9 tracking-wider bg-greenish">
          Hi, I'm Radosław Kaczmarczyk - a 19-year-old high school student from Poland
          who enjoys coding. Outside of coding my hobbies include reading,  weightlifting, playing
          the guitar and music, especially experimental rock and metal.
        </p>
      </div>
    </div>
  )
}

export default About;
