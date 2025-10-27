import About from "../ui/components/about"
import Background from "../ui/components/background"
import Contact from "../ui/components/contact"
import ResumeScroll from "../ui/components/resume-scroll"
import Footer from "../ui/components/footer"
import Languages from "../ui/components/languages"
import NavBar from "../ui/components/nav"
import Presentation from "../ui/components/presentation"
import Projects from "../ui/components/projects"

export default function Page() {
  return (
    <div className="pt-8">
      <NavBar />
      <main className="px-4">
        <Background />
        <Presentation id="home" />
        <Languages id="skills" />
        <Projects id="projects" />
        <ResumeScroll id="experience" />
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  )
}