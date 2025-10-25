import { useState } from "react";
import Glassdiv from "./glass-div";
import { useTheme } from "./theme-context";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Glassdiv className="flex justify-center items-center rounded-3xl p-5">
            <button onClick={toggleTheme} className="z-1">
                {theme == 'dark' ? "Dark Mode" : "Light Mode"}
            </button>
        </Glassdiv>
    )
}