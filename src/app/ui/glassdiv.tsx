import clsx from "clsx";

export default function Glassdiv({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={clsx(
                "relative backdrop-blur-xs bg-[#1E1E1E]/20 border border-white/10 shadow-lg overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-[linear-gradient(126deg,rgba(255,255,255,0.4)_0%,transparent_40%)] opacity-8" />
            {children}
        </div>
    );
}