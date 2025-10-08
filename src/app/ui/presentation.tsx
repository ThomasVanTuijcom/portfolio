import Image from 'next/image';

export default function Presentation() {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row w-3/5 h-[600px] bg-red-400 rounded-3xl my-[130px] p-5">
                <div className="flex flex-row">
                    <div className="w-1/2 px-5">
                        <h1>Hello,</h1>
                        <h1>I'm Thomas,</h1>
                        <h3>Junior Developer</h3>
                        <h4>Brussels, Belgium</h4>
                        <p>
                            Junior application developer with a solid background in programming and web technologies, experienced with languages such as Java, Kotlin, PHP, JavaScript, and C/C++, as well as frameworks including React, Spring, Django, and Laravel.
                            My journey has given me the opportunity to work on both academic projects and professional assignments, including an internship focused on SAP integration.
                            Through these experiences, I have developed a strong interest in teamwork, an eye for code quality, and the ability to quickly learn new tools. I am now looking to apply these skills in a professional environment where I can continue to grow and make a meaningful contribution.
                        </p>
                        <button>Resume</button>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <Image
                            src="/illustration.png"
                            width={560}
                            height={620}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing mobile version"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}