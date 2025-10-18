"use client";
import { bakehaus, karla } from "../fonts";
import Glassdiv from "../glassdiv";
import Image from "next/image";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendEmail } from "../../lib/actions"
import { useState } from "react";

export default function Contact({
    id,
}: {
    id: string,
}) {
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

    function validateEntries(formData: FormData) {
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const newErrors: typeof errors = {};

        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!message) {
            newErrors.message = "A message is required.";
        } else if (message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(formData: FormData) {
        const isValid = validateEntries(formData);
        if (!isValid) return;

        sendEmail(formData);
    }

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
                <form
                    action={handleSubmit}
                    className="flex flex-col space-y-4"
                    onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const formData = new FormData(form);

                        const isValid = validateEntries(formData);
                        if (!isValid) return;

                        await sendEmail(formData);

                        form.reset();
                    }}
                >
                    <div className="relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden p-2 rounded-4xl w-1/2">
                        <input
                            type="text"
                            name="email"
                            placeholder="Your email"
                            className={`${karla.className} bg-(--text-primary) w-full px-8 py-4 rounded-3xl text-black font-bold`}
                            aria-describedby="email-error"
                        />
                        <div id="email-error">
                            {errors.email && <p className={`${karla.className} text-red-500 text-sm mt-1 font-bold px-8`}>{errors.email}</p>}
                        </div>
                    </div>
                    <div className=" flex flex-col relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden p-2 rounded-4xl w-full h-[30vh]">
                        <textarea
                            placeholder="Your message..."
                            name="message"
                            className={`${karla.className} bg-(--text-primary) w-full h-full py-4 px-8 rounded-3xl text-black resize-none font-bold`}
                            aria-describedby="message-error"
                        />
                        <div id="message-error">
                            {errors.message && <p className={`${karla.className} text-red-500 text-sm mt-1 font-bold px-8`}>{errors.message}</p>}
                        </div>
                    </div>
                    <div className=" flex justify-end">
                        <div className="relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden p-2 rounded-3xl w-1/4">
                            <button
                                type="submit"
                                className="flex flex-row justify-center items-center bg-white w-full rounded-2xl py-4 px-8 gap-2">
                                <h2 className={`${karla.className} text-[#292C33] text-[16px] font-bold tracking-[.3em]`}>
                                    Send
                                </h2>
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