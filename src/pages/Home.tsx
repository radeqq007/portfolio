import StatusSection from "@/components/sections/Status"
import ContactSection from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import ProjectsSection from "@/components/sections/Projects"
import TechSection from "@/components/sections/Tech"
import WelcomeSection from "@/components/sections/Welcome"

const Home = () => {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[3fr_2fr_2fr_1fr] gap-6 px-10 sm:px-20 lg:py-20 lg:w-4/5 xl:w-3/4 2xl:w-2/3 lg:mx-auto h-full [&:has(section:hover)_section:not(:hover)]:opacity-76 py-16">
      <WelcomeSection />
      <TechSection />
      <StatusSection />
      <ContactSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

export default Home
