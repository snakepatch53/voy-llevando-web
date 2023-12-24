import "./InputForm.css";

export default function InputForm({
    children,
    label,
    name,
    placeholder,
    type = "text",
    errorLabel = "",
    className = "",
}) {
    return (
        <div className={"input-form-component " + type + " " + className}>
            <label htmlFor={name}>{label}</label>

            {(type === "text" || type === "password" || type === "file" || type === "number") && (
                <Input type={type} name={name} id={name} placeholder={placeholder} />
            )}

            {type === "select" && (
                <Select name={name} id={name}>
                    {children}
                </Select>
            )}

            {type === "textarea" && <Textarea name={name} id={name} placeholder={placeholder} />}
            {errorLabel && <span className="error-label">{errorLabel}</span>}
        </div>
    );
}

function Input({ ...props }) {
    return <input {...props} />;
}

function Select({ ...props }) {
    return <select {...props} />;
}

function Textarea({ ...props }) {
    const className = props.className ? props.className : "";
    return <textarea className={"scroll-style " + className} {...props} />;
}
