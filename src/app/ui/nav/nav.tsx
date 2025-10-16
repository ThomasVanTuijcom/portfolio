'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPaperPlane, faFolder, faCompass } from "@fortawesome/free-regular-svg-icons";
import Image from 'next/image';
import Glassdiv from "../glassdiv";

export default function NavBar() {
    return (
        <div className="flex justify-center my-8">
            <Glassdiv className="flex flex-row justify-between items-center w-1/5 h-14 px-8 py-3 rounded-full">
                {[
                    { src: "/navIcons/icon_Home.png", target: "home" },
                    { src: "/navIcons/icon_Tool.png", target: "skills" },
                    { src: "/navIcons/icon_Folder.png", target: "projects" },
                    { src: "/navIcons/icon_User.png", target: "about" },
                    { src: "/navIcons/icon_Message.png", target: "contact" },
                ].map(({ src, target }, i) => (
                    <div
                        key={i}
                        onClick={() =>
                            document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="relative w-8 h-8">
                        <Image
                            src={src}
                            alt={target}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </Glassdiv>
        </div>
    )
}