export default function Footer() {
	return (
		<footer className="w-full bg-[var(--text-secondary)] px-4 py-6">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<h5 className="text-center text-sm font-extrabold text-[var(--text-primary)] sm:text-left">
					© {new Date().getFullYear()} Thomas Van Tuijcom — Tous droits réservés
				</h5>
			</div>
		</footer>
	);
}
