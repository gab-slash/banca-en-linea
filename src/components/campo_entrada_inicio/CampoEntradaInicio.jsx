import "./CampoEntredaInicio.css";

import { ErrorMensaje } from "../mensaje_error/MensajeError"; // Se importa el componente de error

function CampoEntradaInicio({ tipo, id, nombre, placeholder, valor, onChange, error }) {
    return (
        <div className="entrada" style={{ position: "relative" }}>
            <label htmlFor={id}>{nombre}</label>
            <input 
                type={tipo} 
                id={id} 
                name={id} /* ✅ Asegurar que el `name` coincida con el estado */
                required 
                placeholder={placeholder} 
                value={valor} /* ✅ Se mantiene el valor */
                onChange={(e) => onChange(e)} /* ✅ Captura correctamente el cambio */
                autoComplete="off"
            />
            {/* ✅ Muestra error si existe */}
            {error && <ErrorMensaje mensaje={error} />}
        </div>
    );
}

export default CampoEntradaInicio;
