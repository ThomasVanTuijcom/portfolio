import Image from 'next/image';
import { bakehaus, karla } from '../fonts';
import Glassdiv from '../glassdiv';

export default function Presentation({
    id,
}: {
    id: string,
}) {
    return (
        <div id={id} className="flex flex-row justify-center">
            <Glassdiv className='flex flex-row w-3/5 h-[600px] rounded-4xl my-[110px] py-15 px-15 gap-20'>
                <div className="flex flex-col justify-center gap-2 w-1/2">
                    <h1 className={`text-(--text-secondary) text-3xl ${bakehaus.className}`}>Hello,</h1>
                    <h1 className={`text-3xl ${bakehaus.className}`}>I'm Thomas</h1>
                    <h3 className={`${karla.className} font-extrabold`}>Junior Developer</h3>
                    <h4 className={`${karla.className} font-extralight`}>Brussels, Belgium</h4>
                    <p className={`${karla.className} font-extralight text-justify mt-5`}>
                        Junior application developer with a solid background in programming and web technologies, experienced with languages such as Java, Kotlin, PHP, JavaScript, and C/C++, as well as frameworks including React, Spring, Django, and Laravel.
                        My journey has given me the opportunity to work on both academic projects and professional assignments, including an internship focused on SAP integration.
                        Through these experiences, I have developed a strong interest in teamwork, an eye for code quality, and the ability to quickly learn new tools. I am now looking to apply these skills in a professional environment where I can continue to grow and make a meaningful contribution.
                    </p>
                    <div className='flex flex-row gap-15 w-full'>
                        <a
                            href="/resume-en.pdf"
                            download
                            className='flex flex-row justify-center items-center bg-(--text-secondary) text-[#292C33] rounded-2xl px-5 py-2 font-bold mt-6 w-1/3 gap-2 z-1'>
                            Resume
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