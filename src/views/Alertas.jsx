import { useState } from "react";
import AlertasForm from "../components/AlertasForm";
import AnimateElement from "../components/AnimateElement";
import "./Alertas.css";
import ButtonForm from "../components/ButtonForm";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import alert_list from "./../mooks/alertas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Alertas.propTypes = null;
export default function Alertas() {
    const [showForm, setShowForm] = useState(false);

    return (
        <AnimateElement className="main alertas container">
            <section className="section-table">
                <div className="panel-main-header">
                    <h3>Notificar Paquetes 📦</h3>
                    <ButtonForm
                        onClick={() => setShowForm(true)}
                        label="Nueva Entrega"
                        icon={faPlus}
                    />
                </div>

                <table className="table-layout">
                    <thead>
                        <tr>
                            <th className=" size-show-1">GUÍAS</th>
                            <th>ENCARGADO</th>
                            <th>CÓDIGO TRACKING</th>
                            <th className="size-show-1">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody id="element-table">
                        {alert_list.map((alert) => (
                            <tr key={alert.alert_id}>
                                <td className="size-show-1">{alert.alert_guide}</td>
                                <td>{alert.alert_buyer_name}</td>
                                <td>{alert.alert_tracking_code}</td>
                                <td className="size-show-1">
                                    <div className="btn-group">
                                        <button className="btn btn-primary">
                                            <div className="tooltip">Editar</div>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {showForm && <AlertasForm onClose={() => setShowForm(false)} />}
        </AnimateElement>
    );
}
