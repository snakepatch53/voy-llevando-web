import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AlertasForm.css";
import AnimateElement from "./AnimateElement";
import { faPlus, faSave, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import InputForm from "./InputForm";
import ButtonForm from "./ButtonForm";
import { useEffect, useRef } from "react";
import { validateForm } from "../functions/validateForm";

import product_list from "./../mooks/products.json";

export default function AlertasForm({ onClose }) {
    const $form = useRef(null);

    useEffect(() => {
        $form.current?.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validateForm($form.current)) {
                console.log("Formulario válido");
            } else {
                console.log("Formulario inválido");
            }
        });
    }, [$form]);

    return (
        <AnimateElement className="el-forms-styles alertas-page--form" fade={false}>
            <div className="window">
                <button className="el-close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <form ref={$form} onSubmit={() => false}>
                    <div className="scroll-style inputs">
                        <InputForm
                            label="¿Quién realizó la compra?"
                            name="alert_buyer_name"
                            placeholder="Nombre del comprador"
                            errorLabel="El nombre del comprador es obligatorio"
                        />

                        <InputForm
                            label="Transportista"
                            name="alert_carrier_name"
                            placeholder="Selecciona un transportista"
                            type="select"
                            errorLabel="El transportista es obligatorio"
                        >
                            <option value="">Selecciona un transportista</option>
                            <option value="Fedex">Fedex</option>
                            <option value="DHL">DHL</option>
                            <option value="UPS">UPS</option>
                            <option value="Estafeta">Estafeta</option>
                            <option value="Redpack">Redpack</option>
                            <option value="PaqueteExpress">PaqueteExpress</option>
                            <option value="Correos de México">Correos de México</option>
                            <option value="Otro">Otro</option>
                        </InputForm>

                        <InputForm
                            label="Tienda"
                            name="alert_store"
                            placeholder="Selecciona una tienda"
                            type="select"
                            errorLabel="La tienda es obligatoria"
                        >
                            <option value="">Selecciona una tienda</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Ebay">Ebay</option>
                            <option value="Aliexpress">Aliexpress</option>
                            <option value="Otro">Otro</option>
                        </InputForm>

                        <InputForm
                            label="Código de rastreo"
                            name="alert_tracking_code"
                            placeholder="Código de rastreo"
                            errorLabel="El código de rastreo es obligatorio"
                        />

                        <InputForm
                            label="Bill FIle"
                            name="alert_bill_file"
                            placeholder="Bill PDF"
                            type="file"
                            errorLabel="El archivo de la factura es obligatorio"
                        />

                        <InputForm
                            label="Description"
                            name="alert_description"
                            placeholder="Descripción"
                            type="textarea"
                            errorLabel="La descripción es obligatoria"
                        />
                    </div>

                    <div className="input check">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">
                            I accept that the people in charge of transportation of my order, open
                            and unpack it to be able to bring it.
                        </label>
                    </div>

                    <div className="input submit">
                        <ButtonForm label="REGISTRAR" icon={faSave} />
                    </div>
                </form>
                <div className="products-container scroll-style">
                    <form>
                        <h3 className="col-2">Agrega tus productos aqui ⬇️</h3>
                        <InputForm label="Nombre" name="product_name" placeholder="Producto" />
                        <InputForm
                            label="Precio"
                            name="product_price"
                            placeholder="Precio"
                            type="number"
                        />
                        <InputForm
                            className="col-2"
                            label="Descripcion"
                            name="product_description"
                            placeholder="Descripcion"
                            type="textarea"
                        />
                        <InputForm
                            label="Peso"
                            name="product_weight"
                            placeholder="Peso"
                            type="number"
                        />
                        <InputForm
                            label="Cantidad"
                            name="product_quantity"
                            placeholder="Cantidad"
                            type="number"
                        />
                        <div className="col-2">
                            <ButtonForm label="AGREGAR" icon={faPlus} />
                        </div>
                    </form>

                    <div className="product-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Peso</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product_list.map((product) => (
                                    <tr key={product.product_id}>
                                        <td>{product.product_name}</td>
                                        <td>{product.product_price}</td>
                                        <td>{product.product_weight} kg</td>
                                        <td>{product.product_quantity}</td>
                                        <td>
                                            <button>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AnimateElement>
    );
}
