import { useTranslations } from "next-intl";
import Image from "next/image";
import { bakehaus, karla } from "../fonts";
import Glassdiv from "./glassdiv";

export default function About({
    id,
}:{
    id: string,
}) {
    const t = useTranslations('About');
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
                    <h2 className={`${bakehaus.className} text-(--text-secondary) text-3xl font-regular mb-4`}>{t('title')}</h2>
                    <p className={`${karla.className} mb-4 font-regular text-justify`}>
                        {t('description')}
                    </p>
                </div>
            </Glassdiv>
        </div>
    )
}