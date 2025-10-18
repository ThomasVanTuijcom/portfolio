import About from "./ui/about/about"
import Contact from "./ui/contact/contact"
import CustomScrollbar from "./ui/customScrollBar"
import ResumeScroll from "./ui/expEduc/resumeScroll"
import Footer from "./ui/footer/footer"
import Glassdiv from "./ui/glassdiv"
import Languages from "./ui/languages/languages"
import NavBar from "./ui/nav/nav"
import Presentation from "./ui/presentation/presentation"
import Projects from "./ui/projects/projects"

export default function Page() {
  return (
    <main>
      <Presentation id="home" />
      <Languages id="skills" />
      <Projects id="projects" />
      <ResumeScroll id="experience" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </main>
  )
}