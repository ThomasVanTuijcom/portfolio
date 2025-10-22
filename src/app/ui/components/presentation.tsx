import Image from 'next/image';
import { bakehaus, karla } from '../fonts';
import Glassdiv from './glassdiv';
import { useTranslations } from 'next-intl';

export default function Presentation({
    id,
}: {
    id: string,
}) {
    const t = useTranslations('Presentation');
    return (
        <div id={id} className="flex flex-row justify-center">
            <Glassdiv className='flex flex-row w-3/5 h-[600px] rounded-4xl my-[110px] py-15 px-15 gap-20'>
                <div className="flex flex-col justify-center gap-2 w-1/2">
                    <h1 className={`text-(--text-secondary) text-3xl ${bakehaus.className}`}>
                        {t('greeting')}
                    </h1>
                    <h1 className={`text-3xl ${bakehaus.className}`}>
                        {t('name')}
                    </h1>
                    <h3 className={`${karla.className} font-extrabold`}>
                        {t('entitlement')}
                    </h3>
                    <h4 className={`${karla.className} font-extralight`}>
                        {t('place')}
                    </h4>
                    <p className={`${karla.className} font-extralight text-justify mt-5`}>
                        {t('presentationText')}
                    </p>
                    <div className='flex flex-row gap-15 w-full'>
                        <a
                            href="/resume-en.pdf"
                            download
                            className='flex flex-row justify-center items-center bg-(--text-secondary) text-[#292C33] rounded-2xl px-5 py-2 font-bold mt-6 w-1/3 gap-2 z-1'>
                            {t('resumeBtn')}
                            <Image
                                src="/download.svg"
                                alt="new tab icon"
                                width={20} // specify size
                                height={20}
                                className="object-contain"
                            />
                        </a>
                        <a
                            href="https://github.com/ThomasVanTuijcom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row justify-center items-center bg-[#292C33] text-[var(--text-secondary)] border-[var(--text-secondary)] border-1 rounded-2xl px-5 py-2 font-bold mt-6 w-1/3 gap-2 z-1"
                        >
                            GitHub
                            <Image
                                src="/new-tab.png"
                                alt="new tab icon"
                                width={20} // specify size
                                height={20}
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center w-1/2'>
                    <div className='relative w-full h-full'>
                        <Image
                            src="/illustration.png"
                            fill
                            className="object-contain"
                            priority
                            alt="test"
                        />
                    </div>
                </div>
            </Glassdiv>
        </div>
    )
}