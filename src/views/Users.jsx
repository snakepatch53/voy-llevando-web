import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AnimateElement from "../components/AnimateElement";
import ButtonForm from "../components/ButtonForm";
import "./Users.css";
export default function Users() {
    return (
        <AnimateElement className="main users container">
            <section className="section-table">
                <div className="panel-main-header">
                    <h3>Gestionar Usuarios 👪</h3>
                    <input
                        type="search"
                        name="user_search"
                        id="el-user-search"
                        placeholder="Buscar usuario.."
                    />
                    <ButtonForm label="Nuevo Usuario" icon={faPlus} />
                </div>

                <table className="table-layout">
                    <thead>
                        <tr>
                            <th className="size-show-1">NOMBRE</th>
                            <th>CEDULA</th>
                            <th>CÓDIGO TRACKING</th>
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
                                        <div className="tooltip">Editar</div>
                                        <i className="fas fa-edit"></i>
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
                                        <div className="tooltip">Editar</div>
                                        <i className="fas fa-edit"></i>
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
