import { bakehaus, karla } from "../fonts";
import Glassdiv from "../glassdiv";
import Image from "next/image";

export default function About({
    id,
}:{
    id: string,
}) {
    return (
        <div id={id} className="flex flex-row justify-center items-center h-[100vh]">
            <Glassdiv className="flex flex-row h-[65%] w-[55%] py-15 px-20 rounded-2xl overflow-hidden">
                <div className="relative w-1/3 h-full">
                    <Image
                        src="/debout.png"
                        alt="Profile standing image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="w-2/3 flex flex-col justify-center p-20 text-white">
                    <h2 className={`${bakehaus.className} text-(--text-secondary) text-3xl font-regular mb-4`}>A Closer Look,</h2>
                    <p className={`${karla.className} mb-4 font-regular text-justify`}>
                        As a junior developer, my profile combines solid technical foundations
                        with adaptability and a strong willingness to learn. My experiences,
                        whether through my internship or various student jobs, have helped me
                        develop rigor, a sense of service, and confidence in communication. I
                        believe these qualities, together with my motivation and ambition to
                        improve, will allow me to integrate quickly and become an effective and
                        committed member of the team that gives me the opportunity to prove
                        myself.
                    </p>
                </div>
            </Glassdiv>
        </div>
    )
}