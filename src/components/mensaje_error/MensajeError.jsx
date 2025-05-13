import "./MensajeError.css"

function ErrorMensaje({ mensaje }) {
    return mensaje ? <span className="error-mensaje">{mensaje}</span> : null;
}

function ErrorGlobal({ mensaje, onClose }) {
    return (
        mensaje && (
            <div className="error-global-overlay">
                <div className="error-global">
                    <div className="error-icono">
                        X
                    </div>
                    <p>{mensaje}</p> 
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        )
    );
}




export { ErrorMensaje, ErrorGlobal };
