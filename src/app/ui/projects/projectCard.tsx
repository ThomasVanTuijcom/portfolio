import { karla } from "../fonts";
import Glassdiv from "../glassdiv";
import Image from "next/image";

export default function ProjectCard({
    title,
    img,
}: {
    title: string;
    img: string;
}) {
    return (
        <Glassdiv className="rounded-4xl px-10 py-8 mx-5">
            <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                    <Image
                        src={img}
                        fill
                        alt="Project screenshot"
                        className="object-cover"
                    />
                </div>
                <h3 className={`${karla.className} font-extrabold text-[22px]`}>{title}</h3>
            </div>
        </Glassdiv>
    )
}