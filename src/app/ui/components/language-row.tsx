import Glassdiv from "./glass-div";
import Image from "next/image";
import { karla } from "../fonts";

export default function LanguageRow({
    icons,
    names,
}: {
    icons: string[];
    names: string[];
}) {
    return (
        <div className="flex flex-col w-3/7">
            <Glassdiv className="flex flex-row justify-between rounded-full px-15 py-5">
                {icons.map((src, i) => (
                    <div key={i} className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-white/100 blur-[5px] shadow-[0_0_2px_2px_rgba(255,255,255,1)]"></div>
                        <Image
                            src={src}
                            alt="icon"
                            fill
                            className="object-contain p-2"
                        />
                    </div>
                ))}
            </Glassdiv>
            <div className="flex flex-row justify-between px-15 py-2">
                {names.map((name, i) => (
                    <div key={i} className="relative w-24 flex items-center justify-center">
                        <h3 className={`${karla.className} font-extrabold`}>{name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}