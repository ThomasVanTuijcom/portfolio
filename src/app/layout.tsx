import '../app/ui/global.css'
import Script from 'next/script';
import NavBar from './ui/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
