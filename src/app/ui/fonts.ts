import localFont from 'next/font/local';
import { Karla } from 'next/font/google';

export const karla = Karla({ subsets: ['latin'] });
export const bakehaus = localFont({
    src: "./Bakehaus.ttf",
});