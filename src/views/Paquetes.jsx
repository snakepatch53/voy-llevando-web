import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Paquetes.css";
import {
    faArrowRight,
    faBoxOpen,
    faBoxes,
    faBus,
    faPlane,
    faShip,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";
import AnimateElement from "../components/AnimateElement";

export default function Paquetes() {
    return (
        <AnimateElement className="main paquetes container">
            <section className="section-state">
                <div className="item">
                    <span>En bodegas de Estados Unidos</span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faBoxOpen} />
                    </div>
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="item active">
                    <span>En tránsito a aeropuerto de USA</span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faBus} />
                    </div>
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="item">
                    <span>En Ruta a Ecuador</span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faPlane} />
                    </div>
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="item">
                    <span>Llegando a Ecuador</span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faShip} />
                    </div>
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="item">
                    <span>En bodegas de Ecuador</span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faBoxes} />
                    </div>
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="item">
                    <span>En ruta de entrega</span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </section>

            <section className="section-table">
                <table className="table-layout">
                    <thead>
                        <tr>
                            <th className="size-show-1">GUÍAS</th>
                            <th>DESCRIPCIÓN</th>
                            <th>TRACKING</th>
                            <th className="size-show-1">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="size-show-1">65456</td>
                            <td>Pack de pacman xdd</td>
                            <td>En tránsito a aeropuerto USA</td>
                            <td className="size-show-1">
                                <div className="btn-group">
                                    <button className="btn btn-primary">
                                        <div className="tooltip">Traking</div>
                                        <i className="fas fa-eye"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="size-show-1">65456</td>
                            <td>Mi caja de cajas 😅</td>
                            <td>Llegando a Ecuador</td>
                            <td className="size-show-1">
                                <div className="btn-group">
                                    <button className="btn btn-primary">
                                        <div className="tooltip">Traking</div>
                                        <i className="fas fa-eye"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </AnimateElement>
    );
}
