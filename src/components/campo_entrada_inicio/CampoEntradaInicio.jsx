import "./CampoEntredaInicio.css";


function CampoEntradaInicio({ tipo, id, nombre, placeholder }) {
    return (
        <div>
            <label htmlFor={id}>{nombre}</label>
            <input type={tipo} id={id} name={nombre.toLowerCase()} required placeholder={placeholder} />
            <span className="error" id={`error-${id}`}></span>
        </div>
    );
}

export default CampoEntradaInicio;
