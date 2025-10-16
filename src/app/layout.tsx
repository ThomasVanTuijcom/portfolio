import '../app/ui/global.css'
import Script from 'next/script';
import NavBar from './ui/nav/nav';
import Background from './ui/background/background';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
