import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPaperPlane, faFolder, faCompass } from "@fortawesome/free-regular-svg-icons";

export default function NavBar() {
    return (
        <div className="flex justify-center my-8">
            <div className="flex flex-row justify-between w-1/5 bg-red-400 rounded-3xl px-10 py-2">
                <FontAwesomeIcon icon={faHouse} className="w-8" />
                <FontAwesomeIcon icon={faCompass} className="w-8" />
                <FontAwesomeIcon icon={faFolder} className="w-8" />
                <FontAwesomeIcon icon={faUser} className="w-8" />
                <FontAwesomeIcon icon={faPaperPlane} className="w-8" />
            </div>
        </div>
    )
}