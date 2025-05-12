import "./CampoEntredaInicio.css";


function CampoEntradaInicio({ tipo, id, nombre, placeholder, onChange }) {
    return (
        <div className="entrada">
            <label htmlFor={id}>{nombre}</label>
            <input 
                type={tipo} 
                id={id} 
                name={nombre.toLowerCase()} 
                required 
                placeholder={placeholder} 
                onChange={onChange}
                autoComplete="off"
            />
            <span className="error" id={`error-${id}`}></span>
        </div>
    );
}


export default CampoEntradaInicio;
