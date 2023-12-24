import {
    faBoxOpen,
    faHandshake,
    faHistory,
    faQuestionCircle,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const { pathname } = useLocation();
    const isLocation = (optionLocation) => {
        if (pathname == optionLocation) return "active";
        return "";
    };
    return (
        <div className="sidebar">
            <div className="container">
                <div className="img logo">
                    {/* <img
                        src="<?= $DATA['http_domain'] ?>public/img/logo2.png"
                        alt="Logo de Vaya Llevando"
                    /> */}
                    <img src="./img/logo2.png" alt="Logo de Vaya Llevando" />
                </div>

                <div className="img photo">
                    {/* <img
                        src="<?= $DATA['http_domain'] ?>public/img.users/<?= $_SESSION['user_photo'] ?>"
                        alt="Foto del usuario"
                    /> */}
                    <img src="/img.users/default.png" alt="Foto del usuario" />
                    {/* <label><?= $_SESSION['user_name'] . " " . $_SESSION['user_lastname'] ?></label> */}
                    <label>User Name</label>
                </div>

                <div className="options options-nav">
                    {/* <?php if ($_SESSION['user_type'] == 1) { ?> */}
                    <Link to="/users" className={"option " + isLocation("/users")}>
                        <FontAwesomeIcon icon={faUsers} />
                        <label>Usuarios</label>
                    </Link>
                    {/* <?php } ?> */}

                    <Link to="/paquetes" className={"option " + isLocation("/paquetes")}>
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <label>Mis Paquetes</label>
                    </Link>

                    <Link to="/alertas" className={"option " + isLocation("/alertas")}>
                        <FontAwesomeIcon icon={faHandshake} />
                        <label>Notificar Paquetes</label>
                    </Link>

                    {/* <a href="/tracking" className="option <?= $DATA['name'] == 'tracking' ? 'active' : '' ?>">
                <i className="fas fa-map-marked-alt"></i>
                <label>Tracking</label>
            </a> */}

                    <Link to="/historial" className={"option " + isLocation("/historial")}>
                        <FontAwesomeIcon icon={faHistory} />
                        <label>Historial</label>
                    </Link>

                    {/* <a href="/faq" className="option" <?= $DATA['name'] == 'faq' ? 'active' : '' ?>> */}
                    <Link to="/faq" className={"option " + isLocation("/faq")}>
                        <FontAwesomeIcon icon={faQuestionCircle} />
                        <label>¿Cómo funciona?</label>
                    </Link>
                </div>

                <div className="options options-btn">
                    {/* <?php
            foreach ($DATA['locker'] as $locker) {
                if ($locker['locker_popup']) {
            ?>
                    <button className="option"><?= $locker['locker_name'] ?></button>
            <?php }
            } ?>
            <label className="mark">Llega a</label>
            <?php
            foreach ($DATA['locker'] as $locker) {
                if (!$locker['locker_popup']) {
            ?>
                    <label className="option"><?= $locker['locker_name'] ?></label>
            <?php }
            } ?> */}
                    <button className="option">Danbury, CT-USA</button>
                    <label className="mark">Llega a</label>
                    <label className="option">Gualaceo, Azuay - ECU</label>
                </div>
            </div>
        </div>
    );
}
