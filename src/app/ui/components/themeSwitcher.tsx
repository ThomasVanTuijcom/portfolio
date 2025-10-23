import { useState } from "react";
import Glassdiv from "./glassdiv";

export default function ThemeSwitcher(){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const newTheme = theme == 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme == 'dark');
    }

    return (
        <Glassdiv className="flex justify-center items-center rounded-3xl p-5">
            <button onClick={toggleTheme} className="z-1">
                {theme == 'dark' ? "Dark Mode" : "Light Mode"}
            </button>
        </Glassdiv>
    )
}