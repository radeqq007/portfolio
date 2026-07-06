import StatusSection from "../components/sections/Status"
import ContactSection from "../components/sections/Contact"
import Footer from "../components/sections/Footer"
import ProjectsSection from "../components/sections/Projects"
import TechSection from "../components/sections/Tech"
import WelcomeSection from "../components/sections/Welcome"

const Home = () => {
  return (
    <main className="grid grid-cols-[1fr_2fr_1fr] grid-rows-[3fr_2fr_2fr_1fr] gap-6 p-4 w-2/3 mx-auto h-full [&:has(section:hover)_section:not(:hover)]:opacity-76">
      <WelcomeSection />
      <TechSection />
      <ContactSection />
      <StatusSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

export default Home
