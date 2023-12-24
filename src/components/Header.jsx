import { faBell, faPhone, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
    return (
        <header className="floats-btns">
            <button className="btn-menu">
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>

            <button className="btn-notifications">
                <FontAwesomeIcon icon={faBell} />
            </button>

            <button className="btn-chat">
                <FontAwesomeIcon icon={faPhone} />
            </button>

            <div className="dropdown menu"></div>

            <div className="dropdown notifications"></div>

            <div className="dropdown chat"></div>
        </header>
    );
}
