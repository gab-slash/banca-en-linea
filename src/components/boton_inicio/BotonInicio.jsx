import "./BotonInicio.css"

function BotonInicio({ texto, onClick }) {
    return (
        <button className="boton-inicio" onClick={onClick}>
            {texto}
        </button>
    );
}

export default BotonInicio;
