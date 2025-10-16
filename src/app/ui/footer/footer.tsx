import { karla } from "../fonts";

export default function Footer()
{
    return (
        <div className="flex flex-row justify-center items-center bg-(--text-secondary) h-[5vh]">
            <h5 className={`${karla.className} font-extrabold`}>Tous doits réservés à Thomas Van Tuijcom</h5>
        </div>
    )
}