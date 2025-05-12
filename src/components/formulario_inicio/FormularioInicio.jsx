import CampoEntradaInicio from "../campo_entrada_inicio/CampoEntradaInicio"; // Ahora está en la misma carpeta
import BotonInicio from "../boton_inicio/BotonInicio";





function FormularioInicio() {
    return (
        <form action="/API" method="POST" id="formulario" noValidate>
            <CampoEntradaInicio tipo="text" id="usuario" nombre="Correo" placeholder="Escribe tu correo" />
            <CampoEntradaInicio tipo="password" id="password" nombre="Contraseña" placeholder="Escribe tu contraseña" />
            <BotonInicio texto="Iniciar Sesión" />
        </form>
    );
}

export default FormularioInicio;
