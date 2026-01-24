import About from "../ui/components/about";
import Background from "../ui/components/background";
import Contact from "../ui/components/contact";
import ResumeScroll from "../ui/components/resume-scroll";
import Footer from "../ui/components/footer";
import Languages from "../ui/components/languages";
import NavBar from "../ui/components/nav";
import Presentation from "../ui/components/presentation";
import Projects from "../ui/components/projects";
import Image from "next/image";

export default function Page() {
	return (
		<div>
			<NavBar />
			<div className="flex md:hidden justify-center">
				<Image
					src="/illustration.png"
					alt="Hello"
					height={150}
          width={150}
					className="object-contain"
				/>
			</div>
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
	);
}
