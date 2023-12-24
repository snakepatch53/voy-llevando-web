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
                            <th>TIPO</th>
                            <th className="size-show-1">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="size-show-1">Fausto Perez</td>
                            <td>1400703770</td>
                            <td>Super Administrador</td>
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
                            <td className="size-show-1">Carlos Fabian</td>
                            <td>0704870488</td>
                            <td>Administrador</td>
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
                            <td className="size-show-1">Pedro Fernandez</td>
                            <td>5004870488</td>
                            <td>Carrier</td>
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
