import "./ButtonForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonForm({ icon = null, label = "", type = 2, ...props }) {
    return (
        <button className={"button-form-component type-" + type} {...props}>
            <span>{label}</span>
            {icon && <FontAwesomeIcon icon={icon} />}
        </button>
    );
}
