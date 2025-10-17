import { bakehaus, karla } from "../fonts";
import Glassdiv from "../glassdiv";
import Image from "next/image";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendEmail } from "../../lib/actions"

export default function Contact({
    id,
}: {
    id: string,
}) {

    return (
        <div id={id} className="flex flex-row justify-center items-center h-[100vh]">
            <div className="flex flex-col w-[40%]">
                <div className="flex flex-row items-center gap-4">
                    <div className="relative w-30 h-30">
                        <Image
                            src="/envelope.svg"
                            alt="icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className={`${bakehaus.className} text-4xl font-regular`}>Get in Touch</h2>
                </div>
                <form action={sendEmail} className="flex flex-col space-y-4">
                    <input type="email" name="" id="" />
                    <div className="relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden p-2 rounded-4xl w-1/2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className={`${karla.className} bg-(--text-primary) w-full px-8 py-4 rounded-3xl text-black font-bold`}
                        />
                    </div>
                    <div className="relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden p-2 rounded-4xl w-full h-[30vh]">
                        <textarea
                            placeholder="Your message..."
                            name="message"
                            className={`${karla.className} bg-(--text-primary) w-full h-full py-4 px-8 rounded-3xl text-black resize-none font-bold`}
                        />
                    </div>
                    <div className=" flex justify-end">
                        <div className="relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden p-2 rounded-3xl w-1/4">
                            <button className="flex flex-row justify-center items-center bg-white w-full rounded-2xl py-4 px-8 gap-2">
                                <h2 className={`${karla.className} text-[#292C33] text-[16px] font-bold tracking-[.3em]`}>Send</h2>
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/paperplane.png"
                                        alt="icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}