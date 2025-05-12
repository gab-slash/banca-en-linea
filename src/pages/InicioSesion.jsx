import EncabezadoInicio from "../components/encabezado_inicio/EncabezadoInicio";
import FormularioInicio from "../components/formulario_inicio/FormularioInicio";
import OpcionesInicio from "../components/opciones_sesion/OpcionesSesion";

function InicioSesion() {  // Cambia a PascalCase
    return (
        <>
            <EncabezadoInicio />
            <FormularioInicio />
            <OpcionesInicio />
        </>
    );
}

export default InicioSesion;  // Exporta con el mismo nombre
