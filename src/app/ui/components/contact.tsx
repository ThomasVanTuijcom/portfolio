"use client";
import { bakehaus, karla } from "../fonts";
import Image from "next/image";
import { sendEmail } from "../../lib/actions";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "./theme-context";

export default function Contact({ id }: { id: string }) {
	const [errors, setErrors] = useState<{ email?: string; message?: string }>(
		{},
	);
	const t = useTranslations("Contact");
	const { theme } = useTheme();

	function validateEntries(formData: FormData) {
		const email = formData.get("email") as string;
		const message = formData.get("message") as string;
		const newErrors: typeof errors = {};

		if (!email) {
			newErrors.email = t("emailReq");
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = t("emailValid");
		}

		if (!message) {
			newErrors.message = t("msgReq");
		} else if (message.length < 10) {
			newErrors.message = t("msgValid");
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
		<div
			id={id}
			className="flex h-[100vh] w-full flex-row items-center justify-center"
		>
			<div className="flex w-full flex-col sm:w-2/5">
				<div className="flex flex-row items-center justify-center gap-4 lg:justify-normal">
					<div className="relative h-30 w-30">
						<Image
							src={theme == "light" ? "/envelope-light.svg" : "/envelope.svg"}
							alt="icon"
							fill
							className="object-contain"
						/>
					</div>
					<h2
						className={`${bakehaus.className} font-regular text-2xl sm:text-4xl`}
					>
						{t("title")}
					</h2>
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
					<div className="relative w-full overflow-hidden rounded-4xl border border-white/10 bg-[var(--glass-background)] p-2 shadow-lg backdrop-blur-xs sm:w-1/2">
						<input
							type="text"
							name="email"
							placeholder={t("emailPlaceholder")}
							className="w-full rounded-3xl bg-[#f5f5f5] px-8 py-4 font-bold text-black placeholder-[#11141C]"
							aria-describedby="email-error"
						/>
						<div id="email-error">
							{errors.email && (
								<p className="mt-1 px-8 text-sm font-bold text-red-500">
									{errors.email}
								</p>
							)}
						</div>
					</div>
					<div className="relative flex h-[30vh] w-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-[var(--glass-background)] p-2 shadow-lg backdrop-blur-xs">
						<textarea
							placeholder={t("msgPlaceholder")}
							name="message"
							className="h-full w-full resize-none rounded-3xl bg-[#f5f5f5] px-8 py-4 font-bold text-black placeholder-[#11141C]"
							aria-describedby="message-error"
						/>
						<div id="message-error">
							{errors.message && (
								<p className="mt-1 px-8 text-sm font-bold text-red-500">
									{errors.message}
								</p>
							)}
						</div>
					</div>
					<div className="flex w-full lg:justify-end">
						<div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1E1E1E]/20 p-2 shadow-lg backdrop-blur-xs lg:w-2/7">
							<button
								type="submit"
								className="flex w-full flex-row items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4"
							>
								<h2 className="text-[16px] font-bold tracking-[.3em] text-[#292C33]">
									{t("sendBtn")}
								</h2>
								<div className="relative h-5 w-5">
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
	);
}
